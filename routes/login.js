const {v4} = require('uuid');

app.get('/login', (req, res) => {
    let message = req.query.message==undefined ? 'nothing':  req.query.message;
    res.render('login', {message: message});
})

app.post('/login', (req, res) => {
    if (req.body.password != credentials.dashboardPassword) {
        res.redirect('/login?message=WrongPassword')
    } else {
        let uuid = v4();
        logins.push(uuid);
        res.cookie('session', uuid)
        res.redirect('/home')
    }
})