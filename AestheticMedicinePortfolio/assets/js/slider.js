//Slider
let slider = document.querySelector('.slider');
let innerSlider = document.querySelector('.inner-slider');
let sliderDots = document.getElementsByClassName("slider-dot");
//querySelectorAll?
let mousePressed = false;
let startPositionX;
let x;

//Dots
let whichDotIsActive = 3;

slider.addEventListener('onload', ()=>{
  //set slider centered
  innerSlider.style.left = window.style.width;
});
slider.addEventListener('mousedown', (e)=>{
  mousePressed = true;
  startPositionX = e.offsetX - innerSlider.offsetLeft;
  console.log("Offset: "+innerSlider.offsetLeft);
  slider.style.cursor = 'grabbing';
});
slider.addEventListener('mouseleave', ()=>{
  slider.style.cursor = 'default';
  mousePressed = false;
});
slider.addEventListener('mouseup', ()=>{
  slider.style.cursor = 'grab';
});
window.addEventListener('mouseup',()=>{
  mousePressed = false;
});
slider.addEventListener('mousemove', (e)=>{
  if(!mousePressed){
    e.preventDefault();
    return;
  }else{
    x = e.offsetX;
    innerSlider.style.left = `${x - startPositionX}px`;

    checkBoundary();
  }
});
function checkBoundary(){
  let outer = slider.getBoundingClientRect();
  let inner = innerSlider.getBoundingClientRect();

  if(parseInt(innerSlider.style.left)>0){
    innerSlider.style.left = '0px';
  }else if(inner.right < outer.right){
    innerSlider.style.left = `-${inner.width - outer.width}px`;
  }
}
//dots
function clickDot(num){
  if(whichDotIsActive == (num-1)){
    //DO NOTHING
    console.log("You cannot change slider to currently in center");
  }else{
    //setting the dots
    sliderDots[whichDotIsActive].classList.remove("slider-dot-focus");
    whichDotIsActive = (num-1);
    sliderDots[whichDotIsActive].classList.add("slider-dot-focus");
    //setting the sliders
    let screenWidth = window.innerWidth;

    if(screenWidth >= 2700){
      //just center - because you can see the whole slider...
      innerSlider.style.left = window.style.width;
    }else{
      let center=0;

      center = -num*(390)+390+245;
      innerSlider.style.left = `${center}px`;
      checkBoundary();
    }
  }
}