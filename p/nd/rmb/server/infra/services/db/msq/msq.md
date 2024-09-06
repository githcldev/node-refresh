
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

ON DELETE POST disable cascading data or dependent data in other tables
	same likewise for other tables also

-------------------------------------------------

UPDATE POST_HIT_COUNT, CMS_PAGE_HIT_COUNT, USER_PAGE_HIT_COUNT on every full text read operation trigger
	COUNT should not be updated on showing items in some list like:
		top/latest pages, top/latest post, top/latest users
			someday we will also have top/latest comment, top/latest event, top/latest poll
				top/latest widget, top/latest donor, donor of the year

-------------------------------------------------

all cms_user* should be renamed to user*
	because cms_* tbl are for core-system only
		which will be copied to every cloud location
		whereas user, post, etc. entities are location specific

-------------------------------------------------

USE 3at1;
UPDATE `3at1`.`cms_config`
SET `value` = 'aa-value'
WHERE `key` = 'a-key';

-------------------------------------------------

USE 3at1;
INSERT INTO `3at1`.`cms_config`
(`key`,
`value`,
`modified_by`,
`created_by`,
`modified_gmt`,
`creation_gmt`)
VALUES
('b-key',
'b-value',
1,
1,
'm_gmt',
'c_gmt');


-------------------------------------------------

default-time-zone='timezone'
SET GLOBAL time_zone = "Asia/Calcutta";
SET time_zone = "+05:30";
SET @@session.time_zone = "+05:30";

-------------------------------------------------

Data Type	                Storage Required
CHAR(M)	The compact family of InnoDB row formats optimize storage for variable-length character sets. See COMPACT Row Format Storage Characteristics. Otherwise, M × w bytes, <= M <= 255, where w is the number of bytes required for the maximum-length character in the character set.
BINARY(M)	                M bytes, 0 <= M <= 255
VARCHAR(M), VARBINARY(M)	L + 1 bytes if column values require 0 − 255 bytes, L + 2 bytes if values may require more than 255 bytes
TINYBLOB, TINYTEXT	      L + 1 bytes, where L < 2^8      256
BLOB, TEXT              	L + 2 bytes, where L < 2^16     65536
MEDIUMBLOB, MEDIUMTEXT  	L + 3 bytes, where L < 2^24     16777216
LONGBLOB, LONGTEXT      	L + 4 bytes, where L < 2^32     4294967296
ENUM('value1','value2',...)	1 or 2 bytes, depending on the number of enumeration values (65,535 values maximum)
	// LEVEL, GMT
SET('value1','value2',...)	1, 2, 3, 4, or 8 bytes, depending on the number of set members (64 members maximum)
-------------------------------------------------
Type	    Storage (Bytes)	Minimum Value   Maximum Value
TINYINT	  1             	-128	          127							// BROWSER, 
SMALLINT	2             	-32768	        32767						// USER
MEDIUMINT	3             	-8388608	      8388607					// POST, SECTION, PAGE,
INT	      4             	-2147483648	    2147483647			// 
-------------------------------------------------
Data Type	  Storage Required Before MySQL 5.6.4	    Storage Required after MySQL 5.6.4
TIMESTAMP	      4 bytes	                              4 bytes + fractional seconds storage
DATETIME	      8 bytes	                              5 bytes + fractional seconds storage
TIME	          3 bytes	                              3 bytes + fractional seconds storage
DATE	          3 bytes	                              3 bytes
YEAR	          1 byte	                              1 byte
BIGINT	  8             	-2^63	          2^63-1
-------------------------------------------------

An Identifying relationship specifies that a child object cannot exist without the parent object

Non-identifying relationships specifies a regular association between objects, 1:1 or 1:n cardinality.

Non-identifying relationships can be specified as optional where a parent is not required or mandatory where a parent is required by setting the parent table cardinality...

--------------------------------------------------

