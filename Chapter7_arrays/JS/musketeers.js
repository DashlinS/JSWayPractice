const musketeers = ["Athos", "Porthos", "Aramis"];
musketeers.push("D'Artagnan");
musketeers.splice(2, 1)
for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
}

musketeers.forEach(musketeer => {
  console.log(musketeer);
});

for (const musketeer of musketeers) {
  console.log(musketeer);
}