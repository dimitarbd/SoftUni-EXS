function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);

    function gradientMove(event) {
        console.log('mouse moving');
        let gradientBoxWidth = event.target.clientWidth;
        let positionOfTheMouse = event.offsetX / (gradientBoxWidth - 1);
        let percentage = Math.trunc(positionOfTheMouse * 100);
        document.getElementById("result").textContent = percentage + '%';
    }

    function gradientOut() {
        console.log('mouse left the element border');
        document.getElementById("result").textContent = "";
    }
}