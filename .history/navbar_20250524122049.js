const btn=document.getElementById('open-toggle');
const state=document.querySelector('#menu-ic')

btn.addEventListener('click', () => {
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});