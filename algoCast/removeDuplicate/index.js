function removeDuplicate(arr) {
  var exists = {},
      outarr = [],
      elm;

  for (var i=0; i<arr.length; i++) {
    elm = arr[i];
    if(!exists[elm]) {
      outarr.push(elm);
      exists[elm] = true;
    }
  }
  return outarr;
}

removeDuplicate([1,3,3,3,1,5,6,7,8,1]);