const express = require('express');
const app = express();
const port = 3001;

const goodsRouter = require('./routes/goods');

app.use("/api",goodsRouter); //미들웨어

app.listen(port, () => {
    console.log(port,"포트로 서버가 열렸습니다.");
});

