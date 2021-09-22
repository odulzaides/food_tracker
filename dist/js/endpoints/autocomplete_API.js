export function autoComplete(foodEntry) {

    let item = foodEntry;
    let url = `https://api.nutritionix.com/v2/autocomplete?q=${item}`
    console.log(url)
    let nutrition = fetch(url, {
        headers: {
            'x-app-id': '470ee77d',
            'x-app-key': '3df9aecc7a8ad5d9c6970d6b78f0594f'
        }
    });

    nutrition.then(data => {
        return data.json();
    }).then(post => {

        console.log(post);

    })
}