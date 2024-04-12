// https://www.codewars.com/kata/514a024011ea4fb54200004b
/*
  Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.
*/

function domainName(url) {
  let domain = url.replace(/(https?:\/\/)/, '').split('/')[0];

  domain = domain.replace('www.', '');

  return domain.split('.')[0];
}
