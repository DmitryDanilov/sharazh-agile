module.exports = {
    ensureAuthenticated: (req, res, next) => {
        if (req.isAuthenticated()) {
            next()
        }
        res.send('Не авторизованы, авторизуйтесь')
        req.flash('error_msg', 'Авторизуйтесь')
        res.redirect('/users/login')
    }
}