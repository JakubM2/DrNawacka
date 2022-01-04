console.log("Language Script Loaded");

//Change Lanugage
let changeLangButton = document.getElementById("changeLangButton");
let currentLanguage = false;//polish by default (false)

function changeLanguage(){
  let lang = currentLanguage;
  currentLanguage = !currentLanguage;

  if(lang === false){
    //Change to english
      changeLangButton.innerText = "PL";
        //document.lang.innerHTML = "en";
      applySelectedLanguage("en");
      console.log("changing to English - Done");
  } else if(lang === true){
    //Change to polish
      changeLangButton.innerText = "EN";
        //document.lang.innerHTML = "pl";
      applySelectedLanguage("pl");
      console.log("changing to Polish - Done");
  }else{
    console.log("Nope - you have already change language to " + lang);
  }
}
function applySelectedLanguage(language){
  document.querySelectorAll(`[langData]`).forEach(element => {
    let key = element.getAttribute(`langData`);

    if(key){
      /*check if it's not an input field or textarea or button*/
      if(element.tagName === "INPUT" || element.tagName === "TEXTAREA" || element.tagName === "BUTTON"){
        /*little messy but it works*/
        if(element.tagName === "BUTTON"){
          element.innerHTML = languageData.languages[language].strings[key];
        }else if(element.type == "submit"){
          element.value = languageData.languages[language].strings[key];
        }else{
          element.placeholder = languageData.languages[language].strings[key];
        }
      }else{
        element.textContent = languageData.languages[language].strings[key];
      }
    }
  });
  console.log("applying selected language: "+language);
}