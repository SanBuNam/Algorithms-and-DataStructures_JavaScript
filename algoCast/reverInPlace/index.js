function reverseInPlace(str){
  return str.split(' ').reverse().join(' ').split('').reverse().join('');
}

reverseInPlace('This is simple version');