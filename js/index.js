const imgContainer = document.querySelectorAll(".portfolio-img-container");
const overlayImg = document.querySelectorAll(".overlay-img");
const iconContainer = document.querySelectorAll(".icon-container");

imgContainer.forEach((item, index, array) => {
  overlayImg[index].style.opacity = "0";
  iconContainer[index].style.visibility = "hidden";
  iconContainer[index].style.opacity = "0";
  imgContainer[index].addEventListener("click", () => {
    console.log("SPRAWDZAM" + `${overlayImg[index].style.opacity}`)
    if (overlayImg[index].style.opacity == "0") {
      overlayImg[index].style.opacity = "1";
      iconContainer[index].style.visibility = "visible";
      iconContainer[index].style.opacity = "1";
    } else {
      overlayImg[index].style.opacity = "0";
      iconContainer[index].style.visibility = "hidden";
      iconContainer[index].style.opacity = "0";
    }
  })
})
