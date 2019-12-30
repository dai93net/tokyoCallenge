var token = 'CyzCwqlrRjCwJqKB3r719w65kEgtWpNjHgwpQVX6tFo';
var request = new XMLHttpRequest();
var RDF_TYPE = 'odpt:BusstopPole';
var url = 'https://api-tokyochallenge.odpt.org/api/v4/RDF_TYPE'+'acl:consumerKey='+token;

request.open('get',url,true);
request.responsType = 'json';
request.onload = function(){
    var data = this.response;
    console.log(data);
};
request.send();

   