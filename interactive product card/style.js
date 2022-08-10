var productimg = document.querySelector('.product-img')
window.addEventListener('scroll', (e) => {
  console.log(Math.floor(window.scrollY))
  if (window.scrollY < 100) {
    productimg.setAttribute(
      'style',
      ' height: 200px; width: 200px; transform: translateY(-70px) translateX(-300px)rotateZ(0deg);',
    )
  } else if (window.scrollY == 200) {
    productimg.setAttribute(
      'style',
      ' height: 400px; width: 400px; transform: translateY(450px) translateX(250px)rotateZ(0deg) ;',
    )
  } else if (window.scrollY < 500) {
    productimg.setAttribute(
      'style',
      ' height: 400px; width: 400px; transform: translateY(450px) translateX(250px)rotateZ(0deg) ;',
    )
  } else if (window.scrollY > 500) {
    productimg.setAttribute(
      'style',
      ' height: 300px; width: 300px; transform: translateY(850px) translateX(-200px)rotateZ(0deg) ;',
    )
  }
})
