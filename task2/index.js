const numbers = [];

for (let num = -10; num <= 10; num++) {
	numbers.push(num);
}

for (let i = numbers.length - 1; i >= 0; i--) {
	if (numbers[i] < 0) {
		numbers.splice(i, 1);
	}
}

for (let i = 0; i < numbers.length; i++) {
	numbers[i] = numbers[i] ** 2;
}

numbers.sort(function (a, b) {
	return b - a;
});

console.log(numbers);
