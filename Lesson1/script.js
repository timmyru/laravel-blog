"use strict";

var num = 33721;
var strNum = num + "";
var multipleNum = strNum[0] * strNum[1] * strNum[2] * strNum[3] * strNum[4];

console.log(multipleNum);

var degreeMultipleNum = multipleNum ** 3;
var strDegreeMultipleNum = degreeMultipleNum + "";

alert(strDegreeMultipleNum[0] + strDegreeMultipleNum[1]);