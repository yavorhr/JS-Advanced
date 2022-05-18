function attachEventsListeners() {
    //Взимаме всички <input> елементи  - days,hours, minutes, seconds
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    //Преобрвзуваме всичко в секунди - minutes, hour and days
    document.getElementById('secondsBtn').addEventListener('click', () => { convert(+seconds.value) });
    document.getElementById('minutesBtn').addEventListener('click', () => { convert(+minutes.value * 60) });
    document.getElementById('hoursBtn').addEventListener('click', () => { convert(+hours.value * 3600) });
    document.getElementById('daysBtn').addEventListener('click', () => { convert(+days.value * 86400) });

    //Вече имаме всичко като секунди и го пресмятаме в съответните единици :
    function convert(sec) {
        let day = sec / (24 * 60 * 60);
        let hour = sec / (60 * 60)
        let min = sec / 60;

        days.value = day;
        hours.value = hour;
        minutes.value = min;
        seconds.value = sec;
    }

}