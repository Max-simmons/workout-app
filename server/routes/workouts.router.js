const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
  const bodyPartId = req.params.id;
  console.log('getting our workouts');

  const sqlText = `
SELECT
workouts_body_parts.id AS workout_body_part_id,
workouts.workout,
workouts.description,
body_parts.body_part,
body_parts.id AS body_part_id
FROM
  workouts_body_parts 
JOIN
  workouts ON workouts_body_parts.workout_id = workouts.id
JOIN
  body_parts ON workouts_body_parts.body_part_id = body_parts.id
WHERE
body_part_id = $1 
`
  const sqlValues = [bodyPartId];

  pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      const workouts = dbRes.rows;
      
      console.log(workouts);
      res.send(workouts);
    })
    .catch((dbErr) => {
      console.log('/api/workouts/:id error:', dbErr);
      res.sendStatus(500);
    })
})

module.exports = router;