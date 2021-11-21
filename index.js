var n = 5;
var pattern = "";
for (var i = 1; i <= n; i++) {
  for (var j = 0; j < i; j++) {
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern);
