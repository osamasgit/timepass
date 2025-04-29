const validateHour = (req,res,next) =>  {
    const hour = req.hour;
    if (hour < 22) {
        res.locals.message = 'Todavía no es la hora para poder acceder'
        return res.redirect('/?message=' + encodeURIComponent(res.locals.message));
    }else {
        return next()
    }
}

module.exports = validateHour