let form = document.createElement("form");
let input = document.createElement("input");
let label = document.createElement("label");
let button = document.createElement("button");
let answers;



function createFoodDiv (name, image) {
  let newDiv = document.createElement("div");
  let newImg = document.createElement("img");
  let newPara = document.createElement("h2");
  newPara.innerText = `Maybe you should eat some ${name}!`;
  newImg.src = image;
  newDiv.id = "food-div";
  newImg.id = "food-img";
  newPara.id = "food-desc";
  newDiv.appendChild(newImg);
  newDiv.appendChild(newPara);
  answers.appendChild(newDiv);
};

async function getApi() {
  let response = await fetch("https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=87abe062&app_key=5b7e1322a97ad91b534c59ad7273378c");
  return await response.json();
};

function getRandomRecipe() {
  getApi().then(res => {
    let rand = Math.floor(Math.random() * res.hits.length);
    let randName = res.hits[rand].recipe.label;
    let randImage = res.hits[rand].recipe.image;
    createFoodDiv(randName, randImage);
  });
};

form.addEventListener("submit", (e) => {
  if (answers) {
    answers.remove();
  } 
  answers = document.createElement("div");
  answers.id = "answers";
  let newDiv = document.createElement("div");
  let newImg = document.createElement("img");
  newDiv.id = "magic-div";
  randNumber = Math.floor(Math.random() * 20) + 1;
  newImg.src = `images/magic8ball_${randNumber}.png`;
  newImg.id = "magic-pic";
  newDiv.appendChild(newImg);
  answers.appendChild(newDiv);
  getRandomRecipe();
  document.body.appendChild(answers);
  e.preventDefault();

});

function loadPage () {
  document.body.innerHTML = '';
  document.body.appendChild(form);
  label.innerText = "Ask me anything! \n";
  button.innerText = "Ask";
  button.type = "submit";
  input.type = "text";
  input.className = "question-text"; 
  input.placeholder = "Ask away!"
  form.appendChild(label);
  form.appendChild(input); 
  form.appendChild(button);
};

loadPage();


