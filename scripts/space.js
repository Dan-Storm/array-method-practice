//Planet List
const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "dwarf planet pluto"]

//Exercise 1 put planet list on the DOM
     let planetList = document.getElementById("planetList")
    // planets.forEach(planet =>{
    //     planetList.innerHTML += `<h1>${planet}</h1>`
    // })
//Exercise 2 Uppercase first letter in planet name
    // let upperCasePlanets = planets.map(function(planet){
    //     const nameCapital = planet.charAt(0).toUpperCase() + planet.slice(1)
    //     planetList.innerHTML += `<h2>${nameCapital}`
    //     return nameCapital;
    // })

    // console.log(upperCasePlanets);

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
//Exercise 3

let newPlanetArray = planets.filter(planet => {
    if (planet.includes("er")){
        return true;
    }
    return false;
})

console.log(newPlanetArray);
planetList.innerHTML += newPlanetArray.join(`<hr>`);