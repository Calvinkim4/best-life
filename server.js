const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const { userRouter } = require('./routes/userRouter');
const { foodRouter } = require('./routes/foodRouter');
const { exerciseRouter } = require('./routes/exerciseRouter');

const cors = require('cors');

const PORT = process.env.PORT || 3015;

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use('/user', userRouter);
// app.use('/entries', entriesRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
