var slice = Array.prototype.slice;
var toA = function(aryLike) { return slice.call(aryLike, 0); }

var cat = function(/* arguments... */) {
  return toA(arguments).map(toA).reduce(function(prev, curr) {
    return prev.concat(curr);
  });
};

var tail = function(ary) {
  return toA(ary).slice(1, ary.length);
};

var partial = function(fun /* args... */) {
  var args = tail(arguments);

  return function(/* arguments... */) {
    return fun.apply(null, cat(args, arguments));
  };
};

export { cat, tail, partial };
