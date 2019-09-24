window.onscroll = function(){
  scrolling()
}

function scrolling(){
  var card = document.querySelector("#cards")
  console.log(card);
  let startPosition = window.pageYOffset
  console.log(startPosition)
  if(startPosition >= 1890){
    card.style.visibility = "visible";
  }
  else {
    card.style.visibility = "hidden"
  }
}
