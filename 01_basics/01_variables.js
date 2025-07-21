const accountId = 144553
let accountEmail = "arpita@google.com"
var accountPassword = "abc123"
accountCity = "Bhubaneswar"
let accountState;

// accountId = 2 // not allowed


accountEmail = "ad@yahoo.com"
accountPassword = "abcd1234"
accountCity = "Cuttack"

console.log(accountId);

/*
Prefer not to use var because of the issue in both block and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])