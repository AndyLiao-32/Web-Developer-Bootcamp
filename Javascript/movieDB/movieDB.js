var movieDB = [
	{hasWatched: true, movie:"Harry Potter", star: 3.5},
	{hasWatched: false, movie:"Bad Boys for Life", star: 5},
	{hasWatched: true, movie:"Iron Man", star: 5},
	{hasWatched: false, movie:"Birds of Prey", star: 4}
]

/*
var i = 0
while (i < movieDB.length){
	if (movieDB[i].hasWatched){
		console.log('You have watched "'+movieDB[i].movie+'" - '+movieDB[i].star+" stars");
	} else{
		console.log('You have not watched "'+movieDB[i].movie+'" - '+movieDB[i].star+" stars");
	}
	i++
}
*/

//Need to practice more about how to use forEach function

function buildString(film){
	var result = "You have ";
	if (movieDB.hasWatched){
		result += "watched ";
	} else {
		result += "not seen ";
	}

	result += "\""+film.movie+"\" - "+film.star+" stars";
	return result;
}

movieDB.forEach(function(film){
	console.log(buildString(film));
})