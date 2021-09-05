const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');

const app = express();
app.use(cors())
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));

app.post('/pin', (req, res) => {
    const pin = req.body.pin;
    if(!pin || pin.length !==6 || pin[5]===7){
        res.status(200).json({message:"Invalid"});
    }

    res.status(200).json({message:"valid"});
});

app.listen(8080, () => console.log(`Started server at http://localhost:8080!`));