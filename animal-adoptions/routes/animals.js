const express = require("express");
const router = express.Router();
const Animal = require("../models/Animal");
const User = require("../models/User");
const Location = require("../models/Location");
const uploadMiddleware = require("../config/cloudinarystuff");

// *** A Form with a post method will return the info from the form in the req.body
// *** A Form with a get method will return the info from the form in the req.query

router.get("/", (req, res, next) => {
	Animal.find()
		.then((animals) => {
			res.json(animals);
		})
		.catch((err) => {
			res.json(err);
		});
});

// Create Route
router.post("/create", (req, res, next) => {
	let theAnimalSex = req.body.sex[0].toUpperCase() + req.body.sex.substr(1);
	const animalToCreate = {
		name: req.body.name,
		species: req.body.species,
		color: req.body.color,
		sex: theAnimalSex,
		aggressive: !!req.body.aggressive,
		vaccinated: !!req.body.vaccinated,
		available: !!req.body.available,
	};

	// console.log({body: req.body, animalToCreate});

	Animal.create(animalToCreate)
		.then((newlyCreatedAnimal) => {
			res.json(newlyCreatedAnimal);
		})
		.catch((err) => {
			res.json(err);
		});
});

// *** The only way to get a value from req.params is if you personally set a variable using the :variableName method in the endpoint when creating your route. You then call the value for that parameter by using req.params.variableName
router.get("/:animalId", (req, res, next) => {
	Animal.findById(req.params.animalId)
		.then((animalFromDb) => {
			res.json(animalFromDb);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.post("/update/:id", (req, res, next) => {
	Animal.findByIdAndUpdate(req.params.id, {
		name: req.body.name,
		species: req.body.species,
		color: req.body.color,
		sex: req.body.sex,
		aggressive: !!req.body.aggressive,
		vaccinated: !!req.body.vaccinated,
		available: !!req.body.available,
	})
		.then((response) => {
			res.json(response);
		})
		.catch((err) => {
			res.json(err);
		});
});

module.exports = router;

// // Read
// router.get('/', (req, res) => {
//     Animal.find().then(res => {
//         res.json({success: true, res});
//     }).catch(err => {
//         res.json({success: false, res: err});
//     })
// });

// // Read
// router.get('/:animal_id', (req, res) => {
//     Animal.findById(req.params.animal_id).then(res => {
//         res.json({success: true, res});
//     }).catch(err => {
//         res.json({success: false, res: err});
//     })
// });

// // Create
// router.post('/', (req, res) => {
//     Animal.create(req.body).then(res => {
//         res.json({success: true, res});
//     }).catch(err => {
//         res.json({success: false, res: err});
//     })
// });

// // Update
// router.put('/', (req, res) => {
//     Animal.findByIdAndUpdate(req.body.animal_id, req.body, {new: true}).then(res => {
//         res.json({success: true, res});
//     }).catch(err => {
//         res.json({success: false, res: err});
//     })
// });

// // Delete
// router.delete('/', (req, res) => {
//     Animal.findByIdAndDelete(req.body.animal_id).then(() => {
//         res.json({success: true, res: `Animal ${req.body.animal_id} has been deleted!`});
//     }).catch(err => {
//         res.json({success: false, res: err});
//     })
// });
