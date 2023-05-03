// PIPE method implementation......

// const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x)

getName = (person) => person.name;
uppercase = (string) => string.toUpperCase();

pipe =
  (...functions) =>
  (value) =>
    functions.reduce((value, currentFunction) => currentFunction(value), value);

pipe(getName, uppercase)({ name: "Buckethead" });

// COMPOSE FUNCTION IMPLEMENTATION
// This only use reduceRight array function

compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((v, f) => f(v), x);
