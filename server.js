const express = require("express")

const app = express();
const port = 3000;

//greeting
app.get('/greeting', (req, res) => {
    res.status(200).json({
        message:`Hello, stranger`});
  });
  
  app.get('/greeting/:name', (req, res) => {
    const name = req.params.name;
    const greetings = [
      `Hello, ${name}`,
      `What's up, ${name}`,
      `${name}! It's so great to see you!`
    ];
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    res.status(200).json({
        message:`Wow! ${randomGreeting}`});
  });

//tip calc
app.get('/tip/:total/:tipPercentage', (req, res)=>{
    const total = req.params.total
    const tipPercentage = req.params.tipPercentage / 100
    const tipTotal = total * tipPercentage
    res.status(200).json({message: `Please leave a tip of $${tipTotal}`})
});

app.get('/magic/:question', (req, res)=>{
    const question = req.params.question
    const ballResponse = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const randomBallResponse = ballResponse[Math.floor(Math.random()*ballResponse.length)];
    console.log(question, randomBallResponse);
    res.status(200).json({message: `The answer to '${question}?' is: ${randomBallResponse}.`
    })
});


app.listen(port, () => {
    console.log('Listening on port 3000', port)
});

