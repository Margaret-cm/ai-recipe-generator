//Display the generated recipe
function displayRecipe(response) {
  console.log("response generated");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

//Generate the recipe
function generateRecipe(event) {
  event.preventDefault();
  console.log("generating recipe");
  //Build API URL
  let preferencesInput = document.querySelector("#user-preferences");
  console.log(preferencesInput.value);
  let apiKey = "024aa03t44f40e2f16f8abod4036b3b9";
  let context =
    "you are a very talented muffins baker who creates easy to follow recipes in english. your mission is to generate a recipe with a maximum of 10 bulleted lines in HTML format. Provide recipe title then the bulleted instructions. no opening or closing remarks. do not include '```html'. at the end of the recipe sign off with 'SheCodes AI' inside a <strong> element";
  let prompt = `User preferences: generate a muffins recipe which satisfies the user preferences ${preferencesInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let processing = document.querySelector("#recipe");
  processing.classList.remove("hide");
  processing.innerHTML = `<div class="processing">Generating your recipe... Please wait</div>`;

  //Make Axios call to API
  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
