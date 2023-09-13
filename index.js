require('dotenv').config();
const routes = require('./routes/routes')
const mongoString = process.env.DATABASE_URL
const express = require('express')
const app = express()
const port = 3005

const mongoose = require('mongoose');

app.use(express.json())

//connect to your mongoDB database
mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error', (error)=>{
  console.log(error)
})

database.once('connected', ()=>{
  console.log('Database Connected')
})

app.use('/api', routes)

  

app.get('/api2', (req, res)=>{
    //getting the query parameters from the request
    const {slack_name, track} = req.query;

    //validate query parameters
    if(!slack_name || !track){
      return res.status(400).json({error: "Both slackName and track are required query parameters."});
    }

    //calculate the current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const current_day = daysOfWeek[new Date().getDay()];

    //calculate the current utc time with validation of +/-2
    const now = new Date();
    const utc_time = now.toISOString().slice(0, -5) + 'Z';

    //Construct  github urls
    const githubBaseUrl = 'https://github.com/joanita-51/HGNx-Internship';
    const github_file_url=  `${githubBaseUrl}/blob/master/index.js`;
    const github_repo_url = `${githubBaseUrl}`;

    //Prepare the response JSON
    const response = {
        slack_name,
        current_day,
        utc_time,
        track,
        github_file_url,
        github_repo_url,
        status_code: 200,
    }

    //send the json response
    res.json(response)

})


app.listen(port, ()=>{
    console.log(`App runing on port ${port}`)
})