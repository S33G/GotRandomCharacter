let request = require('request');
let url = 'https://api.got.show/api/characters/locations';

request.get(url, function getCharacters(error, response) {
    if (error) console.error(error);

    let json = JSON.parse(response.body)

    let names = json.map(function(character) {
        return character.name;
    });

    console.log(names[Math.floor(Math.random()*names.length)])
});
