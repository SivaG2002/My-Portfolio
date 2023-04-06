const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Welcome I'm SIVA.G.NAIR", "I'm a Creator", "I'm a Developer", "I'm a Gamer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

//TRANSITION ABOUT ME


// move characters in texts to span element with required data-flip-key to animate transitions
var texts = document.querySelectorAll('.text');
for (var i = 0; i < texts.length; i++) {
  var textElement = texts[i],
      text = textElement.innerHTML,
      textLength = text.length,
      newText = '';
  
  for (var j = 0; j < textLength; j++) {
    var character = text.charAt(0);
    text = text.substring(1);
    newText += '<span data-flip-key="character-' + character + '">' + character + '</span>';
  }
  textElement.innerHTML = newText;
}
// End adding characters to span elements

// setup FLIP animation
const flipping = new Flipping({
  parentElement: document.querySelector('#text-container'),
  duration: 600
});

var currentIndex = 0;
for (var i = 0; i < texts.length; i++) {
  if (i !== currentIndex) {
    texts[i].hidden = true;
  }
}

document.body.addEventListener('click', flipping.wrap(function() {
  // cycle through the words in order
  var nextIndex = currentIndex + 1 >= texts.length ? 0 : currentIndex + 1;
  texts[currentIndex].hidden = true;
  texts[nextIndex].hidden = false;
  currentIndex = nextIndex;
}));