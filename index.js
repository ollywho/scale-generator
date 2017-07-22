var keys = ['C','G','D','A','E','B','F#','Db/c#','Ab/g#','Eb','Bb','F'];
var scales = ['Melodic Minor','Harmonic Minor','Harmonic Major','Melodic Minor #5','Ionian','Dorian','Phrygian',
	'Lydian','Lydian b7','Mixolydian','Aeolian','Locrian'];

$(document).ready(function(){
	$('#button').click(function(){
		$('#result').text(getRandomScale());
	});
});

function getRandomScale() {
	var key = keys[Math.floor(Math.random() * keys.length)];
	var scale = scales[Math.floor(Math.random() * scales.length)];
	return key + ' ' + scale;
}