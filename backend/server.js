const express = require('express');
const bodyParser=require('body-parser')
const cors=require('cors')

const port = process.env.PORT || 3001;

const nodemailer = require('nodemailer');
const creds = require('./config');
const app = express()
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const mongoose = require("mongoose");
app.use(bodyParser.urlencoded({extended:false}));
mongoose.connect("mongodb+srv://aniket:aniket1234@cluster0.rjxpi.mongodb.net/problemsDB", {useNewUrlParse: true});


// nodemailer
var transport = {
  host: 'smtp.gmail.com', // e.g. smtp.gmail.com
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('All works fine, congratz!');
  }
});

// mongoose
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

const contestSchema = new mongoose.Schema({
            category: String,
            title: String,
            date:String,
            time:String,
        
            question:[{
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
            
            }]
            
            
        
        


});
const Contest=mongoose.model("Contest",contestSchema);
const Item = mongoose.model("Item", questionSchema);
app.use(express.json());


var item1 = new Contest({
   category:"future",
    title:"December challenge",
    date:"4-11-2020 Friday",
    time:"7am to 10pm",
    question:[
        {key:7,title:"Helping Chef",description:"Write a program, which takes an integer N and if the number is less than 10 then display 'Thanks for helping Chef!'' otherwise print '-1'.",input:"The first line contains an integer T, total number of testcases. Then follow T lines, each line contains an integer N.",output:"For each test case, output the given string or -1 depending on conditions, in a new line.        ",constraints:"1 ≤ T ≤ 1000    -20 ≤ N ≤ 20",examples:[{input:"3  1 12 -5",output:"Thanks for helping Chef!  -1  Thanks for helping Chef!"}],explanation:" "},
        {key:6,title:"GREATER THAN/LESS THAN ",description:"Chef has just started Programming, he is in first year of Engineering. Chef is reading about Relational Operators. Relational Operators are operators which check relatioship between two values. Given two numerical values A and B you need to help chef in finding the relationship between them that is, First one is greater than second or, First one is less than second or, First and second one are equal.",input:"First line contains an integer T, which denotes the number of testcases. Each of the T lines contain two integers A and B.",output:"For each line of input produce one line of output. This line contains any one of the relational operators'<' , '>' , '='.",constraints:"1 ≤ T ≤ 10000 1 ≤ A, B ≤ 1000000001",examples:[{input:"3 10 20 20 10 10 10",output:"< > ="}],explanation:" Example case 1. In this example 1 as 10 is lesser than 20. "},
        {key: 2,
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
    }]

});
// item1.save(function(err,item){
//   if(err) return console.error(err);
//   console.log(item.title +" added"); 
// });
//{key:7,title:"Helping Chef",description:"Write a program, which takes an integer N and if the number is less than 10 then display 'Thanks for helping Chef!'' otherwise print '-1'.",input:"The first line contains an integer T, total number of testcases. Then follow T lines, each line contains an integer N.",output:"For each test case, output the given string or -1 depending on conditions, in a new line.        ",constraints:"1 ≤ T ≤ 1000    -20 ≤ N ≤ 20",examples:[{input:"3  1 12 -5",output:"Thanks for helping Chef!  -1  Thanks for helping Chef!"}],explanation:" "}
     
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
  app.get("/readcontest", async(req, res) => {
    Contest.find({ },(err,result)=>{
        if(err) {
            res.send(err)
        };
        res.send(result);
    });
    
  })
  app.post('/send', (req, res, next) => {
  const name = req.body.name
  const email = req.body.email
  
  var mail = {
    from: creds.USER,
    to: email,  
    subject: 'Welcome to PeerCode',

    text:'Hello folks welcome to PeerCode lets you have great journey with us..' 
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  })