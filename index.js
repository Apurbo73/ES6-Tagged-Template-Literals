const myFunction = (strings, ...values) => {
  // console.log(strings); output is : [ 'Here is ', ' and ', ' and ', '' ]
  // console.log(values);output is : [ 'Apurbo', 'Deb', 'Nath' ]
  const m = strings.reduce((prev, currentValue) => {
    return prev + currentValue + (values.length ? "Mr." + values.shift() : "");
  }, "");
  return m;
};

var a = "Apurbo";
var b = "Deb";
var c = "Nath";
console.log(myFunction`Here is ${a} and ${b} and ${c}`);
// ooutput is: Here is Mr.Apurbo and Mr.Deb and Mr.Nath
