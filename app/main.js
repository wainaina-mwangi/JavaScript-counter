const counts = document.querySelectorAll('.count');
const speed = 90;
counts.forEach(counter => {
    function upData() {
        const target = Number(counter.getAttribute('data-target'));
        const count = Number(counter.innerText);
        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.floor(inc + count);
            requestAnimationFrame(upData); // Smoother animation with better performance
        } else {
            counter.innerText = target; // Ensure it reaches the target exactly
        }
    }

    upData();
});
