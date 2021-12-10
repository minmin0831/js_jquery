const text = 'Hello World My name is Siri.';
const matched = text.match(/[a-n]{1,3}/g);
// [a-n]: a부터 n까지의 문자까지만 허용.
// {1,3}: 남은 문자에서 1개부터 3개까지 추출.
console.log(matched);