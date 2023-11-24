let status="standard";
function check(status){
switch(status){
    case "standard":
        return "might take 3-5 days";
    case "express":
        return "1-2 days";
    case "overnight":
        return "would be delivered the next day :)";
    default:
        return "invalid input";

}
}
console.log(check(status));