function square1(x) {
  let result = x * x;
    return result;
}

  let square2 = x => {
  let result = x * x;
    return result;
}

  for (let x = 0; x <= 10; x++) {
    console.log(square1(x));
}

  for (let x = 0; x <= 10; x++) {
    console.log(square2(x));
}