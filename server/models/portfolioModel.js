const mongoose = require('mongoose');

const introSchema = new mongoose.Schema({
    welcomeText: {
        type: String, required: true
    },
    firstName: {
        type: String, required: true
    },
    lastName: {
        type: String, required: true
    },
    caption: {
        type: String, required: true
    },
    description: {
        type: String, required: true
    }
});

const aboutSchema = new mongoose.Schema({
    lottieURL: {
        type: String, required: true
    },
    description1: {
        type: String, required: true
    },
    description2: {
        type: String, required: true
    },
    skills: {
        type: Array, required: true
    },
    skillsImage: {
        type: String, enum: ['image', 'gif'], required: true 
    }
});

const experienceSchema = new mongoose.Schema({
    companyname: {
        type: String, required: true
    },
    companyimage: {
        type: String, required: true
    },
    period: {
        type: String, required: true
    },
    role: {
        type: String, required: true
    }
});

const educationSchema = new mongoose.Schema({
    institution: {
        type: String, required: true
    },
    degree: {
        type: String, required: true
    },
    location: {
        type: String, required: true
    }
});

const projectsSchema = new mongoose.Schema({
    projecttitle: {
        type: String, required: true
    },
    projectdescription: {
        type: String, required: true
    },
    projectimage: {
        type: String, required: true
    },
    projecturl: {
        type: String, required: true
    },
    technologies: {
        type: Array, required: true
    }
});

const contactSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    email: {
        type: String, required: true
    },
    mobile: {
        type: Number, required: true
    },
    location: {
        type: String, required: true
    }
});

module.exports = {
                     //(name in db, name above in portfolioModel.js )
    Intro: mongoose.model("intros", introSchema),
    About: mongoose.model("abouts", aboutSchema),
    Projects: mongoose.model("projects", projectsSchema),
    Contact: mongoose.model("contacts", contactSchema),
    Experience: mongoose.model("experience", experienceSchema),
    Education: mongoose.model("education", educationSchema)
};
