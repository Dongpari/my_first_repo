const path = require("path");
var express = require('express');

var app = express()

// 아래부터 세줄 json데이터 참조를 위해 필요
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/test', function(req, res) {
    var name = req.body.name;
    console.log("전송 확인");
    console.log(name + " 입니다" );
});

app.use('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

  
// 3000번 포트로 서버 오픈
app.listen(3000, function () {
    console.log("3000번에서 호스팅 중")
})

