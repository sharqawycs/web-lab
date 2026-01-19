// ========================================
// STEP 5: MODULARIZE WITH ROUTERS
// ========================================
// This file shows how to organize routes using express.Router()

const express = require('express');
const router = express.Router();

// Sample data (in a real app, this would be in a database)
let stories = [{ _id: 'story1', creator_name: 'sharq', content: 'Just caught a red dot! Best day ever! 🔴' }];

let comments = [
  { _id: 'comment1', creator_name: 'sharq', parent: 'story1', content: 'I love red dots too!' },
  { _id: 'comment2', creator_name: 'sharq', parent: 'story1', content: 'Teach me your ways!' },
  { _id: 'comment3', creator_name: 'Luna', parent: 'story2', content: 'Sunbeams are the best!' },
];
//
// ========================================
// STORY ROUTES
// ========================================

// GET all stories
router.get('/stories', (req, res) => {
  res.json(stories);
});

// POST a new story
router.post('/story', (req, res) => {
  const newStory = {
    _id: `story${Date.now()}`,
    creator_name: req.body.creator_name,
    content: req.body.content,
  };

  stories.push(newStory);
  res.json(newStory);
});

// ========================================
// COMMENT ROUTES
// ========================================

// GET comments for a specific story
router.get('/comments', (req, res) => {
  const parentId = req.query.parent;
  const filteredComments = comments.filter(comment => comment.parent === parentId);
  res.json(filteredComments);
});

// POST a new comment
router.post('/comment', (req, res) => {
  const newComment = {
    _id: `comment${Date.now()}`,
    creator_name: req.body.creator_name,
    parent: req.body.parent,
    content: req.body.content,
  };

  comments.push(newComment);
  res.json(newComment);
});

// ========================================
// USER ROUTES
// ========================================

// GET stories by a specific user
router.get('/user/:username/stories', (req, res) => {
  const username = req.params.username;
  const userStories = stories.filter(story => story.creator_name === username);
  res.json(userStories);
});

// Export the router so it can be used in server-modular.js
module.exports = router;
