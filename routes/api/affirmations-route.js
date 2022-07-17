const router = require('express').Router();
const { Affirmations, Mood } = require('../../models');

//get all affirmations and associated moods
router.get('/', (req,res) => {
    Affirmations.findAll({
        attributes: ['id', 'affirmation_phrase'], 
        include: [
            {
                model: Mood,
                attributes: ['id', 'mood_name'],
            }
        ]
    })
    .then(affirmationData => res.json(affirmationData))
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
    Affirmations.findOne({
        // find affirmation based on mood
    })
    .then(affirmationData => {
      if (!affirmationData) {
        res.status(404).json({ message: 'No affirmation found with this mood' });
        return;
      }
      res.json(categoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });
