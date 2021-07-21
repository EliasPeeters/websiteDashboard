function checkLogin(req, res) {
    if (!logins.includes(req.cookies.session)) {
        res.redirect('/login')
    } 
}

module.exports = {checkLogin}