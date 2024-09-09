DbUserCore

// https://docs.mongodb.com/manual/reference/built-in-roles/#root
use admin
for port 27018 at off password for root is 1-8
db.createUser({ user: "root",pwd: "1234",roles: ["root"] })
for port 27018 at off password length given was 9
for port 27017 at off password length given was 4
/* Below are user/roles for <urDb> */

use <urDb>
db.createUser({user:"u1",pwd:"pwd1",roles:["read"]})
db.createUser({user:"u2",pwd:"pwd2",roles:["readWrite"]})
db.createUser({user:"u3",pwd:"pwd3",roles:["dbAdmin"]})
db.createUser({user:"u4",pwd:"pwd4",roles:["dbOwner"]})
db.createUser({user:"u5",pwd:"pwd5",roles:["userAdmin"]})

/* Below roles are only available for users that authenticate to admin database */
use admin
db.createUser({user:"u6",pwd:"pwd6",roles:["clusterAdmin"]})
db.createUser({user:"u7",pwd:"pwd7",roles:["clusterManager"]})
db.createUser({user:"u8",pwd:"pwd8",roles:["clusterMonitor"]})
db.createUser({user:"u9",pwd:"pwd9",roles:["hostManager"]})
db.createUser({user:"u10",pwd:"pwd0",roles:["backup"]})
db.createUser({user:"u11",pwd:"pwd1",roles:["restore"]})
db.createUser({user:"u12",pwd:"pwd2",roles:["readAnyDatabase"]})
db.createUser({user:"u13",pwd:"pwd3",roles:["readWriteAnyDatabase"]})
db.createUser({user:"u14",pwd:"pwd4",roles:["userAdminAnyDatabase"]})
db.createUser({user:"u15",pwd:"pwd5",roles:["dbAdminAnyDatabase"]})

/* Create custom role for you db */
use admin
db.createRole(
  {
    role: "simpleCrudRole",
    privileges: [{ 
      resource: { db: "", collection: "" },
      actions: [ "" ] 
    }],
    roles: []
  }
)

/* Grant roles to users */
use <urDb>
db.grantRolesToUser(
    "<Db Username>",
    [
      { role: "<Build-in / Custom roleName>", db: "<urDb>" }
    ]
)

/*  db auth/logout */
use <urDb>
db.auth("username", "password")
db.logout()