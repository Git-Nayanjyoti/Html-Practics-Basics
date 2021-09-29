/*
function passgenerator() {
    if (document.getElementById("symbols").checked) { }
    else if (document.getElementById("numbers").checked) { }
    else if (document.getElementById("lower-case").checked) { }
    else if (document.getElementById("upper-case").checkded) { }
    else {
        document.getElementById("result").innerHTML = 'Please select atleast one checkbox';
    }

    const keys = {
        symbol: "!@#$%^&*()_+~\`|}{[]:;?><,./-=",
        number: "0123456789",
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    var pass = '';
    var str = symbol + number + lowercase + uppercase;
    var length = document.getElementById("length").value;
    for(i=1;i<=length;i++){
        var char = Math.floor(Math.random() * string.length + 1);
        pass += str.charAt(char)
    }
    return pass;
    

}
document.getElementById("result").innerHTML = passgenerator();

function uncheckAll() {
    document.querySelectorAll('input[type="checkbox"]')
        .forEach(el => el.checked = false);
    
    
}
*/

const keys = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~\`|}{[]:;?><,./-="
  }
  const getKey = [
    function upperCase() {
      return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
    },
    function lowerCase() {
      return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
    },
    function number() {
      return keys.number[Math.floor(Math.random() * keys.number.length)];
    },
    function symbol() {
      return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
    }
  ];
  
  function createPassword() {
    const upper = document.getElementById("upper-case").checked;
    const lower = document.getElementById("lower-case").checked;
    const number = document.getElementById("numbers").checked;
    const symbol = document.getElementById("symbols").checked;
    if (upper + lower + number + symbol === 0) {
        document.getElementById("result").innerHTML = 'Please select atleast one checkbox';
      return;
    }
    const length = document.getElementById("length");
    let password = "";
    while (length.value > password.length) {
      let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
      let isChecked = document.getElementById(keyToAdd.name).checked;
      if (isChecked) {
        password += keyToAdd();
      }
    }
    document.getElementById("result1").innerHTML = password;
  }
  
  
  
  function uncheckAll() {
    document.querySelectorAll('input[type="checkbox"]')
      .forEach(el => el.checked = false);
  
  
  document.getElementById('length').value=8;
  
  }