An identifying relationship is when the existence of a row in a child table depends on a row in a parent table. This may be confusing because it's common practice these days to create a pseudokey for a child table, but not make the foreign key to the parent part of the child's primary key. Formally, the "right" way to do this is to make the foreign key part of the child's primary key. But the logical relationship is that the child cannot exist without the parent.

Example: A Person has one or more phone numbers. If they had just one phone number, we could simply store it in a column of Person. Since we want to support multiple phone numbers, we make a second table PhoneNumbers, whose primary key includes the person_id referencing the Person table.

We may think of the phone number(s) as belonging to a person, even though they are modeled as attributes of a separate table. This is a strong clue that this is an identifying relationship (even if we don't literally include person_id in the primary key of PhoneNumbers).

A non-identifying relationship is when the primary key attributes of the parent must not become primary key attributes of the child. A good example of this is a lookup table, such as a foreign key on Person.state referencing the primary key of States.state.  Person is a child table with respect to States. But a row in Person is not identified by its state attribute. I.e. state is not part of the primary key of Person.

A non-identifying relationship can be optional or mandatory, which means the foreign key column allows NULL or disallows NULL, respectively.

-------------------------------------------------

cms_status_types
	// custom ids for this table
		id from 100 to 199		means 		higher priority
		id from 200 to 299		means 		ok status
		id from 300 to 399		means 		acl failure between user and cms, therefore redirect to login
		id from 400 to 499		means 		resource block or not found or client error
		id from 500 to 599		means 		acl failure between cms and third party
	// or we can use just 1, 2, 3, 4 and 5 at the starting

	enum for post_status			ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9')
		[
			'publish',
			'future',
			'draft',
			'pending',
			'private',
			'trash',
			'auto-draft',
			'child_post'
		]
		
	enum for cms_record_status		ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9')
		[
			'high-priority',
			'ok',
			'acl-failure-between-user-and-cms',
			'resource-block-or-not-found',
			'acl-failure-between-user-and-third-party'
		]
		
	
cms_ex_image_network
cms_ex_file_network

log_file_uploads
cms_donate_vendors
cms_donate_entry

user_snippets
user_sections
user_sections_group

-------------------------------------------------

n-m relationship
  http://docs.sequelizejs.com/manual/associations.html#belongs-to-many-associations

-------------------------------------------------

https://github.com/sidorares/node-mysql2
Faster / Better Performance
Prepared Statements
MySQL Binary Log Protocol
MySQL Server
Extended support for Encoding and Collation
Promise Wrapper
Compression
SSL and Authentication Switch
Custom Streams
Pooling

-------------------------------------------------

https://github.com/mysqljs/mysql
SSL options
Terminating connections
Pooling connections
Pool options
Pool events
Closing all the connections in a pool
PoolCluster
PoolCluster options
Switching users and altering connection state
Server disconnects
Performing queries
Escaping query values
Escaping query identifiers
Preparing Queries
Custom format
Getting the id of an inserted row
Getting the number of affected rows
Getting the number of changed rows
Getting the connection ID
Executing queries in parallel
Streaming query rows
Piping results with Streams
Multiple statement queries
Stored procedures
Joins with overlapping column names
Transactions
Ping
Timeouts
Error handling
Exception Safety
Type casting
Connection Flags
Debugging and reporting problems

-------------------------------------------------
https://www.mysql.com/products/community/
Stored Procedures
  to improve developer productivity
MySQL Workbench
  for visual modeling, SQL development and administration
SQL and NoSQL
  for developing both relational and NoSQL applications

-------------------------------------------------

mysql version docs
  specially for the X DevAPI (using the X Protocol) that was introduced in MySQL 5.7.12.
  https://dev.mysql.com/doc/dev/connector-nodejs/8.0/


-------------------------------------------------

Mysql features:
  select, distinct, select top, drop, truncate,
  alias, wildcard operators, union,
  join ( cartesian / cross & self ),
  constraints
  sql triggers
  https://www.mysql.com/products/community/

