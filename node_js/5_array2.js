const nums1 = [10, 20, 30];
const nums2 = new Array(10, 20, 30);
const str1 = ['David', 'Lisa', 'Chris'];
const str2 = new Array('David', 'Lisa', 'Chris');

console.log('name', str1[0]);
console.log('attendants', str2);

const nums3 = [];
nums3.push(10);
nums3.push(20);
nums3.push(30);

const str3 = [];
str3.push('David', 'Lisa', 'Chris');
str1.push('John', 'Josh');

console.log(nums1[0]);
console.log(nums3[2]);

console.log('name :', str2[1]);
console.log('attendants(%d)', str1.length, str1);