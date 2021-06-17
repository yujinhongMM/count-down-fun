module.exports.countDownFun = function (endtime, callback) {
    const getTimeRemaining = (endtime) => {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return {
            total,
            days,
            hours,
            minutes,
            seconds,
        };
    }
    const updateClock = () => {
        const t = getTimeRemaining(endtime);
        callback({
            days: t.days,
            hours: ('0' + t.hours).slice(-2),
            minutes: ('0' + t.minutes).slice(-2),
            seconds: ('0' + t.seconds).slice(-2)
        })
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }
    const timeinterval = setInterval(updateClock, 1000);
}