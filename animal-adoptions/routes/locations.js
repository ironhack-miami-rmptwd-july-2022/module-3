const express = require('express');
const router = express.Router();
const Location = require('../models/Location');
const Animal = require('../models/Animal');
const User = require('../models/User');


router.get('/',(req, res, next)=>{
    Location.find().populate('animals')
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err);
    })
})





router.post('/create', (req, res, next)=>{
    let {address, zip, state, city, apartmentNumber} = req.body;
    if(!apartmentNumber) apartmentNumber = null;

    Location.create({address,apartmentNumber,zip,state,city})
    .then((newLocation)=>{
        res.json(newLocation);
        })
    .catch((err)=>{
        res.json(err);
    })
});



router.post('/:locationID/addAnimals', (req, res, next)=>{

    let ids = req.body.animalID;

        Location.findByIdAndUpdate(req.params.locationID, 
            // {$push: {animals: ids}})
            // we dont need the push anymore because we are pre-filling the 
            // checkboxes so all the animals we already have will get sent though again
            // on the next subsequent edit
            {animals: ids})
            .then((result)=>{
                res.json(result)
            })
            .catch((err)=>{
                res.json(err)
            })
})


router.get('/:locationID', (req, res, next)=>{
    Location.findById(req.params.locationID).populate("animals")
    .then((theLocation)=>{
        res.json(theLocation)
    })
    .catch((err)=>{
        res.json(err);
    })
})




module.exports = router;