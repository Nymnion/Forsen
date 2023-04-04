document.addEventListener("DOMContentLoaded", function() {
    const pepePainsButton = document.getElementsByClassName("line-button")[0];
    console.log(pepePainsButton);
    pepePainsButton.addEventListener("click", countTowardsEasterEgg);

    let counter = 0;

    function countTowardsEasterEgg() {
        counter++;
        if(counter === 25){
            executeEasterEgg();
        }
    }

    function executeEasterEgg() {
        pepePainsButton.classList.add("animateEasterEgg");
    }
 
 
  });