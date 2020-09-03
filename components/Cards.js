import Axios from "axios";
// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const cardContainer = document.querySelector("div.cards-container");

function Card(article) {
  // 1 Create new elements
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const span = document.createElement("span");

  // 2 Define/Create structure
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(img);
  author.appendChild(span);

  // 3 Set content (refer args)
  headline.textContent = article.headline;
  img.src = article.authorPhoto;
  img.alt = article.authorName;
  span.textContent = `By ${article.authorName}`;

  // 4 Apply Style (refer css)
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  // 5 Create Event Listener (if applies)
  card.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(article.headline)
  })

  // 6 Return component element
  return card;
}

Axios.get("https://lambda-times-api.herokuapp.com/articles")
  .then((res) => {
    const articles = res.data.articles;

    for (let key in articles) {
      articles[key].forEach((articleObj) => {
        cardContainer.appendChild(Card(articleObj));
      });
    }
  })
  .catch((err) => console.log(err));
