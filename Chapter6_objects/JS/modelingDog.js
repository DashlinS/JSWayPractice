const dog = {

  name: "Taffy",
  species: "Weiner Dog",
  size: 3 + " ft",
  bark() {
    return "woof woof!"
  }

}
console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);