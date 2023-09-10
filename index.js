const express = require('express')
const app = express()
const port = 3005

app.use(express.json())

app.post('/', (req, res)=>{
    console.log(req.body.name)
})
app.get('/api', (req, res)=>{
    //getting the query parameters from the request
    const {slack_name, track} = req.query;

    //validate query parameters
    if(!slack_name || !track){
        return res.status(400).json({error: "Both slackName and track are required query parameters."});
    }

    //calculate the current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayOfWeek = daysOfWeek[new Date().getDay()];

    //calculate the current utc time with validation of +/-2
    const now = new Date();
    // const utcOffset = now.getTimezoneOffset() / 60; //calculate the utc offset in hours

    // //validating the offset
    // if(utcOffset < -2 || utcOffset > 2){
    //     return res.status(400).json({error : 'Invalid UTC offset'});
    // }

    const currentUtcTime = now.toUTCString();



    //Construct  github urls
    const githubBaseUrl = 'https://github.com/joanita-51/HGNx-Internship';
    const currentFileUrl=  `${githubBaseUrl}/blob/master/index.js`;
    const fullSourceCodeUrl = `${githubBaseUrl}`;

    //Prepare the response JSON
    const response = {
        slackName,
        currentDayOfWeek,
        currentUtcTime,
        track,
        currentFileUrl,
        fullSourceCodeUrl,
        statusCode: 200,
    }

    //send the json response
    res.json(response)

})


app.listen(port, ()=>{
    console.log(`App runing on port ${port}`)
})