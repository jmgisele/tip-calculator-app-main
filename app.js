// if custom is pressed: 
// radio buttons are unselected

//defining initial constants
const billInput = document.querySelector("#bill");

const numOfPeopleInput = document.querySelector("#num-of-ppl");

const tipPercentRadios = document.querySelectorAll(".radio-input");

const custom = document.querySelector("#custom");

const reset = document.querySelector("#reset");

let tipPercent = 0.00;
let bill = 0.00;
let numOfPeople = 1;
let tip = 0.00;
let total = 0.00;

// calculating totals

function calcTotal() {
    reset.style.backgroundColor = "hsl(172, 67%, 45%)";
    reset.style.color = "hsl(183, 100%, 15%)";
    if (numOfPeople == 0 || numOfPeople === '' || bill === 0.00) {
        tip = 0.00
        total = 0.00
    } else {
        let calctip = (bill * tipPercent / 100) / numOfPeople;
        tip = Math.round(calctip * 100) / 100;
        let calctotal = (bill / numOfPeople) + tip;
        total = Math.round(calctotal * 100) / 100
        document.querySelector("#tip-per-person").innerText = `$${tip}`;
        document.querySelector("#total-per-person").innerText = `$${total}`;
    }
}

// when bill is input, changes bill to bill value, recalcs totals

billInput.addEventListener("input", function () {
    bill = billInput.value;
    calcTotal();

})

// when num of people is input, changes numOfPeople to value, recalcs totals

numOfPeopleInput.addEventListener("input", function () {
    numOfPeople = numOfPeopleInput.value;
    if (numOfPeople == 0 || numOfPeople === '') {
        document.querySelector("#zero-case").style.display = "inline"
        document.querySelector("#tip-per-person").innerText = `$0.00`;
        document.querySelector("#total-per-person").innerText = `$0.00`;
        numOfPeopleInput.style.outlineColor = "#d37d6e";
      //  numOfPeopleInput.addEventListener(style.outlineColor = "#d37d6e");
    } else {
        numOfPeopleInput.style.outlineColor ="hsl(172, 67%, 45%)";
        document.querySelector("#zero-case").style.display = "none"
    }
    calcTotal();

})

// when radio is clicked, changes the value of tipPercent and clears custom back to default
for (let i = 0; i < tipPercentRadios.length; i++) {
    tipPercentRadios[i].addEventListener("click", getTipPercent);
}

function getTipPercent() {
    for (let i = 0; i < tipPercentRadios.length; i++) {
        if (tipPercentRadios[i].checked) {
            tipPercent = tipPercentRadios[i].value;
            custom.value = '';
            calcTotal();
        }
    }
}


// when custom tip input is changed, changes value of tipPercent
custom.addEventListener('input', function () {
    tipPercent = custom.value;
    calcTotal();
})

//deselects radio button
custom.addEventListener("click", function () {
    for (let i = 0; i < tipPercentRadios.length; i++) {
        tipPercentRadios[i].checked = false;
    }
})

//resetting everything
reset.addEventListener("click", function () {
    tipPercent = 0.00;
    bill = 0.00;
    numOfPeople = 1;
    tip = 0.00;
    total = 0.00;
    for (let i = 0; i < tipPercentRadios.length; i++) {
        tipPercentRadios[i].checked = false;
    }
    billInput.value = '';
    numOfPeopleInput.value = '';
    custom.value = '';
    document.querySelector("#tip-per-person").innerText = `$0.00`;
    document.querySelector("#total-per-person").innerText = `$0.00`;
    reset.style.backgroundColor = "#0d686d";
    reset.style.color = "#045c60";
})