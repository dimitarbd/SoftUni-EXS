const { render } = require('lit-html');
const { createMovie, getMovieById } = require('../services/movie');

module.exports = {
    createGet: (req, res) => {
        res.render('create');
    },
    createPost: async (req, res) => {
        const authorId = req.user._id;

        const errors = {
            title: !req.body.title,
            genre: !req.body.genre,
            director: !req.body.director,
            year: !req.body.year,
            imageURL: !req.body.imageURL,
            rating: !req.body.rating,
            description: !req.body.description
        };

        if (Object.values(errors).includes(true)) {
            res.render('create', { movie: req.body, errors });
            return;
        }

        const result = await createMovie(req.body, authorId);

        res.redirect('/details/' + result._id);
    },
    editGet: async (req, res) => {
        const movieId = req.params.id;

        try {
            const movie = await getMovieById(movieId);
            if (!movie) {
                throw new Error('Movie not found');
            }
        } catch (err) {
            res.render('404');
            return;
        }



        const isAuthor = req.user._id == movie.author.toString();

        if (!isAuthor) {
            res.redirect('/login');
            return;
        }

        res.render('edit', { movie });
    },
    editPost: (req, res) => {
        res.redirect('/');
    }
};