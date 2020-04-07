/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
const carouselParent = document.querySelector(`.carousel-container`);
carouselParent.appendChild(createCarousel());

function createCarousel() {
  const carousel = document.createElement(`div`);
  const leftButton = document.createElement(`div`);
  const rightButton = document.createElement(`div`);
  const firstImg = document.createElement(`img`);
  const secondImg = document.createElement(`img`);
  const thirdImg = document.createElement(`img`);
  const fourthImg = document.createElement(`img`);

  carousel.append(leftButton, firstImg, secondImg, thirdImg, fourthImg, rightButton);

  carousel.classList.add(`carousel`);
  leftButton.classList.add(`left-button`);
  rightButton.classList.add(`right-button`);

  leftButton.textContent = `<`;
  rightButton.textContent = `>`;
  firstImg.src = `./assets/carousel/mountains.jpeg`;
  secondImg.src = `./assets/carousel/computer.jpeg`;
  thirdImg.src = `./assets/carousel/trees.jpeg`;
  fourthImg.src = `./assets/carousel/turntable.jpeg`;

  leftButton.addEventListener(`click`, () => {
    leftButton.style.backgroundColor = `green`;
  })

  rightButton.addEventListener(`click`, () => {
    rightButton.style.backgroundColor = `green`;
  })

  console.log(carousel);
  return carousel
}
/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
