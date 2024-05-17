const accountId = 112233
let accountEmail = "abc@google.com"
var accountPassword = "1234"
accountCity = "Hyderabad"
let accountState

///accountId = 123  => Constant value changes not allow

//console.log(
  //  accountId
//);

/*
Prefer not use var
because of issue in block scope and functional scope.
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])