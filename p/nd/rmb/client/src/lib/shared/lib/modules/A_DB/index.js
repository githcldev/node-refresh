'use strict';
let db_connec = null;
let A_DB = {}
A_DB.getTblDt = async function getTblDt(tblName) {
	return new Promise(function (resolve, reject) {
    let col = A_DB.getCollection(tblName);
    col.find().toArray((error, docs) => {
      if (error) reject(false)
      else if (docs) resolve(docs)
    });
  });
}
A_DB.getAllTblsData = async function getAllTblsData() {	// return Array [] where tbl_name is key with data
	console.log("A_DB.getTbl is ready with ping " + A_DB.A_DB_COUNTER++)
		let tbls = A_DB.getAllTbls(), i = 0;
		let tblsSize = tbls.length, outDataArray = [];
		try{
			for(i = 0; i < tblsSize; i++){
				// get data for each tbl
				let tblDt = await A_DB.getTblDt (tbls[i])
				if(tblDt) {
					outDataArray.push({
						tblName: tbls[i],
						index: i,
						data: tblDt
					})
				}
				if(i + 1 === tblsSize) return outDataArray
			}
		}catch (e) {
			return false
		}
}
A_DB.truncate = async function truncate(col) {
	try{
	if(typeof col === "string") col = A_DB.getCollection(col)
		return new Promise(function (resolve, reject) {
			if(col === false) reject(false)
			col.remove({ _id: { $gte: 0 } }, (error) => {
					if (error) reject(false)
					else resolve(true)
			});
		});
	} catch(e) {
		console.log("Unable to truncate tbl => " + col)
		return false
	}
}
A_DB.connect = async function connect() {
	console.log("A_DB.getTbl is ready with ping " + A_DB.A_DB_COUNTER++)
	return new Promise(function (resolve, reject) {
		try{
			// TODO cmsDistributionMode functionalty to save js / css to dbTbl
			// if(cmsDistributionMode) {
			// 	A_DB.A_DB_CONNECTION = new zango.Db('testb', 2, {
			// 		test: {age: true},
			// 		jsrc: {key: true},
			// 		csrc: {key: true},
			// 		config: { key: true },
			// 		menu: { key: true },
			// 		featuredpage: { key: true }
			// 	});
			// } else {
				A_DB.A_DB_CONNECTION = new zango.Db('hstar', 7, {
					config: { key: true },
					menu: { key: true },
					searchKeys: { key: true, date: false },
					featuredpage: { key: true }
				});
			// }
			resolve(true)
		} catch (db_connec_error) {
			reject(false)
		}
	});
}
A_DB.getAllTbls = function getAllTbls() {	// return Array []
	return Object.keys(A_DB.A_DB_CONNECTION._cols)	
}
A_DB.matchCollectionVersion = function matchCollectionVersion(req_tbl) {
	try {
		return A_DB.A_DB_CURRENT_COLLECTION.find().limit(1).toArray((error, docs) => {
		    if (error) cb(false)
		    else if(docs.length > 0) {
					console.log(docs)
					debugger;
					cb(true)
				}
		});
	} catch (err) {
		// console.log(err.message)
		return false
	}
}
A_DB.getCollection = function getCollection(collection_name) {
	console.log("A_DB.getCollection is ready with ping " + A_DB.A_DB_COUNTER++)
	try {
		return A_DB.A_DB_CONNECTION.collection(collection_name);
	} catch (err) {
		return false
	}
}
A_DB.ping = function ping() {
	console.log("A_DB.ping is ready with ping " + A_DB.A_DB_COUNTER++)
}
A_DB.A_DB_CONNECTION = null;
A_DB.A_DB_COUNTER = 0;
module.exports = A_DB;