import Express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import mongoose from "mongoose";


const app = Express();
app.use(cors());
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))


// console.log(process.env.NAME);

mongoose.connect('mongodb+srv://MERN:MERN@cluster0.9xphova.mongodb.net/VTOP_REDACTED?retryWrites=true&w=majority')
    .then(r => {
        console.log('Connected to Database');
        app.listen(5000, function (err) {
            if (err) console.log(err);
            console.log(`Successfully connected on port 5000`);
        })
    })
