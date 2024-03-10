let container = document.querySelector('.container');
let mountains1 = document.querySelector('.p-1-mountains');
let bgTrees2 = document.querySelector('.p-1-bg-trees');
let backTree3 = document.querySelector('.p-1-back-tree');
let houseTrees4 = document.querySelector('.p-1-house-trees');
let frontTrees5 = document.querySelector('.p-1-front-trees');
let lake6 = document.querySelector('.p-1-lake');



container.addEventListener('scroll', ()=>{
  // console.log(container.offsetHeight);
  let offHeight = container.offsetHeight;
  let offTop = container.scrollTop;
  // console.log(offTop / offHeight - 1);
  // console.log(offTop / offHeight);
  let scrollValue = offTop / offHeight;

  mountains1.style.translate = `0 calc(${scrollValue}*1vh)`;
  bgTrees2.style.translate = `0 calc(${scrollValue}*6vh)`;
  backTree3.style.translate = `0 calc(${scrollValue}*10vh)`;
  houseTrees4.style.translate = `0 calc(${scrollValue}*15vh)`;
  frontTrees5.style.translate = `0 calc(${scrollValue}*25vh)`;
  lake6.style.translate = `0 calc(${scrollValue}*30vh)`;

  // tbf the only thing that doesn't work is the fact that i used blend mode darken
  // we just have to fill in the rest of the trees and make sure the shadow of the
  // house doesn't interfere.

  // if(scrollValue > 1.5) backTree3.style.translate = `0 calc(${1.5}*10vh + (${scrollValue - 1.5} *6vh))`;
  if(scrollValue > 1.5) backTree3.style.translate = `0 calc(${1.5}*10vh + (${scrollValue - 1.5} *6vh))`;
  if(scrollValue > 1.5) houseTrees4.style.translate = `0 calc(${1.5}*15vh + (${scrollValue - 1.5} *6vh))`;
  if(scrollValue > 1.5) frontTrees5.style.translate = `0 calc(${1.5}*25vh + (${scrollValue - 1.5} *6vh))`;
  if(scrollValue > 1.5) lake6.style.translate = `0 calc(${1.5}*30vh + (${scrollValue - 1.5} *6vh))`;
})