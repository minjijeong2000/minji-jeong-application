function passUserToView(req, res, next) {
    res.locals.user = req.user ? req.user : null
    console.log(res.locals.user)
    next ()
}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next()
    res.redirect('/auth/google')
  }

export {
    passUserToView,
    isLoggedIn
}