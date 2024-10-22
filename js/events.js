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

//we will use this
function makePurple(){
  document.body.style.backgroundColor = 'purple'; 
}



//we will use this sometimes
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

//option 5 another
const orangeButtons = document.getElementById('make-orange');
orangeButtons.addEventListener('click',function makeGreen(){
    document.body.style.backgroundColor = 'orange';
})

//we will use this sometimes
//option 5 Final
document.getElementById('make-goldenrod').addEventListener('click', function(){})
document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor = 'goldenrod';
})








