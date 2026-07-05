const { getMovieById } = require('../services/movie');
const { getAllCast } = require('../services/cast');


module.exports = {
    attachGet: async (req, res) => {
        const id = req.params.id;
        const movie = await getMovieById(id);

        if(!movie){
            res.render('404');
            return;
        }

        const allCast = await getAllCast();

        res.render('cast-attach', { movie, allCast });

    },
    attachPost: async (req, res) => {

    },
};