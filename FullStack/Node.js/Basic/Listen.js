const http = require('http')

http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/plain'},
    response.write('hello ...'),
    response.end()
    )}).listen(8080)

console.log('listen(8080)');

// על מנת להריץ את הקובץ נכנסים לתקייה המכילה את הקובץ
// (ex Node) 
// ונכנסים ל 
// cmd 
// ורושמים את הפקודה
// node Listen.js 

// לאחר מכן על מנת להריץ את
// response 
// נכנס לקישור
// http://localhost:8080/
// בדפדפן
