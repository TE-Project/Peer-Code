const express = require('express');
const bodyParser=require('body-parser')
const cors=require('cors')
const app = express()
const port = 3001


app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const mongoose = require("mongoose");
app.use(bodyParser.urlencoded({extended:false}));
mongoose.connect("mongodb+srv://aniket:aniket1234@cluster0.rjxpi.mongodb.net/problemsDB", {useNewUrlParse: true});



const questionSchema = new mongoose.Schema({
    key:Number,
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
app.use(express.json());


var item1 = new Item({
     key: 2,
    title: "MAHASENA",
    description: "Kattapa, as you all know was one of the greatest warriors of his time. The kingdom of Maahishmati had never lost a battle under him (as army-chief), and the reason for that was their really powerful army, also called as Mahasena. Kattapa was known to be a very superstitious person. He believed that a soldier is 'lucky' if the soldier is holding an even number of weapons, and 'unlucky' otherwise. He considered the army as 'READY FOR BATTLE' if the count of 'lucky' soldiers is strictly greater than the count of 'unlucky' soldiers, and 'NOT READY' otherwise. Given the number of weapons each soldier is holding, your task is to determine whether the army formed by all these soldiers is 'READY FOR BATTLE' or 'NOT READY'. Note: You can find the definition of an even number here.",
    input: "The first line of input consists of a single integer N denoting the number of soldiers. The second line of input consists of N space separated integers A1, A2, ..., AN, where Ai denotes the number of weapons that the ith soldier is holding. ",
    output: "Generate one line output saying 'READY FOR BATTLE', if the army satisfies the conditions that Kattapa requires or 'NOT READY' otherwise (quotes for clarity).",
    constraints: "1 ≤ N ≤ 100 1 ≤ Ai ≤ 100",
    examples: [
        {
            input: "1 1",
            output: "NOT READY"
        },
        {
            input: "1 2",
            output: "READY FOR BATTLE"
        },
        {
            input: "4 11 12 13 14",
            output: "NOT READY"
        },
        {
            input: "5 1 2 3 4 5",
            output: "NOT READY"
        },
        {
            input: "3 2 3 4",
            output: "READY FOR BATTLE"
        }
    ],
    explanation: "Example 1: For the first example, N = 1 and the array A = [1]. There is only 1 soldier and he is holding 1 weapon, which is odd. The number of soldiers holding an even number of weapons = 0, and number of soldiers holding an odd number of weapons = 1. Hence, the answer is 'NOT READY' since the number of soldiers holding an even number of weapons is not greater than the number of soldiers holding an odd number of weapons."
});
// item1.save(function(err,item){
//   if(err) return console.error(err);
//   console.log(item.category+"added"); 
// });

app.get("/",(req,res)=>{
    res.send("hey");
})

app.get("/read", async(req, res) => {
    Item.find({ },(err,result)=>{
        if(err) {
            res.send(err)
        };
        res.send(result);
    });
    
  })
  

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })


