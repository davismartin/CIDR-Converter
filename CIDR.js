(function() {
  'use strict';

  function CIDR() {
    var startArray = [];
    var endArray = [];
    var startDecimal = [];

    var service = {

    };

    return service;

    function storeIpsinArray(val) {
      return val.split(".");
    }

    function convertIpToDecimal(array) {
      var number = 0;
      var bits = 24;
      for(var i=0, x = array.length;i<x;i++) {
        number += parseInt(array[i], 10) << bits;
        bits -= 8
      }
      return number;
    }

    function numberOfIps(end, start) {
      return end - start + 1;
    }

    function getCIDR(octet) {
      console.log("------------------------------------");
      var i = 8;
      while (i > 0) {  // our limitation by octet
        console.log("Working with " + i + " -- Magic number " + Math.pow(2,i));
        // Checking the octet using 2^(i), seeing if it is divisible by 2
        if (startArray[octet-1] % Math.pow(2,i) == 0) {
          console.log(startArray[octet-1] + " is divisible by " + Math.pow(2,i));
          console.log("math = " + Math.pow(2,i) + "   Number = " + numberOfIPs);

         // if it is divisible by 2, we need to ensure the maximum number of IP's we are looking for is fewer than our magic number
          if (Math.pow(2,i) <= numberOfIPs) {
            // this fits our model, can continue
            console.log(startArray[0] + "." + startArray[1] + "." + startArray[2] + "." + startArray[3]);

            //push a stringified version of the IP address to our answer array
            answer.push(startArray[0] + "." + startArray[1] + "." + startArray[2] + "." + startArray[3] + "/" + String(octet*8-i));

            // create a variable to store our IP math (the previous octet value + the new magic number
   var newInt = parseInt(startArray[octet-1],10) + Math.pow(2,i);
   startArray[octet-1] = newInt;

    // simple math to remove the number of IP addresses from our maximum count
   numberOfIPs -= Math.pow(2,i)
            break;
          }
        }
      i -= 1;
     // here we calculate if the answer is 0 (being in programming, or math for that matter, we cannot divide by 0
      if (i == 0) {
        answer.push(startArray[0] + "." + startArray[1] + "." + startArray[2] + "." + startArray[3] + "/" + String(octet*8-i));
        var newInt = parseInt(startArray[octet-1],10) + 1;
        startArray[octet-1] = newInt;
        numberOfIPs -= 1;
      }
    }


    }


  }
})();
