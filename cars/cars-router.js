const express = require( 'express' );

const db = require( "../data/connection.js" );

const router = express.Router();


// router.get( "/", (req, res) => {
//     db( "cars" )
//         .then(cars => {
//             res.status(200).json({data: cars});
//         })
//         .catch(error => {
//             handleError(error, res);
//         });
// });

router.get( "/", async (req, res) => {
    try {
        res.status(200).json( await db( "cars" ) );
    } catch(error) {
            handleError(error, res);
    };
});

router.post( "/", (req, res) => {
    const carData = req.body;
    db( "cars" )
        .insert(carData, "id")
            .then(ids => {
                db("cars")
                    .where({ id: ids[0] })
                    .first()
                    .then(newCarEntry => {
                        res.status(201).json({ data: newCarEntry });
                    });
            })
            .catch(error => {
                handleError(error, res);
            });
});

function handleError(error, res) {
    console.log("error", error);
    res.status(500).json({ message: error.message });
}

module.exports = router; 
