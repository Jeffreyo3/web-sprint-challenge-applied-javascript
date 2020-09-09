// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const header = document.querySelector("div.header-container");

function Header() {
  // 1 Create new elements
  const div = document.createElement("div");
  const dateSpan = document.createElement("span");
  const h1 = document.createElement("h1");
  const tempSpan = document.createElement("span");

  // 2 Define/Create structure
  div.appendChild(dateSpan);
  div.appendChild(h1);
  div.appendChild(tempSpan);

  // 3 Set content (refer args)
  dateSpan.textContent = "MARCH 28, 2020";
  h1.textContent = "Lambda Times";
  tempSpan.textContent = "98°";

  // 4 Apply Style (refer css)
  div.classList.add("header");
  dateSpan.classList.add("date");
  tempSpan.classList.add("temp");

  // 5 Return component element
  return div;
}

header.appendChild(Header());
