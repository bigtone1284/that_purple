window.onload = function() {
	renderPurpleSpans();
};

var randomPurple = function () {
	var h = Math.round(Math.random() * (310 - 290) + 290);
	var s = Math.round(Math.random() * (80 - 20)) + 20;
	var l = Math.round(Math.random() * (65 - 20)) + 20;
	return ['hsl','(', h,', ', s, '%, ', l, '%',")"].join('');
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
	var purple = randomPurple();
	span.setAttribute('hsl', purple);
	span.style.background = purple;
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
	modal.style.background = this.style.background;
	modal.classList.add('visible');
	hex.innerHTML = hexValues(this.style.background);
	hsl.innerHTML = this.getAttribute('hsl');
	rgb.innerHTML = this.style.background;
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

var hexValues = function(rgbValues) {
	var rgb = rgbValues.slice(4, rgbValues.length - 1).split(', ');
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	return ['hex #', numToHex(r), numToHex(g), numToHex(b)].join('');
}

var numToHex = function(num) {
	var hexCode = parseInt(num).toString(16);
	if (hexCode.length < 2) { hexCode = "0" + hexCode; }
	return hexCode;
}
