const http = require('http');
const fs = require('fs');
const url = require('url-parse');

http.createServer((request,response)=>{
    if(request.url === '/favicon.icon') return;
    console.log('request url ex-',request.url);
    const new_object_from_url = new url(request.url,true)
    console.log('new object from url ex-',new_object_from_url);
    const file = fs.readFileSync('RunHtml.html', { encoding: "UTF-8"})
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(file);
    response.end();
    }).listen(8080);

console.log('listen(8080)');

// על מנת להריץ את הקובץ נכנסים לתקייה המכילה את הקובץ
// ונכנסים ל 
// cmd 
// ורושמים את הפקודה
// node RunHtml.js 

// לאחר מכן על מנת להריץ את
// response 
// נכנס לקישור
// http://localhost:8080/
// בדפדפן