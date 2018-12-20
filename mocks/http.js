
const data = require('./data');
const express = require('express');
const app = express();
const port = '1111';

app.get('/api/tablelist', (req, res) => {
  res.send(JSON.stringify(data.tableList));
});

app.get('/api/positionlist', (req, res) => {
  res.send(JSON.stringify(data.positionList));
});

app.listen(port, () => {
  console.log(`mock 服务成功启动,在${port}端口`);
});
