"use strict";
var sort;
(function (sort) {
    sort[sort["ASC"] = 0] = "ASC";
    sort[sort["DESC"] = 1] = "DESC";
})(sort || (sort = {}));
; //This type of enum assigned automatically an incremental index to the enum property
var permission;
(function (permission) {
    permission["FULL"] = "FULL";
    permission["READ"] = "READ";
    permission["WRITE"] = "WRITE";
    permission["VIEW"] = "VIEW";
})(permission || (permission = {}));
;
var role;
(function (role) {
    role[role["ADMIN"] = -5] = "ADMIN";
    role[role["SALES"] = -1] = "SALES";
    role[role["SUPPORT"] = -10] = "SUPPORT";
})(role || (role = {}));
;
const person = {
    name: 'William',
    age: 31,
    hobbies: ['Sleep', 'Eat', 'Code'],
    access: [role.ADMIN, permission.FULL],
    bookmarks: [1, 'Charles Dickens', 'Oliver Twist', 201, { a: 'ABC', b: 'DEF' }]
};
const favoriteSports = ['Basketball', 'Football'];
for (const favoriteSport of favoriteSports) {
    console.log(favoriteSport.toLowerCase());
}
console.log(person.name);
