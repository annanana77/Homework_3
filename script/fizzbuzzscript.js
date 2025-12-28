document.getElementById('generateBtn').addEventListener('click', function() { //when button clicked, run the following..//
    
    const maingrid = document.getElementById('maingrid'); //gets element with id maingrid from html, gives variable a name//
    const startvalue = parseInt(document.getElementById('start').value); //gets element with id start (its value) from html and parseint turns from string to int//
    const endvalue = parseInt(document.getElementById('end').value); 
    const buzzval = parseInt(document.getElementById('buzz').value);
    const fizzval = parseInt(document.getElementById('fizz').value);

    //clear previous divs using my own function at the bottom//
    clearGrid();

    //check if inputs are valid//
    if (
        startvalue < 1 || startvalue > 100 || endvalue < 1 || endvalue > 100 || buzzval < 1 || buzzval > 100 || fizzval < 1 || fizzval > 100 ||
        isNaN(buzzval) || isNaN(fizzval) || isNaN(startvalue) || isNaN(endvalue)
    ) {
        alert("All values must be numbers between 1 and 100!");
        return;
    }
    if (startvalue > endvalue) {
        alert("Starting value must be less than or equal to ending value!");
        return;
    }
    //generate divs from 1 to 100//
    for (let i = startvalue; i <= endvalue; i++) {
        const divnbr = document.createElement('div'); //creates div element in html with variable name divnbr//
        divnbr.id = `myid${i}`; //gives div element unique id myid+number//
        maingrid.appendChild(divnbr); //appends div element as child to main// 
    }
    //fizzbuzz logic applied to each div//
    for (let i = startvalue; i <= endvalue; i++) {
        const divnbr = document.getElementById(`myid${i}`); //gets each div by its unique id//
        if (i % fizzval === 0 && i % buzzval === 0) {
            divnbr.innerText = "FizzBuzz";
            divnbr.classList.add("fizzbuzz");
        } else if (i % fizzval === 0) {
            divnbr.innerText = "Fizz";
            divnbr.classList.add("fizz");
        } else if (i % buzzval === 0) {
            divnbr.innerText = "Buzz";
            divnbr.classList.add("buzz");
        } else{
            divnbr.innerText = i;
            divnbr.classList.add("number");
        }
    }
});

document.getElementById('resetBtn').addEventListener('click', function() { 
    clearGrid(); //calls the clearGrid function to clear the grid//
});

function clearGrid() {
    const maingrid = document.getElementById('maingrid');
    while (maingrid.firstChild) {
        maingrid.removeChild(maingrid.firstChild);
    }
}
