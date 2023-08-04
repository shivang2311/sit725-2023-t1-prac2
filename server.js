let express = require('express');
let app = express();
let port = process.env.port || 3000;

app.use(express.static(__dirname + '/'));

app.get('/', (req, res)=>{
    res.render(('index.html'));
});

app.listen(port, ()=>{
    // logic start server
    console.log('server started');
});