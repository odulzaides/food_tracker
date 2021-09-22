export function searchFood() {
    let item = "cheese"
    let nutrition = fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${item}`, {
        headers: {
            'x-app-id': '470ee77d',
            'x-app-key': '3df9aecc7a8ad5d9c6970d6b78f0594f'
        }
    });

    nutrition.then(data => {
        return data.json();
    }).then(post => {

        console.log(post);

    });
}