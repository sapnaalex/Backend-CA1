const {express } = require('express')
const app = express;
const port = 3000



app.post('/signup', (req, res) => {
  res.send('Signup Page')
})
    let username = Object.input; 
    let email = Object.input;
    let date = Object.date.Day.input;
    let password = Object.input;

    if (username==NOTFOUND){
        console.log("Username cannot be empty");
    }
    
    if (email==NOTFOUND){
        console.log("Email cannot be empty");
    }

    if(password.length()<8 || password.length()>16){
        console.log("Password lenght should be greater than 8 or less than or equal to 16")
    }


app.listen(port, () => console.log(`App listening on port ${port}!`)) = require("dns");