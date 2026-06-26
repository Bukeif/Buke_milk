document.addEventListener("DOMContentLoaded", async () =>
{
    // 抓取內容 & 跟定位容器
    let messages = [];
    const response = await fetch("json/ticker_notice.json");
    const data = await response.json();
    messages = data.message;
    const ticker = document.getElementById("ticker");
    console.log(messages);
    // 計數器
    let currentIndex = 0;
    // 開跑
    function runTicker()
    {
        ticker.textContent = messages[currentIndex].text;

        const wrapperWidth =
            document.querySelector(".wrapper").offsetWidth;

        const textWidth =
            ticker.offsetWidth;

        const distance =
            wrapperWidth + textWidth;

        // 位移
        const duration =
            distance / 190;

        ticker.animate(
            [
                {
                    transform: `translateX(${wrapperWidth}px)`
                },
                {
                    transform: `translateX(-${textWidth}px)`
                }
            ],
            {
                duration: duration * 1000,
                easing: "linear",
                fill: "forwards"
            }
        ).onfinish = () =>
            {
                // 增加 & 重置計數器
                currentIndex++;

                if (currentIndex >= messages.length)
                {
                    currentIndex = 0;
                }
                runTicker();
            };
    }
    runTicker();
});
