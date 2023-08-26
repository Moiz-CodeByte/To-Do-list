exports.getdate = function() {
    const today = new Date();
const currentday = today.getDay();  


const options = {
  weekday: "long",
  day: "numeric",
  month: "long"
}
return day =today.toLocaleDateString("en-US", options);
   
}

module.exports.getDay = getDay;

function getDay(){
    const today = new Date();
const currentday = today.getDay();  


const options = {
  weekday: "long",
  
}
 return day =today.toLocaleDateString("en-US", options);
   
}
