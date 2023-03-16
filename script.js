// navmenu icon change 
const mynavbar = document.getElementById('mynavbar');
const barIcon = document.getElementById('barIcon');

barIcon.addEventListener('click',function(){
  if(mynavbar.classList.contains('show')){
    barIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }else if(!mynavbar.classList.contains('show')) {
    barIcon.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
  }else {
    barIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});