// 1) გაფილტრე ლუწები და იპოვე საშუალო
function evenAverage(arr) {
  let evens = arr.filter((n) => n % 2 === 0);
  let sum = evens.reduce((a, b) => a + b, 0);
  return sum / evens.length;
}

// 2) დაითვალე სიტყვების რაოდენობა წინადადებაში
function countWords(sentence) {
  return sentence.trim().split(/\s+/).length;
}

// 3) შეამოწმე მარტივი რიცხვია თუ არა
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 4) იპოვე ყველაზე გრძელი სიტყვა
function longestWord(words) {
  let longest = words[0];
  for (let word of words) {
    if (word.length > longest.length) longest = word;
  }
  return longest;
}

// 5) დააბრუნე ყველაზე ხშირი რიცხვი
function mostFrequent(arr) {
  let count = {};
  for (let n of arr) count[n] = (count[n] || 0) + 1;
  let maxNum = null,
    maxCount = 0;
  for (let key in count) {
    if (count[key] > maxCount) {
      maxCount = count[key];
      maxNum = Number(key);
    }
  }
  return maxNum;
}

// 6) დაითვალე რამდენი ლუწი და კენტი რიცხვია
function countEvenOdd(nums) {
  let even = 0,
    odd = 0;
  for (let n of nums) {
    if (n % 2 === 0) even++;
    else odd++;
  }
  return { even, odd };
}

// 7) დააბრუნე ყველაზე პატარა რიცხვი
function smallestNumber(nums) {
  let min = nums[0];
  for (let n of nums) {
    if (n < min) min = n;
  }
  return min;
}
