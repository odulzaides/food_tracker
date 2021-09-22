import { autoComplete } from "../endpoints/autocomplete_API.js";

export function autoCompleteListen() {

    // get input element
    let foodInput = document.querySelector('#food-entry');
    foodInput.addEventListener('input', function() {
        // Check for input
        if (foodInput.value) {
            autoComplete(foodInput.value);
            console.log(foodInput.value)
        } else {
            console.log("No entey yet")
        }
        // console.log("Hello   ", autocomplete.value);

        // console.log(autocomplete.value);
    });
    // pass the value in real time to the item variable
}