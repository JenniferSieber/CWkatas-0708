// KATA 1
//  https://www.codewars.com/kata/55b051fac50a3292a9000025
const filterString = value => {
  return Number(value.match(/[0-9]/g).join(''));
}

console.log(filterString("123"));
console.log(filterString("a1b2c3"));
console.log(filterString("aa1bb2cc3dd"));

// KATA 2 
// https://www.codewars.com/kata/5af15a37de4c7f223e00012d/train/javascript
function menFromBoys(arr) {
  arr = Array.from(new Set(arr));
  let evens = arr.filter(a => a % 2 === 0).sort((a, b) => a - b);
  let odds = arr.filter(a => a % 2).sort((a, b) => b - a);
  return evens.concat(odds);
}

console.log(menFromBoys([12,89,-38,-78]));
console.log(menFromBoys([63,-57,76,-85,88,2,-28]));

// KATA 3
// https://www.codewars.com/kata/5826f54cc60c7e5266000baf/train/javascript
function minimumPerimeter(area) {
  for (let i = Math.sqrt(area) | 0; i > 0; i--) {
    if (area % i == 0) {
      return 2 * (i + area/i);
    }
  }
}

console.log(minimumPerimeter(45));

// KATA 4
// https://www.codewars.com/kata/596776fbb4f24d0d82000141/train/javascript
function f(num, obj) { 
 switch (num) {
  case obj.a: return obj.b;
  case obj.b: return obj.c;
  case obj.c: return obj.a;
 }
}

console.log(f(3, { a:3, b:4, c:5 } ));
console.log(f(4, { a:3, b:4, c:5 } ));
console.log(f(5, { a:3, b:4, c:5 } ));

// KATA 5
// https://www.codewars.com/kata/59a2a3ba5eb5d4e609000055/train/javascript
function findArray(arr1, arr2){
  return arr1.length ? arr2.map(x => arr1[x]) : [];
}

console.log(findArray(['a', 'a', 'a', 'a', 'a'], [2, 4]));
console.log(findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7]));
console.log(findArray([1, 2, 3, 4, 5], [4,2,0]));


// KATA 6 
// https://www.codewars.com/kata/62ad72443809a4006998218a/train/javascript
function likeOrDislike(buttons) {
  return buttons.reduce( (state, btn) => btn === state ? 'Nothing' : btn , 'Nothing' );
}

console.log(likeOrDislike(['Dislike', 'Like']));
console.log(likeOrDislike(['Dislike', 'Dislike']));
console.log(likeOrDislike(['Like', 'Dislike', 'Dislike']));
console.log(likeOrDislike(['Like', 'Dislike', 'Like', 'Dislike', 'Dislike']));




