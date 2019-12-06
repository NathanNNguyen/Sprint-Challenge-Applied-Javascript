// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then(response => {
    // console.log(response.data.articles);
    const obj = response.data.articles;
    console.log(obj);
    // response.data.articles[i].forEach(element => {
    //   cardsParent.appendChild(newCard(element))
    // })
    // for (var i = 0; i < obj.length; i++) {
    //   console.log(obj[i]);
    //   cardsParent.appendChild(newCard(i));
    // };
  })

  .catch(error => {
    console.log(error)
  })

const cardsParent = document.querySelector(`.cards-container`);

function newCard(headlineText, authorsNameText, imgSrcText) {
  const card = document.createElement(`div`);
  const headline = document.createElement(`div`);
  const author = document.createElement(`div`);
  const imgContainer = document.createElement(`div`);
  const img = document.createElement(`img`);
  const authorName = document.createElement(`span`);

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(authorName);
  imgContainer.appendChild(img);

  card.classList.add(`card`);
  headline.classList.add(`headline`);
  author.classList.add(`author`);
  imgContainer.classList.add(`img-container`);

  headline.textContent = headlineText;
  img.src = imgSrcText;
  authorName.textContent = authorsNameText;

  return card
}
