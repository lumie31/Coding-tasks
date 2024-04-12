// https://www.codewars.com/kata/57814d79a56c88e3e0000786
/*
  Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates 
  all the odd-indexed characters of S with all the even-indexed characters of S, 
  this process should be repeated N times.
*/

function encrypt(text, n) {
  if (!text || n < 0) return text;

  for (let i = 0; i < n; i++) {
    let odd = '',
      even = '';
    for (let j = 0; j < text.length; j++) {
      if (j % 2 === 0) {
        even += text[j];
      } else {
        odd += text[j];
      }
    }
    text = odd + even;
  }
  return text;
}

function decrypt(encryptedText, n) {
  // TODO
}
