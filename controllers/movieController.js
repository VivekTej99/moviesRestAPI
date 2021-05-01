const express = require('express');

const movieRouter = express.Router();

const movie = require('../models/movieModal');

// Get All Movies
movieRouter.get('/',async (req,res)=>{
	const movies = await movie.find();
	res.send(movies);	
})

/* Create a new Movie */
movieRouter.post('/', async (req,res)=> {
	if(req.body.title) 	{
		try{
			const movieCreated =  new movie(req.body);
			const createdRes = await  movieCreated.save();
			res.status(200).json(createdRes);
		}catch(err) {
			res.status(500).send({ message: err.message});
		}
	}else {
		res.status(500).send({message: "Please give the details to create a movie"});
	}
})

/* Get Movie By Id */
movieRouter.get('/:movieId', async (req,res)=> {
	const movieId = req.params.movieId;
	try {
		const movieFound = await movie.findById(movieId);
		res.status(200).json(movieFound);
	} catch (error) {
		res.status(500).send({message:error.message});
	}	
})

/* Update the movie based on ID */

movieRouter.patch('/:movieId', async (req,res)=> {
	const movieId = req.params.movieId;
	try {
		const updatedMovie = await movie.updateOne({
			_id: movieId
		}, { $set: {
			title: req.body.title
		}});
		res.status(200).json(updatedMovie);
	} catch (error) {
		res.status(500).send({message:error.message});
	}	
})

/* Delete a movie based on ID */

movieRouter.delete('/:movieId',async (req,res)=> {
	const movieId = req.params.movieId;
	try {
		const deletedMovie = await movie.remove({
			_id: movieId
		})
		res.status(200).json(deletedMovie);
	} catch (error) {
		res.status(500).send({message:error.message});
	}	
})

module.exports = movieRouter;