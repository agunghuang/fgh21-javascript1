const printSegitiga = 5;

for (let i = printSegitiga; i > 0; i--) {
  let output = '';
  for (let j = 1; j <= i; j++) {
    output += j + ' ';
  }
  console.log(output.trim());
}