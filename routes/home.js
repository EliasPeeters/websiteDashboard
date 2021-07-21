const CheckLogin = require('../checkLogin')

app.get('/home', (req, res) => {
    CheckLogin.checkLogin(req, res)
    res.send('test')
    
})