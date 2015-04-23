'use strict';
module.exports = Math.atanh || function (x) {
	return Math.log((1+x) / (1-x)) / 2;
};
