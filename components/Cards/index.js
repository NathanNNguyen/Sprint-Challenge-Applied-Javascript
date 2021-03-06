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

const cardsParent = document.querySelector(`.cards-container`);
axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then(response => {
    const articles = response.data.articles;
    // console.log(articles);
    const topics = Object.keys(articles);
    // console.log(topics);

    topics.forEach(item => {
      articles[item].forEach(article => {
        const artic = newCard(article);
        cardsParent.append(artic);
      })
    })
  })
  .catch(error => {
    console.log(error)
  })

function newCard(data) {
  // console.log(data)
  const card = document.createElement(`div`);
  const headline = document.createElement(`div`);
  const author = document.createElement(`div`);
  const imgContainer = document.createElement(`div`);
  const img = document.createElement(`img`);
  const authorName = document.createElement(`span`);

  card.append(headline, author);
  // card.appendChild(author);
  author.append(imgContainer, authorName);
  // author.appendChild(authorName);
  imgContainer.appendChild(img);

  card.classList.add(`card`);
  headline.classList.add(`headline`);
  author.classList.add(`author`);
  imgContainer.classList.add(`img-container`);

  headline.textContent = data.headline;
  img.src = data.authorPhoto;
  authorName.textContent = data.authorName;

  return card
}
