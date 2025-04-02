let i = 0;
let numbers = document.getElementsByClassName("number");
let plans = document.querySelectorAll(".card");
let inputsRadio = document.querySelectorAll(".card input");
let stepContainer = document.getElementsByClassName("step-container");
let boutonNext = document.getElementById("suivant");
let boutonRetour = document.getElementById("retour");

numbers[0].style.backgroundColor = "hsl(206, 94%, 87%)";
numbers[0].style.color = "black";
stepContainer[0].style.display = "block"

boutonRetour.addEventListener("click", function () {
    if (i > 0) {
        i--;
        console.log(i);
        numbers[i + 1].style.backgroundColor = "transparent";
        numbers[i + 1].style.border = "2px solid hsl(206, 94%, 87%)"
        numbers[i + 1].style.color = " hsl(206, 94%, 87%)";
        stepContainer[i + 1].style.display = "none";
        numbers[i].style.backgroundColor = "hsl(206, 94%, 87%)";
        numbers[i].style.color = "black";
        stepContainer[i].style.display = "block";
    }
});

boutonNext.addEventListener("click", function () {
    if (i <= numbers.length) {
        i++;
        console.log(i);
        console.log(numbers);
        numbers[i - 1].style.backgroundColor = "transparent";
        numbers[i - 1].style.border = "2px solid hsl(206, 94%, 87%)"
        numbers[i - 1].style.color = " hsl(206, 94%, 87%)";
        stepContainer[i - 1].style.display = "none";
        numbers[i].style.backgroundColor = "hsl(206, 94%, 87%)";
        numbers[i].style.color = "black";
        stepContainer[i].style.display = "block";
    }
});

plans.forEach((plan, index) => {
    plan.addEventListener("click", () => {
        plans.forEach(plan => {
            plan.style.backgroundColor = "transparent";
            plan.style.border = "2px solid transparent"
        });
        plan.style.backgroundColor = "#433dff1a";
        plan.style.border = "2px solid #423dff";
        inputsRadio[index].checked = true;
        console.log(inputsRadio[index]);
        console.log(index);
    });
}
);

inputsRadio.forEach((inputRadio, index) => {
    inputRadio.addEventListener("change", function () {
        console.log(inputRadio);
        console.log(index);
    });

});





