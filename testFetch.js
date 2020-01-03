const fetch = require('node-fetch');
const jsonld = require('jsonld');
const fs = require('fs');
var token = "CyzCwqlrRjCwJqKB3r719w65kEgtWpNjHgwpQVX6tFo";
var rosen = "調３５";
var encode = encodeURI(rosen);
var text=[];

//console.log(encode);

//var url = "https://api-tokyochallenge.odpt.org/api/v4/odpt:BusTimetable?odpt:operator=odpt.Operator:KeioBus&acl:consumerKey="+token;
var url = "https://api-tokyochallenge.odpt.org/api/v4/odpt:BusTimetable?dc:title="+encode+"&acl:consumerKey="+token;
//var url = "https://api-tokyochallenge.odpt.org/api/v4/odpt:BusTimetable?odpt.BusTimetable:KeioBus.Ta11.599.1.Holiday.7&acl:consumerKey="+token;

//var url = "https://api-tokyochallenge.odpt.org/api/v4/odpt:BusTimetable?@id:urn:ucode:_00001C000000000000010000031157F7&acl:consumerKey="+token;

//var url = "https://api-tokyochallenge.odpt.org/api/v4/odpt:BusstopPoleTimetable?dc:title="+encode+"&acl:consumerKey="+token;


fetch(url,{method:'GET'})

    .then((response)=>response.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    
    //.then((json)=> JSON.parse(json))
    //.then((json)=> console.log(json))
    //.then((json)=>fs.writeFileSync('./testJson001.json',json))
    //.then((json)=> text = json)
    //.then((text)=> console.log(text[0]))

    .catch((error)=>console.log(error));

          
    // urn:ucode:_00001C000000000000010000031157F7  
    //@id:urn:ucode:_00001C000000000000010000031157F7