import _ from 'lodash';
import numRef from './ref.json';
import VueRouter from 'vue-router'
import $ from 'jquery'

export function numToWord(num) {
  return _.reduce(numRef, (accum, ref) => {
    return ref.num === num ? ref.word : accum;
  }, '');
};

export function wordToNum(word) {
  return _.reduce(numRef, (accum, ref) => {
    return ref.word === word && word.toLowerCase() ? ref.num : accum;
  }, -1);
};

export function createDom() {
	let div = document.createElement('div')
	div.className = 'test'
	$('.test').innerHTML = 'fvbhnjmk'
}