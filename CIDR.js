var CIDR = (function() {
	'use strict';

	var startArray = [],
	endArray = [],
	startDecimal = 0,
	endDecimal = 0,
	numberOfIPs = 0,
	answer = [];

	var publicAPI = {
		IPtoCIDR: IPtoCIDR
	};

	return publicAPI;

  function IPtoCIDR(startIP, endIP) {
    startArray = storeIpsinArray(startIP),
    endArray = storeIpsinArray(endIP),
    startDecimal = convertIpToDecimal(startArray),
  	endDecimal = convertIpToDecimal(endArray),
  	numberOfIPs = TotalIps(startDecimal, endDecimal);
    console.log(numberOfIPs);
    while(numberOfIPs != 0) {
      getCIDR(4);
    }
    console.log(answer);
    return answer;
  }

	// octet is group of ips
	function getCIDR(octet) {
		var i = 8;

		while (i >= 0) {  // our limitation by octet
      if (i === 0) {
  			return storeAnswer(startArray, i, octet)
  		}
      if(startArray[octet-1] % Math.pow(2,i) == 0) {
  			if (Math.pow(2,i) <= numberOfIPs) {
  				return storeAnswer(startArray, i, octet)
  			}
			}
		  i -= 1;
	  }
	}

	function storeIpsinArray(val) {
		return val.split(".");
	}

	function convertIpToDecimal(array) {
		var number = 0;
		var bits = 24;
		for(var i=0, x = array.length;i<x;i++) {
			number += parseInt(array[i], 10) << bits;
			bits -= 8;
		}
		return number;
	}

	function TotalIps(start, end) {
		return end - start + 1;
	}

  function storeAnswer(startArray, i, octet) {
    console.log("fii");
    console.log(i);
		answer.push(startArray[0] + "." + startArray[1] + "." + startArray[2] + "." + startArray[3] + "/" + String(octet*8-i));
		startArray[octet-1] = parseInt(startArray[octet-1],10) + Math.pow(2,i);
		numberOfIPs -= Math.pow(2,i);
    console.log(numberOfIPs);
	}
})();
