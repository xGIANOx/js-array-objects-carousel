const sliderImagesElement = document.querySelector('.slider > .images')
const prevButtonElement = document.querySelector('.prev')
const nextButtonElement = document.querySelector('.next')

// array con le immagini da inserire nello slider
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


let activeImage = 0
let activeText = 0


images.forEach((image, i) => {
  const thisCard = images[i];
  const thisImageUrl = images[i].image;

  
  const cardMarkup = `<img src="./assets/${thisImageUrl}" alt="" class="img-fluid ${i === activeImage ? 'active' : ''}">
  <div class="card-body ${image === activeText ? 'active' : ''}">
    <h3 class="active">
      ${thisCard.title} 
    </h3>
    <p>
      ${thisCard.text}
    </p>
  </div>`
  console.log(cardMarkup);
  sliderImagesElement.insertAdjacentHTML('beforeend', cardMarkup)
});

const imageElementsList = document.querySelectorAll('.slider > .images > img')


// eventlistener al prev btn
prevButtonElement.addEventListener('click', function () { 
console.log('prev');

  const thisImage = imageElementsList[activeImage]
  console.log(thisImage);
  thisImage.classList.remove('active')

  
  if(activeImage === 0) {
    activeImage = imageElementsList.length - 1
  } else {
    activeImage--
  }

  // immagine successiva
  const nextImage = imageElementsList[activeImage]
  console.log(nextImage);
  nextImage.classList.add('active')


})
// eventlistener al next btn

nextButtonElement.addEventListener('click', function () {
  console.log('next');
  const thisImage = imageElementsList[activeImage]
  console.log(thisImage);
  thisImage.classList.remove('active')

  if(activeImage === imageElementsList.length -1) {
    activeImage = 0
  } else {
    activeImage++
  }

  // immagine successiva
  const nextImage = imageElementsList[activeImage]
  nextImage.classList.add('active')

})