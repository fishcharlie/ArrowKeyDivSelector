
function switchTo(element) {
	for (var i = 0; i < document.getElementsByClassName("button").length; i++) {
		document.getElementsByClassName("button")[i].classList.remove("selected");
	}
  element.classList.add("selected");
}

document.addEventListener("DOMContentLoaded", function(event) { 
	document.getElementsByClassName("button")[0].classList.add("selected");  
});


document.addEventListener("keydown", function(event) {
  var eventCode = event.keyCode;
  var buttons = document.getElementsByClassName("button");
  var currentlySelectedButton;
  var currentlySelectedButtonIndex;
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].classList.contains("selected")) {
      currentlySelectedButton = buttons[i];
      currentlySelectedButtonIndex = i;
    }
  }

  console.log(eventCode);
  switch (eventCode) {
    case 38:
      var newIndex = (currentlySelectedButtonIndex - 1) < 0 ? buttons.length - 1 : currentlySelectedButtonIndex - 1;
      switchTo(buttons[newIndex])
      break;
    case 40:
      var newIndex = (currentlySelectedButtonIndex + 1) > buttons.length - 1 ? 0 : currentlySelectedButtonIndex + 1;
      switchTo(buttons[newIndex])
      break;
    default:
      break;
  }
})
