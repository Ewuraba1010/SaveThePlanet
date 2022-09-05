// let pics = document.getElementById('items').getElementsByTagName('img');
// let pics = document.querySelectorAll('#items img');
// pics.forEach(randFunction);

// function randFunction(){
//     positiontop = Math.random()*50;
//     positionleft = Math.random()*80;

//     document.getElementById('items').getElementsByTagName('img').innerHTML += "style = top:40vh; left:20vw;";
// }

// console.log(document.getElementById('items').getElementsByTagName('img'));
// document.getElementById('items').getElementsByTagName('img').innerHTML += " 'style = top: "+20+'vh;'+'right: '+40+'vw;';

// let add = '';

// for(i = 0; i < pics.length; i++) {
//     positiontop = Math.random()*50;
//     positionleft = Math.random()*80;

//     add += '" style="top: '+positiontop+'vh;'+'right: '+positionright+'vw;">';

//     document.getElementById('items').getElementsByTagName('img').innerHTML += add;
//   }

let counter = 0;

function allowDrop(event) {
    event.preventDefault();
}
  
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}
  
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

function itemDrop(event) {
    event.preventDefault();

    var item = this.getAttribute('id');
    var target = doument.getElementById('target');

    if(item === target.getAttribute('class')) {
        $(this).style.display = "none";
        counter++
    }
}