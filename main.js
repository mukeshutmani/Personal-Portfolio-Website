let text = "Mukesh Utmani";
const h1Element = document.getElementById("animatedText");
let index = 0;


function typeLetter() {
  if (index < text.length) {
    h1Element.innerHTML += text.charAt(index);
    index++; 
    setTimeout(typeLetter, 200); 

  } else {
    setTimeout(() => {
       h1Element.innerHTML=""
       index=0;
        if(text === "Mukesh Utmani") {
          text="Software Developer"
        } else {
          text = "Mukesh Utmani"
        }
       typeLetter()
    },1000)
  } 

}
typeLetter();


//  about button 

const aboutBtn = document.getElementById('aboutBtn')
const closeBtn = document.getElementById('crossBtn')
const popUpId  = document.getElementById('popupModal')

aboutBtn.addEventListener('click', function(){
   popUpId.classList.remove('hidden')  
   setTimeout(() => {
    popUpId.classList.add('hidden')  
  }, 15000); 

})

closeBtn.addEventListener('click', function() {
    popUpId.classList.add('hidden')
})











// latest work button 
document
  .getElementById("latestWorksButton")
  .addEventListener("click", function () {
    const section = document.getElementById("latestWorksSection");
    section.scrollIntoView({ behavior: "smooth" });
  });

// theme button toggle switch
const switchBtn = document.getElementById('themeBtn');

if(localStorage.getItem('theme') === 'dark'){
document.body.classList.add('darkMode')
switchBtn.checked=true
} else {
document.body.classList.add('lightMode')
}


switchBtn.addEventListener('change', function(){
if(this.checked) {
  document.body.classList.remove('lightMode')
  document.body.classList.add('darkMode')
  localStorage.setItem('theme', 'dark')

} else {
  document.body.classList.remove('darkMode')
  document.body.classList.add('lightMode')
  localStorage.setItem('theme', 'light')
}

})




