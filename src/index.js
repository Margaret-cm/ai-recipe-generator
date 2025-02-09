//Generate the recipe
function generateRecipe(event) {
  event.preventDefault();
  new Typewriter("#recipe", {
    strings: "Muffins recipe will show here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
