console.log("MAIN_JS: Loaded");
//Onload
window.addEventListener('load',()=>{
  setCarouselCorrectly();
  /*setDropdownCorrectly();*/
  ShowLessOpinion();
})
//OnWindowResize
window.addEventListener("resize",()=>{
  setCarouselCorrectly();
  /*setDropdownCorrectly();*/
  ShowLessOpinion();
})
//Setting Carusel Effect
function setCarouselCorrectly(){
  let slider = document.getElementById('slider');
  let innerSlider = document.getElementById('innerSlider');
  let x = ((innerSlider.offsetWidth - slider.offsetWidth)/2);

  innerSlider.style.left = `-${x}px`;
  //console.log("X ="+x+" --- slider.w ="+slider.offsetWidth);
}
//Setting ShowMoreButton
let opinions = document.querySelectorAll('.o-circle');
let moreOpinions = false;

function ShowLessOpinion(){
  let iWidth = window.innerWidth;
  //mniej na start niezależnie od ilości, chyba, że zwiększona liczba to nie.
  if(iWidth >= 800){
    if(moreOpinions === true){
      for(let i=0;i<opinions.length;i++){
        opinions[i].style.display = "block";
      }
      opinions[3].style.marginBottom = "-130px";
      opinions[4].style.marginBottom = "-130px";
      opinions[5].style.marginBottom = "-130px";
      opinions[7].style.marginBottom = "20px";
    }else{
      for(let i=0;i<opinions.length;i++){
        opinions[i].style.display = "block";
      }
      for(let j=6;j<opinions.length;j++){
        opinions[j].style.display = "none";
      }
      opinions[3].style.marginBottom = "-130px";
      opinions[5].style.marginBottom = "20px";
    }
  }else{
    if(moreOpinions === true){
      for(let i=6;i<opinions.length;i++){
        opinions[i].style.display = "none";
      }
      opinions[3].style.marginBottom = "0";
      opinions[4].style.marginBottom = "0";
      opinions[5].style.marginBottom = "20px";
    }else{
      for(let i=4;i<opinions.length;i++){
        opinions[i].style.display = "none";
      }
      opinions[3].style.marginBottom = "20px";
    }
  }
}
function showMoreOpinion(){
  moreOpinions = true;
  let iWidth = window.innerWidth;

  console.log("More Opinion");
  if(iWidth>=800){
    //show all
    for(var k=0;k<(opinions.length);k++){
      opinions[k].style.display = "block";
    }
    opinions[5].style.marginBottom = "-130px";
    opinions[6].style.marginBottom = "-130px";
    opinions[7].style.marginBottom = "20px";
  }else{
    //show only two
    for(var k=0;k<(opinions.length-2);k++){
      opinions[k].style.display = "block";
    }
  }
  document.querySelector('.o-showMore').style.display = "none";
}
//ShowDropdown
let dropdownOpen = false;
let dropdown = document.getElementById("dropdown");
let dropdownText = document.getElementById("dropdown-text");
let icon = document.getElementById("iconArrow");
/*function setDropdownCorrectly(){
  let width = window.innerWidth;
  //console.log("Window Resized"+width);
  if(width < 800){
    if(dropdownOpen === true){
      dropdown.style.visibility = "visible";
    }else{
      dropdown.style.visibility = "hidden";
    }
  }else{
    dropdown.style.visibility = "visible";
  }
}*/
function ShowDropdown(){
  if(dropdownOpen === false){
    //open
    dropdown.style.visibility = "visible";
      icon.style.msTransform = "rotate(0eg)";
      icon.style.transform = "rotate(0deg)";
    dropdownOpen = true;
    console.log("DropDown: Open");
  }else{
    //close
    dropdown.style.visibility = "hidden";
      icon.style.msTransform = "rotate(90eg)";
      icon.style.transform = "rotate(90deg)";
    dropdownOpen = false;
    console.log("DropDown: Close");
  }
}
//Show specyfic info
let currentMedProc = 1;
function ShowMedProc(which){
  if(which === currentMedProc){
    console.log("DO NOTHING");
  }else{
    console.log("Change to: "+which);
    currentMedProc = which;
    let x = "";
    //wypisać wszystkie elementy z tabeli zależnie od języka!
    for(let i=1;i<MedData.length;i++){

    }
    
    
    array.forEach(element => {
      
    });


  }
}
//Turn on body parts

//Validate Form
function validateForm(){
  console.log("Start Checking Form");

  let errorMessage_pl = "";
  let errorMessage_en = "";

  if(document.getElementById("Name").value === "" ||
  document.getElementById("Email").value === "" ||document.getElementById("Message").value === ""){
    errorMessage_pl = "Uzupełnij Formularz."
    errorMessage_en = "Fill the form."
    ShowErrorMessage(errorMessage_pl,errorMessage_en);
    return false;
  }else{
    if(document.getElementById("Message").value.length > 350){
      errorMessage_pl = "Wiadomość może mieć max. 350 znaków."
      errorMessage_en = "Keep your message under 350 characters."
      ShowErrorMessage(errorMessage_pl,errorMessage_en);
      return false;
    }else{
      console.log("Form validation passed");
      return true;
    }
  }
}
function ShowErrorMessage(message_pl,message_en){
  let errorMessage = document.getElementById("ErrorMessage");
  let currentLanguage = document.getElementById('changeLangButton').value;

  if(currentLanguage==="EN"){
    //PL
    errorMessage.innerHTML = message_pl;
  }else{
    //EN
    errorMessage.innerHTML = message_en;
  }
}