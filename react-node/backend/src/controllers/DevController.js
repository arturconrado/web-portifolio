const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response){
        const Devs = await Dev.find();

        return response.json(Devs);
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;
        let Dev = await Dev.findOne({ github_username });

        if (!Dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            const { name = login, avatar_url, bio } = apiResponse.data;
    
            const techsArray = parseStringAsArray(techs);
    
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };
    
             Dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })

        }

       

        return response.json(Dev);
    }
};