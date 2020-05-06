const request = require('request');
const fs = require('fs')

const value = process.argv[2];

const options = {
  url: `https://icanhazdadjoke.com/search?term=${value}`,
  method: 'GET',
  headers: {
      'Accept': 'text/plain',
      'Accept-Charset': 'utf-8',
      'User-Agent': 'my-reddit-client'
  }
};

request(options, function(err, res, body) {
  if(!err && res.statusCode === 200){
    const arr = body.split('\n')
    if(arr.length === 0){
      console.log("sorry joke related to "+value+" is not found")
    } else{
    const randomSearch = arr[Math.floor(Math.random() * arr.length)]
    fs.appendFile("written.txt", randomSearch, (err)=>{
      if(err) {
          return console.log(err);
      }
      console.log("The file was saved successfully!");
  }); 
    return console.log(randomSearch)
  
  } console.log(err) } 
});



// request("http://swapi.dev/api/people/1/", ((error, response, body)=>{
//   if(!error && response.statusCode === 200){
//     console.log(JSON.parse(body))
//   }
//   return console.log(error)
// }))