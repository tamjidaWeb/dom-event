console.log('hello')
function makeRed(){
    document.body.style.backgroundColor = 'red';
}
//option 1
//<button onclick="console.log(19)">another me</button>
//option 2
//    <button onclick="makeRed()">make red</button>


//option 3
const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = makePurple;

function makePurple(){
  document.body.style.backgroundColor = 'purple'; 
}

//option 4

const makeGreenButton = document.getElementById('make-green');
     makeGreenButton.onclick =function makeGreen(){
        document.body.style.backgroundColor = 'green';
     }


//option 5
const makePinkButtons = document.getElementById('make-pink')
makePinkButtons.addEventListener('click', makePink)
function makePink (){
    document.body.style.backgroundColor = 'pink';
}








