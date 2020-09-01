const r = Number(prompt("Enter the circle radius:"));
// TODO: create the circle object here

circumference = 2 * Math.PI * r
area = Math.PI * r ** 2

const circle = {

  circumference() {
    return circumference
  },

  area() {
    return area
  }
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);