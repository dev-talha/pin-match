/** Random Number Generate */
document
   .getElementById('pin-generate-btn')
   .addEventListener('click', function () {
      let generateKey = Math.floor(1000 + Math.random() * 9000);
      document.getElementById('pin-number').value = generateKey;
   });
/** Random Number Generate */

for (var i = 0; i <= 9; i++) {
   document.getElementById(i).addEventListener('click', typeNumber(i));
}

function typeNumber(btnNumber) {
   document.getElementById(btnNumber).addEventListener('click', function () {
      let number = document.getElementById(btnNumber).innerText;
      let beforeNumber = document.getElementById('calc-number').value;
     document.getElementById('calc-number').value = beforeNumber + number;
     document.getElementById('correct-pin').style.display = 'none';
     document.getElementById('wrong-pin').style.display = 'none';
   });
}

// All Clean
document.getElementById('clear-all').addEventListener('click', function () {
   document.getElementById('calc-number').value = null;
});

// Single Number Clean
document.getElementById('clear-right').addEventListener('click', function () {
   let beforeNumber = document.getElementById('calc-number').value;
   document.getElementById('calc-number').value = beforeNumber.slice(0, -1);
});


var submit_attempts = 3;
function check_form(){
   var randomNum = parseInt(document.getElementById('pin-number').value);
   var yourNum = parseInt(document.getElementById('calc-number').value);

   if (randomNum == yourNum) {
      document.getElementById('correct-pin').style.display = 'block';
      document.getElementById('wrong-pin').style.display = 'none';
   } else {
      document.getElementById('correct-pin').style.display = 'none';
      document.getElementById('wrong-pin').style.display = 'block';

     if (submit_attempts == 0) {
       document.getElementById('actionLeft').innerText = submit_attempts;
       document.getElementById("submit-btn").disabled = true;
     }
     else {
       submit_attempts = submit_attempts - 1;
       document.getElementById('actionLeft').innerText = submit_attempts;
      //  if (submit_attempts == 0) {
      //    document.getElementById("submit-btn").disabled = true;
      //  }
     }
     

  }
 }

