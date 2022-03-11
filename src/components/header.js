const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  const headDiv = document.createElement("div");
  const headDate = document.createElement("span");
  const h1Title = document.createElement("h1");
  const headTemp = document.createElement("span");

  headDiv.appendChild(headDate);
  headDiv.appendChild(h1Title);
  headDiv.appendChild(headTemp);

  headDiv.classList.add("header");
  headDate.classList.add("date");
  headTemp.classList.add("temp");

  headDate.textContent = date;
  h1Title.textContent = title;
  headTemp.textContent = temp;

  return headDiv;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const entryPoint = document.querySelector(selector);
  const headDiv = Header('title', 'date', 'temp');
  entryPoint.append(headDiv);
}

export { Header, headerAppender }
