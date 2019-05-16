const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const { userRouter } = require('./routes/userRouter');
const { authRouter } = require('./routes/authRouter')
const { appRouter } = require('./routes/appRouter')
const passport = require('passport');
const { authorized } = require('./auth/auth');

const cors = require('cors');

const PORT = process.env.PORT || 3015;

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors());

app.use('/auth', authRouter);
app.use('/app', authorized, appRouter);
app.use(passport.initialize());

app.use('/user', userRouter);

app.use((err, req, res, next) => {
  console.log('error', err)
  res.status(err.status || 500);
  res.json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
