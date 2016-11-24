var AllFromTown = function (Registrations,Location){
var regList = Registrations.split(',')
var FromLoc = [];
for (i=0;i<regList.length;i++){
if (regList [i].startsWith(Location)){
  FromLoc.push(regList[i]);
  }
 }

return FromLoc;
}

const assert = require ('assert');


var fromStellies = AllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');

assert.deepEqual(fromStellies, ['CL 124', 'CL 345', 'CL 341'])

var fromKuilsriver = AllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');
