/*
  Made by ch1ps3t
  Give Original Credits in your code (IF YOU WANT) :D
  Original Code on github.

  HEADS UP! BEFORE USE:
  This code is bound to be updated every week after first deployment
  an update checker would seem nice? if not then ignore this message
  and enjoy the library otherwise fetch the json file located in the github
  to see if there is a new update at any time
*/
class BsonConverter {
    constructor(object, hash) {
        this.object = object;
        this.hash = hash;
    }
      toBson() {
         //Start Method | GLOBALS:
         const base64Finish = this.hash;

         //Logic
         const strArray = [];
         for (let i = 0; i < this.object.length; i++) {
            strArray.push(this.object.charAt(i));
         }
         const numArray = [];
         for (let j = 0; j < strArray.length; j++) {
            numArray.push(strArray[j].charCodeAt(0) - 97);
         }
         
         return base64Finish ? btoa(numArray.toString()) : numArray;
      }
      toJson(bin) {
          const strArray = bin.map(num => String.fromCharCode(num + 97));
          const final = strArray.join('');
          return JSON.parse(final);
      }
}
 
//Item we want to convert to bson (binary json)
const desiredItem_1 = {
    name: "Jhon",
    age: 20,
    isLoggedIn: false,
};

//Regular : No Hash
const service1 = new BsonConverter(JSON.stringify(desiredItem_1), false);
const binData1 = service1.toBson();
console.log(binData1);
 
/* Should Return:
[
    26, -63,  13,   0,  12,   4, -63, -39, -63, -23,
    14,   7,  13, -63, -53, -63,   0,   6,   4, -63,
   -39, -47, -49, -53, -63,   8,  18, -21,  14,   6,
     6,   4,   3, -24,  13, -63, -39,  19,  17,  20,
     4,  28
 ]
*/

//Decoding Regular BSON : No Hash
/*
  Should Return:
  { name: 'Jhon', age: 90, isLoggedIn: true }
*/
const found1 = service1.toJson(binData1);
console.log(found1);
console.log("DEST: " + "         ");
console.log("Name: " + found1.name);
console.log("Age:  " + found1.age);
console.log("isN:  " + found1.isLoggedIn);