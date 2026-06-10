document.addEventListener("DOMContentLoaded", () =>
{
    const clockEhour = document.getElementById("c-hour");
    const clockEminute = document.getElementById("c-minute");
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
        const hourString = String(now.getHours()).padStart(2, "0");
        const minuteString = String(now.getMinutes()).padStart(2, "0");

        //date
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");
        const weekday = weekdays[now.getDay()];

        clockEhour.textContent = hourString;
        clockEminute.textContent = minuteString;
        dateEl.textContent = `${year}-${month}-${day} ${weekday}`;
    }

    updateClock();
    setInterval(updateClock, 1000);
})