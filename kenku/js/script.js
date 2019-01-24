var howlArray = new Array();

function displayData(soundArray) {
	for (var i = 0; i < soundArray.length; i++){
		console.log(soundArray[i]["name"]);
	}
}

function createHowlArray(soundArray) {
	//var howlArray = new Array();
	for (var i = 0; i < soundArray.length; i++) {
		var sound = new Howl({
			src: 		soundArray[i]["source"],
			autoplay: 	soundArray[i]["autoplay"],
			loop: 		soundArray[i]["loop"],
			volume: 	soundArray[i]["volume"]
		});

		howlArray.push({
			"id":   	 soundArray[i]["id"],
			"name": 	 soundArray[i]["name"],
			"link": 	 soundArray[i]["link"],
			"icon": 	 soundArray[i]["icon"],
			"icon-link": soundArray[i]["icon-link"], 
			"howl": 	 sound});
	}
	console.log(howlArray);

	return howlArray;
}

function createButtons(howlArray) {
	for (var i = 0; i < howlArray.length; i++) {
		$("#container").append(`<div class="play-button" id="${howlArray[i]['id']}"> ${howlArray[i]['name']} </div>`);

		$(`#${howlArray[i]['id']}`).click({howl: howlArray[i]}, clickFunction);
	}
}

function clickFunction(event) {
	console.log(event.data.howl);
	event.data.howl["howl"].play();
}

$(function() {
	var soundJSON =$.get("https://theoriginalmatt.github.io/kenku/json/sounds.json");
	soundJSON.done(function(soundArray){

		createHowlArray(soundArray);

		displayData(howlArray);

		createButtons(howlArray);
	});
	soundJSON.fail(function(){
		console.log("Fatal: JSON Failure!");
	});

});