function Xbonacci(signature, n) {
  let len = signature.length;
  for (let i = len; i < n; i++) {
    signature[i] = signature.slice(i - len).reduce(function (a, b) {
      return a + b;
    });
  }
  return signature;
}
console.log(Xbonacci([0, 1], 10));
