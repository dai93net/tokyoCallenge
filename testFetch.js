const fetch = require('node-fetch');
const fs = require('fs');
var token = "CyzCwqlrRjCwJqKB3r719w65kEgtWpNjHgwpQVX6tFo";
var rosen = "鷹５５";
var encode = encodeURI(rosen);


//console.log(encode);

//var url = "https://api-tokyochallenge.odpt.org/api/v4/odpt:BusTimetable?odpt:operator=odpt.Operator:KeioBus&acl:consumerKey="+token;
//var url = "https://api-tokyochallenge.odpt.org/api/v4/odpt:BusTimetable?dc:title="+encode+"&acl:consumerKey="+token;
var url = "https://api-tokyochallenge.odpt.org/api/v4/odpt:BusTimetable?odpt.BusTimetable:KeioBus.Ta11.599.1.Holiday.7&acl:consumerKey="+token;

fetch(url,{method:'GET'})

    .then((response)=>response.json())
    //.then(response => console.log('Success:', JSON.stringify(response)))
    
    .then((json)=> JSON.parse(json))
    .then((json)=> console.log(json.busTimetableObject))
    //.then((json)=>fs.writeFileSync('./testJson001.json',json))
    .catch((error)=>console.log(error));

          
          