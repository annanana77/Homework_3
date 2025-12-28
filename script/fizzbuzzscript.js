document.getElementById('generateBtn').addEventListener('click', function() { //when button clicked, run the following..//
    //clear previous divs???//

    //generate divs from 1 to 100//
    const maingrid = document.getElementById('maingrid'); //gets element with id maingrid from html, gives variable name//
    const startvalue = parseInt(document.getElementById('start').value); //gets element with id start (its value) from html and parseint turns from string to int//
    const endvalue = parseInt(document.getElementById('end').value); 
    for (let i = startvalue; i <= endvalue; i++) {
        const divnbr = document.createElement('div'); //creates div element in html with variable name divnbr//
        divnbr.id = `myid${i}`; //gives div element unique id myid+number//
        divnbr.textContent = i; //adds number i as text to the div element//
        maingrid.appendChild(divnbr); //appends div element as child to main// 
}
});