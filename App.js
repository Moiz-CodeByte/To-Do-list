const express = require("express");
const bodyParser =require("body-parser");
const date = require(__dirname +"/date.js");


const app  = express();

const items =["Buy food","Cook food","fast food"];
const workItem =[];



app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));


app.get("/", function(  req , res){

  const day = date.getdate();
  //let day = date.getDay();

    res.render( 'list', {listTitle: day , newitems: items})

});

app.get("/work", function(  req , res){
  res.render( 'list', {listTitle: "Work List" , newitems: workItem})
});
app.get("/about",function(req , res){
  res.render("about")
})

app.post("/", function(req, res){
  let item = req.body.newitem;
  
   if(req.body.list === "Work List"){
    workItem.push(item);
    res.redirect("/work");
   } 
   else {
   items.push(item) 
  res.redirect("/")
   }
});


app.listen(3000 , function(){
    console.log("Server running on port 3000");
});