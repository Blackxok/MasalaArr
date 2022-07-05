// arr 1 ------------------------
// let n = 100;
// let s = [];
// for (let i = 1; i < n * 2; i++) {
// 	if (i % 2 == 1) {
// 		s.push(i);
// 	} else {
// 		continue;
// 	}
// }
// console.log(s);

// arr 2 ------------------------
// let n = 10;
// let s = [];
// for (let i = 0; i < n; i++) {
// 	s.push(Math.pow(2, i));
// }
// console.log(s);

// arr 3 ------------------------
// let n = 7;
// let a = 12;
// let d = 2;
// let s = [];
// for (let i = 0; i < n; i++) {
// 	a = a + d;
// 	s.push(a - 1);
// }
// console.log(s);

// arr 4 ------------------------
// arr 5 ------------------------
// let s = [];
// let n = 10;

// for (let i = 0; i < n; i++) {
// 	if (i < 2) {
// 		s[0] = 0;
// 		s[1] = s[0] + 1;
// 	} else {
// 		s[i] = s[i - 1] + s[i - 2];
// 	}
// }
// console.log(s);
// arr 6 ------------------------
// let n = 10;
// let s = [];

// for (let i = 0; i < n; i++) {
// 	if (i < 3) {
// 		s[0] = 0;
// 		s[1] = s[0] + 1;
// 		s[2] = s[1] + s[0];
// 	} else {
// 		s[i] = s[i - 1] + s[i - 1];
// 	}
// }
// console.log(s);
// arr 7 ------------------------
// let arr = [10, 21, 31, 24, 5, 6, 7, 8, 9];
// arr.sort((a, b) => a - b).reverse();
// console.log(arr);

// arr 8 ------------------------
// let arr = [10, 21, 31, 24, 5, 6, 7, 8, 9];
// let toq = [];
// arr.forEach((item) => {
// 	if (item % 2 != 0) {
// 		toq.push(item);
// 	}
// });
// // toq.sort((a, b) => a - b);
// console.log(toq);

// arr 9 ------------------------
// let arr = [10, 21, 31, 24, 5, 6, 7, 8, 9];
// let jup = [];
// arr.forEach((item) => {
// 	if (item % 2 == 0) {
// 		jup.push(item);
// 	}
// });
// // toq.sort((a, b) => a - b);
// jup.reverse();
// console.log(jup);
// console.log(jup.length);

// arr 10 ------------------------
// let arr = [5, 6, 9, 4, 2, 3];
// let res = [];
// arr.forEach((item) => {
// 	if (item % 2 != 0) {
// 		res.push(item);
// 	}
// });
// arr.forEach((item) => {
// 	if (item % 2 == 0) {
// 		res.push(item);
// 	}
// });
// console.log(res);

// arr 11 ------------------------
// let arr = [5, 6, 9, 4, 2, 3, 7, 1, 8]; //length 6 > K
// let K = 2;
// arr.map((item, index) => {
// 	if (index >= K && index % K == 0) {
// 		console.log(item);
// 	}
// });
// console.log(ind);

// arr 12 ------------------------
// let arr = [5, 6, 9, 4, 2, 3, 7, 8];
// arr.map((item, ind) => {
// 	if (ind > 0 && ind % 2 == 0) {
// 		console.log(item);
// 	}
// });

// arr 13 ------------------------
// let arr = [5, 6, 9, 4, 2, 3, 7, 8];
// arr.map((item, ind) => {
// 	if (ind > 0 && ind % 2 != 0) {
// 		console.log(item);
// 	}
// });

// arr 14 ------------------------
// let arr = [5, 6, 9, 4, 2, 3, 7, 8];
// let res = [];
// arr.map((item, ind) => {
// 	if (ind > 0 && ind % 2 == 0) {
// 		res.push(item);
// 	}
// });
// arr.map((item, ind) => {
// 	if (ind > 0 && ind % 2 != 0) {
// 		res.push(item);
// 	}
// });
// console.log(res);

// arr 15 ------------------------
// let arr = [5, 6, 9, 4, 2, 3, 7, 8];
// let res = [];

// arr.map((item, ind) => {
// 	if (ind >= 0 && ind % 2 != 0) {
// 		res.push(item);
// 	}
// });

// let jupInd = [];
// arr.map((item, ind) => {
// 	if (ind >= 0 && ind % 2 == 0) {
// 		jupInd.push(item);
// 	}
// });
// jupInd.reverse();
// jupInd.map((item) => res.push(item));
// console.log(res);

// arr 16 ------------------------
// arr 17 ------------------------
// arr 18 ------------------------
// let arr = [5, 6, 9, 4, 7, 3, 7, 8];
// let oxirgi = arr[arr.length - 1];
// let oxirgi1 = [];
// arr.map((item) => {
// 	if (item == oxirgi - 1) {
// 		oxirgi1.push(item);
// 	}
// });
// oxirgi1.length > 0 ? oxirgi1.map((item) => console.log(item)) : console.log(0);

// arr 19 ------------------------
// let arr = [7, 6, 9, 4, 17, 3, 70, 8];
// let oxirgi = arr[arr.length - 1];
// let between = [];
// arr.map((item) => {
// 	if (item == oxirgi - 1 && item >= arr[0]) {
// 		between.push(item);
// 	}
// });
// between.length > 0 ? between.map((item) => console.log(item)) : console.log(0);

// arr 20 ------------------------
// let arr = [7, 6, 9, 4, 17, 3, 7, 8],
// 	K = 3, //K < L
// 	L = 7, // L < arr.length()
// 	sum = 0;
// arr.map((item, index) => {
// 	if (K < index && index < L) {
// 		sum += item;
// 	}
// });
// console.log(sum);

// arr 21 ------------------------
// arr 21 ------------------------//AYNI
// let arr = [7, 6, 9, 4, 17, 3, 7, 8],
// 	K = 3, //K < L
// 	L = 7, // L < arr.length()
// 	sum = 0,
// 	orta = 0;
// arr.map((item, index) => {
// 	if (K < index && index < L) {
// 		sum += item;
// 		orta++;
// 	}
// });
// arif = sum / orta;
// console.log(arif);

// arr 23 ------------------------
// let arr = [7, 6, 9, 4, 17, 3, 7, 8],
// 	K = 3, //K < L
// 	L = 7, // L < arr.length()
// 	boshqa = [],
// 	sum = 0;
// arr.map((item, index) => {
// 	if (K < index && index < L) {
// 		// delete item;
// 	} else {
// 		boshqa.push(item);
// 	}
// });
// boshqa.map((e) => (sum += e));
// orta = sum / boshqa.length;
// console.log(orta);

// arr 24 ------------------------
// let arr = [10, 20, 30, 40, 50],
// 	d = 0;
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i + 1] - arr[i] == arr[i + 3] - arr[i + 2]) {
// 		d = arr[1] - arr[0];
// 	}
// }
// if (d == 0) {
// 	console.log(0);
// } else {
// 	console.log(d);
// }

// arr 25 ------------------------
// let arr = [2, 6, 18, 56, 168];
// 	d = 0;
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i + 1] / arr[i] == arr[i + 3] / arr[i + 2]) {
// 		d = arr[1] / arr[0];
// 	}
// }
// if (d == 0) {
// 	console.log(0);
// } else {
// 	console.log(d);
// }

// arr 26 ------------------------
// arr 27 ------------------------
// arr 28 ------------------------
// let arr = [2, 6, 18, 56, 168];
// arr.map((e, ix) => {
// 	if (ix % 2 == 0) {
// 		console.log(e);
// 	}
// });
// arr 29 ------------------------
// let arr = [2, 6, 18, 56, 168];
// arr.map((e, ix) => {
// 	if (ix % 2 != 0) {
// 		console.log(e);
// 	}
// });
// arr 30 ------------------------
// let arr = [8, 1, 3, 6, 3, 14, 7, 9, 53, 46],
// 	arrIx = [];
// arr.map((e, ix) => {
// 	if (e > arr[ix + 1]) {
// 		arrIx.push(ix);
// 	}
// });
// console.log(arrIx);
// console.log(arrIx.length);

// arr 31 ------------------------
// let arr = [8, 1, 3, 6, 3, 14, 7, 9, 53, 46],
// 	arrIx = [];
// arr.map((e, ix) => {
// 	if (e > arr[ix - 1]) {
// 		arrIx.push(ix);
// 	}
// });
// arrIx.reverse();
// console.log(arrIx);
// console.log(arrIx.length);

// arr 32 ------------------------
// let arr = [8, 10, 30, 60, 39, 14, 7, 9, 53, 46],
// 	count = 0;
// arr.map((e, ix) => {
// 	if (e < arr[ix - 1] && e < arr[ix + 1] && count < 1) {
// 		console.log(e);
// 		count++;
// 	}
// });

// arr 33 ------------------------
// arr 34 ------------------------
// arr 35 ------------------------
// arr 36 ------------------------
// arr 37 ------------------------
// arr 38 ------------------------
// arr 39 ------------------------

// arr 40 ------------------------
// let arr = [8, 10, 3, 16, 9, 14, 7, 9, 5, 6],
// 	R = 4,
// 	ayirma = [];
// arr.map((e) => {
// 	ayirma.push(e - R);
// });
// ayirma.sort((a, b) => {
// 	return a - b;
// });
// console.log(ayirma[0]);

// arr 41 ------------------------
// let arr = [8, 10, 3, 16, 14, 7, 9, 5, 6],
// 	big = 0;
// arr.sort((a, b) => {
// 	return a - b;
// });
// big = arr[arr.length - 1] + arr[arr.length - 2];
// console.log(big);

// arr 42 ------------------------
// let arr = [8, 10, 3, 16, 9, 14, 7, 9, 5, 6],
// 	R = 4,
// 	ayirma = [],
// 	yaqinSum = 0;
// arr.map((e) => {
// 	ayirma.push(e - R);
// });
// ayirma.sort((a, b) => {
// 	return a - b;
// });
// yaqinSum = ayirma[0] + R + (ayirma[1] + R);
// console.log(yaqinSum);

// arr 43 ------------------------
// let arr = [8, 10, 3, 3, 9, 10, 7, 9, 5, 6];
// arr = arr.sort((a, b) => {
// 	return a - b;
// });
// const newArr = arr.filter((e, ix) => e != arr[ix + 1]);
// console.log(newArr.length);

// arr 44 ------------------------
// let arr = [8, 10, 3, 3, 9, 10, 7, 9, 5, 6];
// arr = arr.sort((a, b) => {
// 	return a - b;
// });
// arr.map((e, ix) => {
// 	if (e == arr[ix + 1]) {
// 		console.log(ix, ix + 1);
// 	}
// });

// arr 45 ------------------------
// arr 46 ------------------------
// let arr = [8, 10, 4, 3, 4, 5, 7, 9, 5, 1],
// 	R = 8,
// 	yaqin = [],
// 	count = 0;

// arr.map((e, ix) => {
// 	if (e + arr[ix + 1] <= R - 1 && count < 1) {
// 		yaqin.push(e, arr[ix + 1]);
// 		count++;
// 	}
// });
// console.log(yaqin);

// arr 47 ------------------------
// let arr = [8, 12, 4, 3, 4, 5, 7, 9, 5, 1],
// 	sort = [];
// sort = [...new Set(arr)]
// console.log(sort);

// arr 48 ------------------------
// let arr = [4, 4, 4, 4, 3, 5, 5, 5, 5, 5, 1];
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] === arr[i + 1]) {
// 		arr.splice(i, 1);
// 		i--;
// 	}
// }
// console.log(arr);

// arr 49 ------------------------
// arr 50 ------------------------
// let arr = [8, 12, 4, 3, 4, 5, 7, 9, 5, 1],
// 	katta = 0;
// arr.map((item, index) => {
// 	if (item > arr[index + 1]) {
// 		katta++;
// 	}
// });
// console.log(katta);

// arr 51 ------------------------
// let a = [2, 4, 6, 8, 12],
// 	b = [1, 3, 5, 9, 10],
// 	bdub = [...b];
// b.splice(0, b.length);
// b = [...a];
// a = [...bdub];
// console.log("a= " + a, "b= " + b);

// arr 52 ------------------------
// let a = [2, 4, 6, 8, 12],
// 	b = [1, 7, 5, 9, 10],
// 	c = [],
// 	len = 0;
// a.length > b.length ? (len = a.length) : (len = b.length);
// for (let i = 0; i < len; i++) {
// 	a[i] >= b[i] ? c.push(a[i]) : c.push(b[i]);
// }
// console.log(c);

// arr 53 ------------------------
// arr 54 ------------------------
// let arr = [8, 12, 4, 3, 4, 5, 7, 9, 5, 1],
// 	arrJup = [];
// arr.map((item) => {
// 	if (item % 2 === 0) {
// 		arrJup.push(item);
// 	}
// });
// arrJup.map((e) => {
// 	console.log(e);
// });
// console.log("length " + arrJup.length);

// arr 55 ------------------------
// arr 56 ------------------------
// arr 57 ------------------------
// arr 58 ------------------------
// arr 63 ------------------------
// let a = [2, 4, 6, 8, 11],
// 	b = [1, 3, 7, 5, 9, 10],
// 	c = [];
// a = a.sort((a, b) => a - b);
// b = b.sort((x, y) => x - y);
// c = [...a, ...b].sort((k, l) => k - l);
// console.log(c);
// arr 64 ayni ------------------------

// arr 65 ------------------------
// let a = [2, 4, 6, 8, 11],
// 	k = 2; //1<=k<=a.length
// a = a.map((e) => e + k);
// console.log(a);

// arr 66 ------------------------
// let a = [2, 3, 4, 8, 12, 2];
// for (let i = 0; i < a.length; i++) {
// 	if (a[i] % 2 === 0) {
// 		for (let j = i + 1; j < a.length; j++) {
// 			if (a[j] % 2 === 0) {
// 				a[i] = a[i] + a[j];
// 				break;
// 			}
// 		}
// 	}
// }
// console.log(a);

// arr 67 ------------------------
// let a = [2, 3, 4, 7, 12, 3],
// 	toq = 0;
// for (let i = 0; i < a.length; i++) {
// 	if (a[i] % 2 != 0) {
// 		toq = a[i];
// 	}
// }
// for (let j = 0; j < a.length; j++) {
// 	if (a[j] % 2 != 0) {
// 		a[j] = a[j] + toq;
// 	}
// }
// console.log(a);

// arr 68 ------------------------
// let a = [2, 3, 4, 7, 12, 5];
// a = a.sort((n, m) => n - m);
// let oxirgi = a[a.length - 1];
// a[a.length - 1] = a[0];
// a[0] = oxirgi;
// console.log(a[0]);
// console.log(a[a.length - 1]);

// arr 69 ------------------------
// let a = [2, 3, 4, 7, 8, 5];
// let b = [...a];
// console.log(b);
// console.log(a);
// arr 70 ------------------------
// arr 71 ------------------------
// arr 72 ------------------------
// arr 73 ------------------------

// arr 74 ------------------------
// let a = [2, 1, 4, 7, 18, 5]; // [2, 1, 0, 0, 18, 5];
// arr 75 ------------------------
// arr 76 ------------------------
// let a = [2, 1, 4, 7, 18, 5, 10, 9, 6];
// for (let i = 1; i < a.length; i++) {
// 	if (a[i] > a[i - 1] && a[i] > a[i + 1]) {
// 		a[i] = "A";
// 	}
// }
// a.map((e, idx) => {
// 	if (e === "A") {
// 		a[idx] = 0;
// 	}
// });
// console.log(a);

// arr 77 ------------------------
// let a = [3, 2, 4, 7, 18, 5, 10, 9, 6];
// for (let i = 1; i < a.length; i++) {
// 	if (a[i] < a[i - 1] && a[i] < a[i + 1]) {
// 		a[i] = Math.pow(a[i], 2);
// 	}
// }
// console.log(a);

// arr 78 ------------------------
// let a = [3, 2, 4, 7, 18, 5, 10, 9, 6];
// for (let i = 0; i < a.length - 1; i++) {
// 	a[i] = Math.floor((a[i] + a[i + 1]) / 2);
// }
// console.log(a);

// arr 79 ------------------------
// let a = [3, 2, 4, 7, 18, 5, 10, 9, 6];
// for (let i = a.length - 1; i >= 0; i--) {
// 	a[i] = a[i - 1];
// 	if (i === 0) {
// 		a[i] = 0;
// 	}
// }
// console.log(a);

// arr 80 ------------------------
// let a = [3, 2, 4, 7, 18, 5, 10, 9, 6];
// for (let i = 0; i < a.length; i++) {
// 	a[i] = a[i + 1];
// 	if (i === a.length - 1) {
// 		a[i] = 0;
// 	}
// }
// console.log(a);

// arr 81 ------------------------
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// k = 4;
// a.splice(a.length - k, a.length);
// for (let i = 0; i < k; i++) {
// 	a.unshift(0);
// }
// console.log(a);

// arr 82 ------------------------
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
// 	k = 3;
// a.splice(0, k);
// for (let i = 0; i < k; i++) {
// 	a.push(0);
// }
// console.log(a);

// arr 83 ------------------------
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// a.unshift(a[a.length - 1]);
// a.splice(a.length - 1, 1);
// console.log(a);

// arr 84 ------------------------
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// a.push(a[0]);
// a.shift(a[0]);
// console.log(a);

// arr 85 ------------------------
// arr 86 ------------------------
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
// 	k = 3,
// 	cl = [...a];
// for (let i = a.length; i > a.length - k; i--) {
// 	a.unshift(cl[i - 1]);
// 	a.pop();
// }
// console.log(a);

// arr 87 ------------------------
// let a = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// a = a.sort((x, y) => x - y);
// console.log(a);

// arr 88 ------------------------
// arr 89 ------------------------
// let a = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr 90 ------------------------
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
// 	k = 5;
// a.splice(k, 1);
// console.log(a);

// arr 91 ------------------------
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
// 	k = 4,
// 	m = 7,
// 	del = m - k;
// a.splice(k, del);
// console.log(a);

// arr 92 ------------------------
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// a.map((e, idx) => {
// 	if (e % 2 != 0) {
// 		a.splice(idx, 1);
// 	}
// });
// console.log(a);

// arr 93 ------------------------
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < a.length; i += 2) {
// 	console.log(i);
// 	delete a[i];
// }
// console.log(a);

// arr 94 ------------------------
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 1; i < a.length; i += 2) {
// 	console.log(i);
// 	delete a[i];
// }
// console.log(a);

// arr 95 ------------------------
// let a = [1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 10, 10];
// a.sort((a, b) => {
// 	a - b;
// });
// a.map((e, idx) => {
// 	if (e === a[idx + 1]) {
// 		a.splice(idx, 1);
// 	}
// });
// console.log(a);

// arr 96 ------------------------
// let a = [1, 6, 2, 3, 3, 3, 10, 5, 6, 7, 8, 9, 10];
// a.sort((x, y) => x - y);
// console.log(a);
// a.map((e, idx) => {
// 	if (e === a[idx + 1]) {
// 		for (let i = idx; i < a.length; i++) {
// 			if (a[i] === a[i + 1]) {
// 				a.splice(i, 1);
// 			}
// 		}
// 	}
// });
// console.log(a);

// arr 97------------------------
// let a = [1, 6, 2, 3, 3, 3, 5, 6, 7, 7, 8, 9, 9, 10, 10];
// a.sort((x, y) => x - y);
// console.log(a);
// for (let j = a.length; j > 0; j--) {
// 	if (a[j] === a[j - 1]) {
// 		for (let i = j - 1; i > 0; i--) {
// 			if (a[i] === a[i - 1]) {
// 				a.splice(i - 1, 1);
// 			}
// 		}
// 	}
// }
// console.log(a);

// arr 98------------------------
// let a = [1, 2, 3, 3, 3, 4, 4, 4, 5, 5];
// a.sort((a, b) => a - b);
// a = a.reduce((acc, cur, idx) => {
// 	if (cur === a[idx + 1] && cur === a[idx - 1]) {
// 		acc.push(cur);
// 		return acc;
// 	} else {
// 		return acc;
// 	}
// }, []);
// console.log(a);

// arr 99------------------------
// let a = [1, 2, 3, 3, 3, 4, 4, 4, 5, 5];
// a.sort((a, b) => a - b);
// for (let i = 0; i < a.length; i++) {
// 	if (a[i] === a[i + 2]) {
// 		a.splice(i, 3);
// 		i--;
// 	}
// }
// console.log(a);

// arr 100------------------------
// let a = [1, 2, 3, 3, 3, 4, 4, 4, 5, 5];
// a.sort((a, b) => a - b);
// for (let i = 0; i < a.length; i++) {
// 	if (a[i] != a[i + 2] && a[i] != a[i - 1] && a[i] === a[i + 1]) {
// 		a.splice(i, 2);
// 		i--;
// 	}
// }
// console.log(a);

// arr 101 ------------------------
// let a = [1, 6, 5, 4, 7, 8, 9],
// 	k = 4;
// a.reduce((acc, cur, idx) => {
// 	if (idx === k) {
// 		a.splice(idx - 1, 0, 0);
// 	}
// });
// console.log(a);

// arr 102 ------------------------
// let a = [1, 6, 5, 4, 7, 8, 9],
// 	k = 4;
// a.reduce((acc, cur, idx) => {
// 	if (idx === k) {
// 		a.splice(idx, 0, 0);
// 	}
// });
// console.log(a);

// arr 103 ------------------------
// let a = [1, 6, 5, 4, 7, 8, 9];
// a.sort((x, y) => x - y);
// a.push(0);
// a.unshift(0);
// console.log(a);

// arr 104 ------------------------
// let a = [1, 6, 5, 4, 7, 8, 9],
// 	k = 4,
// 	m = 5;
// a.reduce((acc, cur, idx) => {
// 	if (idx === k) {
// 		for (let i = 0; i < m; i++) {
// 			a.splice(idx, 0, 0);
// 		}
// 	}
// });
// console.log(a);

// arr 105 ------------------------
// let a = [1, 6, 5, 4, 7, 8, 9],
// 	k = 4,
// 	m = 5;
// a.reduce((acc, cur, idx) => {
// 	if (idx === k) {
// 		for (let i = 0; i < m; i++) {
// 			a.splice(idx + 1, 0, 0);
// 		}
// 	}
// });
// console.log(a);

// arr 106 ------------------------
// let a = [1, 6, 5, 4, 7, 8, 9],
// 	b = [];
// for (let i = 0; i < a.length; i += 2) {
// 	b.push(a[i]);
// }
// a = [...a, ...b];
// console.log(a);

// arr 107 ------------------------
// let a = [1, 6, 5, 4, 7, 8, 9],
// 	b = [];
// for (let i = 1; i < a.length; i += 2) {
// 	b.push(a[i]);
// }
// a = [...a, ...b, ...b];
// console.log(a);

// yuqoridagilar bn birxil
// arr 108 ------------------------
// arr 109 ------------------------
// arr 110 ------------------------
// arr 111 ------------------------

// Sort bilan bitadi hammasi
// arr 112 ------------------------
// arr 113 ------------------------
// arr 114 ------------------------
// arr 115 ------------------------

// arr 116 ------------------------
// Serialar tushunarsiz????
//
//
//
//
/*------------------------------------
               STRINGS
------------------------------------*/

// str 26
// let N = 7;
// let str = "Salom";
// let arr = str.split("");
// for (let i = N - arr.length; i < str.length - 1; i++) {
// 	arr.unshift(".");
// }
// console.log(arr);

// str 27
// let str = "",
// 	N1 = 3,
// 	N2 = 2,
// 	s1 = "salom",
// 	s2 = "alik";
// str = [...s1.slice(0, N1), ...s2.slice(N2)].join("");
// console.log(str);

// str 28
// let C = "a";
// str = "AssalomuAlekum";
// str = str.toLowerCase().split("");
// str.map((e, idx) => {
// 	if (e === C) {
// 		str.splice(idx, 0, C);
// 	}
// });
// console.log(str);

// str 29
// let s1 = "Salom",
// 	s2 = "Alik",
// 	c = "a";
// s1 = s1.toLowerCase().split("");
// // s2 = s2.toLowerCase().split("");
// s1.map((e, idx) => {
// 	if (e === c) {
// 		s1.splice(idx, 0, s2);
// 	}
// });
// console.log(s1);

// FIBONACCI-------------------
// let n = 10,
// 	arr = [0, 1];
// for (let i = 2; i < n; i++) {
// 	arr[i] = arr[i - 1] + arr[i - 2];
// }
// console.log(arr);

// TUB-------------------
// let n = 100;
// for (let i = 0; i < n; i++) {
// 	if (i >= 2) {
// 		for (let j = 2; j < i; j++) {
// 			if (i % j == 0) {
//             break
// 			}
// 			if (j == i - 1) {
//             console.log(i);
//             break
// 			}
// 		}
// 	}
// }

// POLINDROM-------------------
// function palendrom(e) {
// 	e = e.toLowerCase().replace(/\s/g, "");
// 	if (e === e.split("").reverse().join("")) {
// 		console.log("true");
// 	} else {
// 		console.log("false");
// 	}
// }
// palendrom("anna Bob Anna");

// function palendromNum(e) {
//    if (e === +e.toString().split("").reverse().join("")) {
//       console.log("true");
// 	} else {
//       console.log("false");
// 	}
// }
// palendromNum(1234321);

// let s1 = `[{()}]`;
// let s2 = `[)}]`;
// let s3 = `[{()]`;
// let s4 = `[{}]`;
// let s5 = `[{()}]`;
// let s6 = `[{(){}()}]`;

// let Open = ["(", "{", "["];
// let Close = [")", "}", "]"];

// function is(str) {
// 	str = str.split("");
// 	for (let i = 0; i < str.length; i++) {
// 		if (str[i] == "(" && str[i + 1] == ")") {
// 			str.splice(i, 2);
// 			i--;
// 		}
// 		if (str[i] == "{" && str[i + 1] == "}") {
// 			str.splice(i, 2);
// 			i--;
// 		}
// 		if (str[i] == "[" && str[i + 1] == "]") {
// 			str.splice(i, 2);
// 			i--;
// 		}
// 	}
// 	if (str.length > 0) {
// 		console.log("isNot");
//    } else {
//       console.log("itIz");
//    }
// }
// is(s5);
// let price1 = [0, 6, 4, 9, 1];
// let price2 = [1, 6, 7, 9, 12];

// function F(I) {

// }
// F(price1);
const User1 = {
	name: "Vasya",
	getName: () => {
		this.name;
	},
};
console.log(User1.getName);

const User = {
	name: "Vasya",
	getName() {
		return this.name;
	},
};
console.log(User.getName());
