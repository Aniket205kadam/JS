const accountID = 144553;
let accountEmail = "aniket@gmail.com";
var accountPassword = "12345";
//this is not the recommended way
accountCity = "Devgad";
let accountState;

// accountID = 2 //not allowed

/*
Prefer not to use var
because of issues in block scope and functional scope
*/

accountEmail = "hc@hc.com";
accountPassword = "212121";
accountCity = "Bengaluru";

// console.log(accountID);
// console.log(accountEmail + " : " + accountPassword);

console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);
