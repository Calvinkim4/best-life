const express = require('express');
const authRouter = express.Router();
const { passport, jwtSign } = require('../auth/auth');

authRouter.post('/signup', async (request, response, next) => {

    passport.authenticate('signup', async(err, user, info) => {
        try {

          if(err) {
            let error = new Error(err.message || info.message);
            error.status = 400;
            return next(error);
          }
          
          if (!user) {
            return response.status(401).json({message: info.message})
          }

          const { email, id } = user
          const payload = { email, id }

          const token = jwtSign(payload)
          return response.json({user: user, token: token, message: info.message})
        } catch(error) {
          return next(error);
        }
    })(request, response, next)
});

authRouter.post('/login', (request, response, next) => {
  passport.authenticate('login', async(err, user, info) => {
    try {
      let error

      if (err) {
        error = new Error(err.message)
        error.status = 500

        return next(error)
      }

      if (!user) {
        error = new Error(info.message)
        error.status = 400
        return next(error)
      }

      request.login(user, { session: false }, async (error) => {
        if (error) return next(error)

        if (!user) {
          let err = new Error(info.message)
          err.status = 400
          return next(err)
        }

        const { email, id } = user
        const payload = { email, id }

        const token = jwtSign(payload)
        return response.json({ user, token })
      })
    } catch (error) {
      return next(error)
    }
  })(request, response, next)
})

module.exports = {
    authRouter
}