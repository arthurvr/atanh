'use strict';
var test = require('ava');
var requireUncached = require('require-uncached');
var floatEqual = require('float-equal');

Math.atanh = undefined;
var atanh = require('./');

test('Uses the build-in function when possible', function (t) {
	Math.atanh = function () {
		return 'foo';
	};

	t.assert(requireUncached('./')() === 'foo');
	Math.atanh = undefined;
});

test('If x is NaN, the result is NaN', function (t) {
	t.assert(isNaN(atanh(NaN)));
});

test('If x is less than −1, the result is NaN', function (t) {
	t.assert(isNaN(atanh(-2)));
});

test('If x is greater than 1, the result is NaN', function (t) {
	t.assert(isNaN(atanh(2)));
});

test('If x is −1, the result is -Infinity', function (t) {
	t.assert(atanh(-1) === -Infinity);
});

test('If x is 1, the result is Infinity', function (t) {
	t.assert(atanh(1) === Infinity);
});

test('If x is 0, the result is 0', function (t) {
	t.assert(atanh(0) === 0);
});

test('Returns an implementation-dependent approximation to the inverse hyperbolic tangent of x', function (t) {
	t.assert(floatEqual(atanh(0.1), 0.10033534773107562));
	t.assert(floatEqual(atanh(0.2), 0.2027325540540821));
	t.assert(floatEqual(atanh(0.3), 0.3095196042031118));
	t.assert(floatEqual(atanh(0.4), 0.42364893019360184));
	t.assert(floatEqual(atanh(0.5), 0.5493061443340549));
	t.assert(floatEqual(atanh(0.6), 0.6931471805599453));
	t.assert(floatEqual(atanh(0.7), 0.8673005276940532));
	t.assert(floatEqual(atanh(0.8), 1.0986122886681098));
	t.assert(floatEqual(atanh(0.9), 1.4722194895832204));
});

test('Return 0 when passing null', function (t) {
	t.assert(atanh(null) === 0);
});

test('Return NaN when passing nonsense input', function (t) {
	['foo', function () {}, undefined].forEach(function (nonsense) {
		t.assert(isNaN(atanh(nonsense)));
	});
});
