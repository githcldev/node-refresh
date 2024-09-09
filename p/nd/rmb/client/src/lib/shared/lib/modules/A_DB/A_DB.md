


-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------

A_DB.A_DB_CONNECTION = new zango.Db('appdb', 1, {
        test: { age: true },
        config: { key: true, value: false, mdate: true },
        menu: { key: true, value: false, mdate: true },
        page: { key: true, value: false, mdate: true },   
        image: [key, value, mdate],
        user: { key: true, value: false, mdate: true },
        settings: [key, value, mdate]
      });
      // let docs = [
      //     { key: 'c1', value: 1,mdate: 'c1md' },
      //     { key: 'c2', value: 2,mdate: 'c2md' }
      // ];
      // A_DB_CURRENT_COLLECTION.insert(docs).then(() => {
      //     A_DB_CURRENT_COLLECTION.find().forEach(doc => {
      //      console.log('c - record: ', doc)  
      //     });
      // }).catch(error => {
      //  console.error(error)  
      // });

-------------------------------------------------

search_ex_vendor: [key, value, mdate],
posts: { key: true, value: false, mdate: true },
user_menu: [key, value, mdate],

-------------------------------------------------

storing different language content in table is different issue
	indexeddbshim-UnicodeIdentifiers.min.js

-------------------------------------------------

npm
npm install indexeddbshim
Browser set-up
Add the following scripts to your page:

<script src="node_modules/@babel/polyfill/dist/polyfill.min.js"></script>
<script src="dist/indexeddbshim.min.js"></script>
If you need full Unicode compliance (handling special non-alphanumeric identifiers in store and index names), use the following instead:

<script src="node_modules/@babel/polyfill/dist/polyfill.min.js"></script>
<script src="dist/indexeddbshim-UnicodeIdentifiers.min.js"></script>

-------------------------------------------------

https://github.com/axemclion/IndexedDBShim

-------------------------------------------------

IndexedDBShim works on Windows Phone via a Cordova/PhoneGap plug-in. There are two plugins available: cordova-plugin-indexedDB and cordova-plugin-indexeddb-async. Both plug-ins rely on a WebSQL-to-SQLite adapter, but there are differences in their implementations. Try them both and see which one works best for your app.

Building

-------------------------------------------------

(function () {
    // This works on all browsers, and only uses IndexedDBShim as a final fallback
    let indexedDB = window.indexedDB || window.mozIndexedDB || // eslint-disable-line no-var
        window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

    // This code will use the native IndexedDB, if it exists, or the shim otherwise
    indexedDB.open('MyDatabase', 1);
})();

-------------------------------------------------

Compatibility as of 5-2019
	IndexedDB 2.0 - CR 	85.96%
		Improvements to Indexed DB, including getAll(), renaming stores and indexes, and binary keys.
	IndexedDB - REC 	96.17%
		Method of storing data client-side, allows indexed database queries.

-------------------------------------------------

lets' have a local DB with crud till the time backend is not ready

-------------------------------------------------

This module flows:
  It will work when browser support indexed_db
  We can use it to store image and files also
  As of 2019 non-support browser are as follows:
    - 
  If the user open webpage on non-supported browser. Then we will through a dialog
    at site start, requesting user to switch to supported browser.
  index / user / admin will chech supported browser before loading content.
    We will not load webpage content for non-supporter browser initially
  
  localisation string dictionary should too be stored here

-------------------------------------------------


let db = new zango.Db('mydb', { people: ['age'] });
let people = db.collection('people');

let docs = [
    { name: 'Frank', age: 20 },
    { name: 'Thomas', age: 33 },
    { name: 'Todd', age: 33 }
];

people.insert(docs).then(() => {
    return people.find().forEach(doc => {
      console.log('doc:', doc)
    });
}).catch(error => {
  console.error(error)
});

-------------------------------------------------

A_I_DB		// 	App Indexed DataBase

/**
 * Comment
 *
 * @class
 * @param {string=} message The message.
 */