// One
let num = "";
for (let i = 1; i <= 5; i++) {
  num += i + "";
}

for (let i = 0; i < 5; i++) {
  console.log(num);
}

// Two

for (let i = 1; i <= 5; i++) {
  let result = "";
  for (let j = 0; j < i; j++) {
    result = result + i;
  }
  console.log(result);
}

//Three
for (let i = 5; i >= 1; i--) {
  let final = "";
  for (let j = 1; j <= i; j++) {
    final = final + i;
  }
  console.log(final);
}

