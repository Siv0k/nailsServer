const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const categoriesRouter = require('./routes/categories');
const gelVarnishesRouter = require('./routes/gelVarnishes');
const nozzlesRouter = require('./routes/nozzles');
const giftVouchersRouter = require('./routes/giftVouchers');
const designRouter = require('./routes/design');
const toolsRouter = require('./routes/tools');
const liquidsRouter = require('./routes/liquids');
const lampsRouter = require('./routes/lamps');
const paintbrushesRouter = require('./routes/paintbrushes');
const usersRouter = require('./routes/users');

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());

const uri = 'mongodb://mongo:ZkNSFeKqjKrwKBlnsSJdXdxSslUdQGaT@junction.proxy.rlwy.net:17638';

async function connectToDB() {
  try {
    await mongoose.connect(uri);
    console.log("Успешно подключено к MongoDB");
  } catch (err) {
    console.error("Ошибка подключения к MongoDB:", err);
    process.exit(1);
  }
}


app.listen(port, async () => {
  console.log(`Сервер запущен на порту ${port}`);
  await connectToDB();
});

app.use('/api/categories', categoriesRouter);
app.use('/api/gelVarnishes', gelVarnishesRouter);
app.use('/api/nozzles', nozzlesRouter);
app.use('/api/giftVouchers', giftVouchersRouter);
app.use('/api/design', designRouter);
app.use('/api/tools', toolsRouter);
app.use('/api/liquids', liquidsRouter);
app.use('/api/lamps', lampsRouter);
app.use('/api/paintbrushes', paintbrushesRouter);
app.use('/api/users', usersRouter);
