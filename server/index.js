const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const userRoute = require('./routes/users');
const questionRoute = require('./routes/questions');
const answerRoute = require('./routes/answers');

require('dotenv/config');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(userRoute);
app.use(questionRoute);
app.use(answerRoute);

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'openFlow',
  })
  .then(() => console.log('Connected to openFlow DB'))
  .catch((err) => {
    console.log('No Connection. Reason: ' + err);
  });

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server Started on port:${PORT}`);
});
