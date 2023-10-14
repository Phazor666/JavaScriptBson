# JavaScriptBson
# Version: Stable :)
# Check "main.js" for the code
Convert any JSON Object into an array of char streams. or handle and store more data in a cleaner way
Here's all of the types and classes you're able to use within the JavaScript file
BsonConverter -class  //bson object that you can use. lightweight with all of your properties and methods included.
BsonConverter.constructor[fields] = {
   object = [Any Object]
   hash = [boolean]
}
BsonConverter.class_methods = {
   toBson[no_arguments]
   toJson[binData: string or number[])
}
```object``` shall be your variable to prepare the object to convert it to bson
```hash``` is the boolean to verify if you want to finish your data with a base64 finish
```toBson``` function to convert your object into the array of stream bytes
```toJson``` function to convert your object back into the regular json item

NOTE: I am the original create and you can give credits if you want in your javascript code
just know that this repo is the original owner of JavaScriptBson and this file will be updated at least multiple times a day
The Actual End Release of this repo is oct 20.

//How to use BsonConverter class
```javascript
const desiredItem_1 = {
    name: "Jhon",
    age: 20,
    isLoggedIn: false,
};
 
//Regular : No Hash
const service1 = new BsonConverter(JSON.stringify(desiredItem_1), false); //Set the false to true if you want a base64 encoding finish.
const binData1 = service1.toBson();
console.log(binData1);
```
# The code is all open source so be my guest and modify, add your own changes, problems or etc in the repo.
# Code Version: BetaRelease
# Alright im out :D
