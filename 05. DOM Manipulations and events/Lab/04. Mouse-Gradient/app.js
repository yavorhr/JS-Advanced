function attachGradientEvents() {
    //onMove = eventHandler, eventListener - това е функцията, с която обработваме
    //eventListener-a "mouseMove", който сме закачали за обекта <div> по id "gradient"
    document.getElementById('gradient').addEventListener('mousemove', onMove);

    //event - това е събитието, което активира функцията (eventHandler-a). В случая event е "mouseMove",
    //който активира функцията "onMove". Събитието се подава от Browser-a, който ни предоставя информация, когато
    //то е настъпило.
    function onMove(event) {
        const offsetX = event.offsetX;
        //event.offsetX - ще ни даде точните координати на които се намира мишката ни, когато е върху <div> елемента, за който "слушаме";
        //event.target.clientWidth - това ни дава цялата дължина на <div> елемента в пиксели
        //За да изчислим в коя част на <div> елеменета се намираме в %, трябва да разделим сегашното положение на мишката на общата дължина на <div>.
        const perecent = Math.floor(offsetX / event.target.clientWidth * 100);

        //записваме резултата
        document.getElementById('result').textContent = `${perecent}%`;
    }
}