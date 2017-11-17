for (var counter = 1; counter <= 100; counter++) {
    if (counter % 3 === 0 && counter % 5 === 0) {
        addSquare('Fizz Buzz!', 'fizzbuzz');
    } else if (counter % 3 === 0) {
        addSquare('Fizz!', 'fizz');
    } else if (counter % 5 === 0) {
        addSquare('Buzz!', 'buzz');
    } else {
        addSquare(counter,'num');
    }
}       

function addSquare(text,className){
    var div = document.createElement('DIV');   
    var para = document.createElement("P");     
    var t = document.createTextNode(text);
    para.appendChild(t);
    div.appendChild(para);                                
    document.body.appendChild(div).className = className;
}

