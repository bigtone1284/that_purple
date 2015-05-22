window.onload = function() {
	renderPurpleSpans();
};

var randomPurple = function () {
	var h = Math.random() * (310 - 290) + 290;
	var s = Math.round(Math.random() * (80 - 20)) + 20;
	var l = Math.round(Math.random() * (65 - 20)) + 20;
	return ['hsl','(', h,',', s, '%,', l, '%'].join('');
};

var calcNumSquares = function() {
  var width = container.getBoundingClientRect().width;
  var height = container.getBoundingClientRect().height;
  var columns = Math.floor(width/50);
  var rows = Math.floor(height/50);
  return rows * columns;
};

var purpleSpan = function() {
	var span = document.createElement('span');
	span.classList.add('purple');
	span.style.background = randomPurple();
	span.addEventListener('click', bigPurpleInfo);
	container.appendChild(span);
};

var renderPurpleSpans = function() {
	var numberOfSpans = calcNumSquares();
	for (var i = numberOfSpans; i > 0; i--) {
		purpleSpan();
	}
};

var bigPurpleInfo = function() {
	modal.style.background = this.style.background
	modal.classList.add('visible');
	var close = modal.querySelector('div');
	close.addEventListener('click', closeModal);
	addFilter();
};

var closeModal = function() {
	modal.classList.remove('visible');
	closeFilter();
};

var addFilter = function() {
	filter.classList.add('haze');
};

var closeFilter = function() {
	filter.classList.remove('haze');
};
