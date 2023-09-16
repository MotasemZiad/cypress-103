function counter(par) {
  var spar = par.split("");
  var cnt = {};
  spar.forEach(function (x) {
    cnt[x] = (cnt[x] || 0) + 1;
  });

  return cnt;
}

console.log(counter("aabbccddeaggch"));
