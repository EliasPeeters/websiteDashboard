app.get('/home', (req, res) => {
    if (!logins.includes(req.cookies.session)) {
        res.redirect('/login')
    } 
    res.send('test')
    
})