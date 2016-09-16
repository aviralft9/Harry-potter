var moviesJSON = require('../movie.json');

exports.home = function(req, res){

	var movies = moviesJSON.movies;

	res.render('home', {
		title : 'Harry Potter movies',
		movies : movies
	});
};


exports.part = function(req, res){
	var number = req.params.number;
	var movies = moviesJSON.movies;

	if(number >= 1 && number <= 7){
		var movie = movies[number - 1];
		var title = movie.title;
		var characters = movie.main_characters;
	
	res.render('part', {
		movies: movies,
		movie: movie,
		title: title,
		characters: characters
	});

	} else {
		res.render('notFound',{
			movies: movies,
			title: 'Oops, page not found'
		});
	}


};

exports.notFound = function(req, res){
	var movies = moviesJSON.movies;
	res.render('notFound',{
		title: 'Oops, the page doesnt exist',
		movies: movies
	});
};