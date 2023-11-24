let names="abc";
let email="abc@gmail.com";
let age=23;
if(typeof names!=="string" | typeof email!=="string"){
    console.log("name and email should be a String");
}
else if(typeof age!=="number"){
    console.log("Age should be a number");
 }
 else{
    console.log("form submitted");
 }
 