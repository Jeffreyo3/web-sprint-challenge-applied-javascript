import Axios from "axios";
// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

function Tab(topicString) {
  // 1 Create new elements
  const div = document.createElement("div");
  
  // 2 Define/Create structure
  // only creating one element

  // 3 Set content (refer args)
  div.textContent = topicString;

  // 4 Apply Style (refer css)
  div.classList.add("tab");

  // 5 Return component element
  return div;
}

Axios.get("https://lambda-times-api.herokuapp.com/topics")
  .then((res) => {
    const topics = res.data.topics;

    const topicDiv = document.querySelector("div.topics");

    topics.forEach((topic) => topicDiv.appendChild(Tab(topic)));
  })
  .catch((err) => console.log(err));
