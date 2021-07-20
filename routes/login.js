const {v4} = require('uuid');

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', (req, res) => {
    console.log(req.body)
    if (req.body.password != credentials.dashboardPassword) {
        res.redirect('/login')
    } else {
        let uuid = v4();
        logins.push(uuid);
        console.log(uuid);
        res.cookie('session', uuid)
            
        res.redirect('/home')
    }
})