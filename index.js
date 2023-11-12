const navclick = document.querySelector('.k')
const e = document.querySelector('.e')
const i = document.querySelector('.i')
const r = document.querySelector('.r')
const b = document.querySelector('.b')

const body = document.querySelector('body')
const nav = document.querySelector('.nav-android');
const first =document.querySelector('#first-pages')
function toggleNav() {

if(body.style.overflow === 'auto'){
    body.style.overflow = 'hidden'
    nav.classList.add('show');
} else{
    body.style.overflow = 'auto'
    nav.classList.remove('show');
}
}

navclick.addEventListener('click', function(){
   toggleNav()
})
e.addEventListener('click', function(){
    toggleNav()
 })
 i.addEventListener('click', function(){
    toggleNav()
 })
 r.addEventListener('click', function(){
    toggleNav()
 })
 b.addEventListener('click', function(){
    toggleNav()
 })
