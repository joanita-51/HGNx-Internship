const express = require('express')
const app = express()
const port = 3005

app.use(express.json())

app.post('/', (req, res)=>{
    console.log(req.body.name)
})
app.get('/api', (req, res)=>{
    //getting the query parameters from the request
    const {slackName, utcOffset} = req.query;

    //validate query parameters
    if(!slackName || !utcOffset){
        return res.status(400).json({error: "Both slackName and utcOffset are required query parameters."});
    }

    //calculate the current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayOfWeek = daysOfWeek[new Date().getDay()];

    //calculate the current utc time with validation of +/-2
    const currentUtcTime = new Date().toUTCString();
    const utcOffsetInt = parseInt(utcOffset, 10);

    if(isNaN(utcOffsetInt) || Math.abs(utcOffsetInt) > 2){
        return res.status(400).json({error: "Invalid utcOffset value. It should be between -2 and +2"});
    }

    //Construct  github urls
    const githubBaseUrl = 'https:github.com/joanita-51/zuri';
    const currentFileUrl=  `${githubBaseUrl}/blob/main/index.js`;
    const fullSourceCodeUrl = `${githubBaseUrl}`;

    //Prepare the response JSON
    const response = {
        slackName,
        currentDayOfWeek,
        currentUtcTime,
        track:"Backend",
        currentFileUrl,
        fullSourceCodeUrl,
        statusCode:'Success',
    }

    //send the json response
    res.json(response)

})


app.listen(port, ()=>{
    console.log(`App runing on port ${port}`)
})