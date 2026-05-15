document.addEventListener("DOMContentLoaded", () =>
{
    const clockEl = document.getElementById("clock");
    const dateEl = document.getElementById("date");

    const weekdays = [
        "Sun",
        "Mon",
        "Tues",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ]

    function updateClock()
    {
        const now = new Date();
        // clock
        const timeString = new Intl.DateTimeFormat("zh-TW", {
            timeZone: "Asia/Taipei",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        }).format(now);

        //date
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");
        const weekday = weekdays[now.getDay()];

        clockEl.textContent = timeString;
        dateEl.textContent = `${year}-${month}-${day} ${weekday}`;
    }

    updateClock();
    setInterval(updateClock, 1000);
})