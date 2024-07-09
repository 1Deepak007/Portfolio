// apis to fetch data from mongodb

const router = require('express').Router();
const { Intro, About, Projects, Contact , Experience, Education} = require('../models/portfolioModel');

router.get('/get-portfolio-data', async (req, res) => {
    try {
        const intros = await Intro.find();
        const abouts = await About.find();
        const projects = await Projects.find();
        const contacts = await Contact.find();
        const experiences = await Experience.find();
        const educations = await Education.find();

        console.log('Intros:', intros);
        console.log('Abouts:', abouts);
        console.log('Projects:', projects);
        console.log('Contacts:', contacts);
        console.log('Experiences:', experiences);
        console.log('Educations:', educations);

        res.status(200).send({
            intros: intros[0],
            abouts: abouts[0],
            projects: projects[0],
            contacts: contacts[0],
            experiences: experiences[0],
            educations: educations[0]
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
