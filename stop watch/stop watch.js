let timer;
        let milliseconds = 0, seconds = 0, minutes = 0;
        let running = false;

        function startTimer() {
            if (!running) {
                running = true;
                timer = setInterval(updateTime, 10);
            }
        }

        function pauseTimer() {
            running = false;
            clearInterval(timer);
        }

        function resetTimer() {
            running = false;
            clearInterval(timer);
            milliseconds = 0;
            seconds = 0;
            minutes = 0;
            document.getElementById("display").textContent = "00:00:00";
        }

        function updateTime() {
            milliseconds += 10;
            if (milliseconds >= 1000) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }

            let formattedTime =
                (minutes < 10 ? "0" : "") + minutes + ":" +
                (seconds < 10 ? "0" : "") + seconds + ":" +
                (milliseconds < 100 ? "0" : "") + (milliseconds / 10);

            document.getElementById("display").textContent = formattedTime;
        }