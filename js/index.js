//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
const main = document.getElementById('main')

main.addEventListener('click', function(event){
  alert('I was clicked!')
})

//
// const input = document.querySelector('input');
//
// input.addEventListener('keydown', function(e) {
//   console.log(e.which);
// });


const input = document.querySelector('input')

input.addEventListener('keydown', function(e) {
  if (e.which === 71) {
    return e.preventDefault()
  } else {
    console.log(e.which)
  }
});


//
// divs = document.querySelectorAll('div');
//
// function capture(e) {
//   console.log(this.firstChild.nodeValue.trim() + ' captured');
// }
//
// for (let i = 0; i < divs.length; i++) {
//   divs[i].addEventListener('click', capture, true);}





const divs = document.querySelectorAll('div');

function bubble(e) {
  // stop! that! propagation!
  e.stopPropagation();

  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}
