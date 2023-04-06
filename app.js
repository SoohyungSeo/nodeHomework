const express = require("express");
const app = express();
const port = 3000;
const goodsRouter = require("./routes/goods");

app.use("/api", goodsRouter);

app.listen(port, () => {
    console.log(port, "포트로 서버가 열렸습니다.")
});


