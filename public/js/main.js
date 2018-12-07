var i = 0;
var images = [];
var time = 3000;

images[0] = '../img/1.jpg';
images[1] = '../img/2.jpg';
images[2] = '../img/3.jpg';
images[3] = '../img/4.jpg';
images[4] = '../img/5.jpg';
images[5] = '../img/6.jpg';
images[6] = '../img/7.jpg';
images[7] = '../img/8.jpg';
images[8] = '../img/9.jpg';
images[9] = '../img/10.jpg';
images[10] = '../img/11.jpg';
images[11] = '../img/12.jpg';
images[12] = '../img/13.jpg';

function changeImg (){
  document.slide.src = images[i];
  if(i < images.length - 1){
    i++;
  }
  else {
    i=0;
  }
  setTimeout("changeImg()", time);
}
window.onload = changeImg;
