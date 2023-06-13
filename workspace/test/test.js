
const $side_bar = document.querySelector(".sdie_bar");

window.addEventListener("load",e =>{
  Array.from($side_bar.children).forEach(element => {
    element.classList.add("active");
  });
})


$side_bar.firstChild.back