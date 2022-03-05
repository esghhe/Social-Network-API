// Require express router
const router = require('express').Router();

// Set requirementgs (from thoughts-controller)
const {
    getAllThoughts, 
    getThoughtsById, 
    createThoughts, 
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughts-controllers');

// -- directs to; /api/thoughts <GET>
router.route('/').get(getAllThoughts);

// --Directs to: /api/thoughts/:id <GET, PUT, Delete>
router.route('/').get(getThoughtsById).put(updateThoughts).delete(deleteThoughts);

// -- Directs to: /api/thoughts/:userId <POST>
router.route('/:userId').post(createThoughts);

// -- Directs to: /api/thoughts/:thoughtId/reactions <POST>
router.route('/:thoughtId/reactions').post(addReaction);

// -- Directs to: /api/thoughts/:thoughtId/reactionId <DELETE>
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// Export module router
module.exports = router;