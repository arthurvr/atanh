import test from 'ava';
import floatEqual from 'float-equal';
import atanh from './';

test('If x is NaN, the result is NaN', t => {
	t.true(isNaN(atanh(NaN)));
});

test('If x is less than −1, the result is NaN', t => {
	t.true(isNaN(atanh(-2)));
});

test('If x is greater than 1, the result is NaN', t => {
	t.true(isNaN(atanh(2)));
});

test('If x is −1, the result is -Infinity', t => {
	t.is(atanh(-1), -Infinity);
});

test('If x is 1, the result is Infinity', t => {
	t.is(atanh(1), Infinity);
});

test('If x is 0, the result is 0', t => {
	t.is(atanh(0), 0);
});

test('Returns an implementation-dependent approximation to the inverse hyperbolic tangent of x', t => {
	t.true(floatEqual(atanh(0.1), 0.10033534773107562));
	t.true(floatEqual(atanh(0.2), 0.2027325540540821));
	t.true(floatEqual(atanh(0.3), 0.3095196042031118));
	t.true(floatEqual(atanh(0.4), 0.42364893019360184));
	t.true(floatEqual(atanh(0.5), 0.5493061443340549));
	t.true(floatEqual(atanh(0.6), 0.6931471805599453));
	t.true(floatEqual(atanh(0.7), 0.8673005276940532));
	t.true(floatEqual(atanh(0.8), 1.0986122886681098));
	t.true(floatEqual(atanh(0.9), 1.4722194895832204));
});

test('Return 0 when passing null', t => {
	t.is(atanh(null), 0);
});

test('Return NaN when passing nonsense input', t => {
	['foo', function () {}, undefined].forEach(nonsense => {
		t.true(isNaN(atanh(nonsense)));
	});
});
