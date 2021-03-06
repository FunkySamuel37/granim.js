'use strict';

module.exports = function(state) {
	var isPausedBecauseNotInView = state === 'isPausedBecauseNotInView';
	if (!isPausedBecauseNotInView) this.isPaused = false;
	this.animation = requestAnimationFrame(this.animateColors.bind(this));
};
