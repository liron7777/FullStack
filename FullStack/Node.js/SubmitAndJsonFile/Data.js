const http = require('http');
const fs = require('fs');
const url = require('url-parse');


http.createServer((request,response)=>{
    if(request.url === '/favicon.ico') return;
    const 
          new_object_from_url = new url(request.url,true),
          query_name  = new_object_from_url.query.name,
          name_parsn = {name: query_name},
          history_data =   JSON.parse(fs.readFileSync('Db.json')) || [];


    history_data.push(name_parsn)
    fs.writeFileSync('Db.json',JSON.stringify(history_data))

    let file = fs.readFileSync('InputSubmit.html', { encoding: "UTF-8"})
  
    console.log('request url ex-',request.url);
    console.log('new object from url ex-',new_object_from_url);
    console.log('new object qurey ex-',query_name);
    console.log('history_data-',history_data);

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(file);
    response.end();
    }).listen(8080);

console.log('listen(8080)');