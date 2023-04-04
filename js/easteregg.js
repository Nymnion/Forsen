let clickCounter = 0;

document.addEventListener('DOMContentLoaded', () => {
    const eg = document.getElementById('eastereg-reroute');
    eg.addEventListener('click', (e) => {
        clickCounter++;
        console.log("eastereg-reroute");
        if (clickCounter === 5) {
            document.getElementById("eastereg-reroute").href = "eastereg.html";
            console.log("eastereg-reroute");
            clickCounter = 0;
        }
    });
});