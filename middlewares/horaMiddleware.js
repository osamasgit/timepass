let hour = ''
let minutes = ''

const actualizedClock = () => {
    const date = new Date();
    hour = date.getHours();
    minutes = date.getMinutes();
}

actualizedClock()

function formatHour(hour) {
    if (hour < 10) {
        return `0${hour}`
    }else
        return hour
}

const clock = (req, res, next) => {
    req.hour = formatHour(hour)
    req.minutes = formatHour(minutes)
    
    next()
}

module.exports = clock