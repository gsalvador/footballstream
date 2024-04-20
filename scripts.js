let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
} 

// let udC = updateCurvedText(500);

// function updateCurvedText(radius) {
//     // Add span for every letter
//     const curvedText = document.getElementsByClassName("curved-text")[0];
//     let w = curvedText.style["width"];
//     let h = curvedText.style["heigh"];
//     curvedText.style["min-width"] = `${w}px`;
//     curvedText.style["min-height"] = `${h}px`;
//     let text = curvedText.innerHTML; // Gets text contained in element
//     let html = "";
//     Array.from(text).forEach((letter) =>{
//         html += `<span id='lt-${letter}'>${letter}</span>`;
//     });
//     curvedText.innerHTML = html;

//     // Set span styles
//     let curvedSpan = curvedText.querySelector("span");
//     console.log(curvedSpan);
//     curvedSpan.style["position"] = "absolute";
//     curvedSpan.style["height"] = `${radius}px`;
//     curvedSpan.style["transformOrigin:"] = "bottom center";

//     // Prepare circle path maths
//     var circleLength = 2 * Math.PI * radius;
//     var angleRad = w/(2*radius);
//     var angle = 2 * angleRad * 180/Math.PI/text.length;

//     // Set every letter at it's x,y circle path position
//     let idx = 0;
//     Array.from(text).forEach((letter) =>{
//         let element = document.getElementById(`lt-${letter}`);
//         element.style["transform"] = `translate(${w/2}px,0px) rotate(${idx * angle - text.length*angle/2}deg)`;
//         idx++;
//     });
// }
