const express = require('express');
const bodyParser=require('body-parser')
const app = express()
const port = 3001



const mongoose = require("mongoose");
app.use(bodyParser.urlencoded({extended:false}));
mongoose.connect("mongodb+srv://aniket:aniket1234@cluster0.rjxpi.mongodb.net/problemsDB", {useNewUrlParse: true});



const questionSchema = new mongoose.Schema({
    id:Number,
    category:String,
    title: String,
    description:String,
    input:String,
    output:String,
    constraints:String,
    examples:[{
        input:String,
        output:String
    }],
    explanation:String


});

const Item = mongoose.model("Item", questionSchema);
app.use(bodyParser.json());


var item1 = new Item({
    id:101,
    category:"easy",
    title: "Smallest Numbers of Notes",
    description: "Consider a currency system in which there are enotes of six denominations, namely, Rs. 1, Rs. 2, Rs. 5, Rs. 10, Rs. 50, Rs. 100.If the sum of Rs. N is input, write a program to computer smallest number of notes that will combine to give Rs. N.",
    input: "The first line contains an integer T, total number of testcases. Then follow T lines, each line contains an integer N.",
    output: "For each test case, display the smallest number of notes that will combine to give N, in a new line.",
    constraints: "1 ≤ T ≤ 1000 1 ≤ N ≤ 1000000",
    examples: [
            {
                input: "3  1200 500 242",
               output: "12 5 7"
            }
        ],
    explanation: " no "
});
item1.save(function(err,item){
  if(err) return console.error(err);
  console.log(item.category+"added"); 
});



app.get('/', (req, res) => {

    res.send('Hello World!')
  })
  

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })


