'use strict';
var test = require('ava');
var atanh = require('./');

test('If x is NaN, the result is NaN', function (t) {
	t.assert(isNaN(atanh(NaN)));
});

test('If x is less than −1, the result is NaN', function (t) {
	t.assert(isNaN(atanh(-2)));
});

test('If x is greater than 1, the result is NaN', function (t) {
	t.assert(isNaN(atanh(2)));
});

test('If x is −1, the result is -Infinity',  function (t) {
	t.assert(atanh(-1) === -Infinity);
});

test('If x is 1, the result is Infinity',  function (t) {
	t.assert(atanh(1) === Infinity);
});

test('If x is 0, the result is 0', function (t) {
	t.assert(atanh(0) === 0);
});

test('Returns an implementation-dependent approximation to the inverse hyperbolic tangent of x', function (t) {
	t.assert(atanh(0.1).toFixed(5) === '0.10034');
	t.assert(atanh(0.2).toFixed(5) === '0.20273');
	t.assert(atanh(0.3).toFixed(5) === '0.30952');
	t.assert(atanh(0.4).toFixed(5) === '0.42365');
	t.assert(atanh(0.5).toFixed(5) === '0.54931');
	t.assert(atanh(0.6).toFixed(5) === '0.69315');
	t.assert(atanh(0.7).toFixed(5) === '0.86730');
	t.assert(atanh(0.8).toFixed(5) === '1.09861');
	t.assert(atanh(0.9).toFixed(5) === '1.47222');
});

test('Return 0 when passing null', function (t) {
	t.assert(atanh(null) === 0);
});

test('Return NaN when passing nonsense input', function (t) {
	['foo', function () {}, undefined].forEach(function (nonsense) {
		t.assert(isNaN(atanh(nonsense)));
	});
});
