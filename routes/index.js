const express = require('express');
const MainController = require('../controllers/MainController');

const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get homepage
 *     responses:
 *       200:
 *         description: Homepage content retrieved successfully
 */
router.get('/', MainController.home);

/**
 * @swagger
 * /page/{page}:
 *   get:
 *     summary: Get homepage with pagination
 *     parameters:
 *       - name: page
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Paginated homepage content retrieved successfully
 */
router.get('/page/:page', MainController.home);

/**
 * @swagger
 * /blog/:
 *   get:
 *     summary: Get all blogs
 *     responses:
 *       200:
 *         description: List of blogs retrieved successfully
 */
router.get('/blog/', MainController.blog);

/**
 * @swagger
 * /blog/read/{id}:
 *   get:
 *     summary: Get blog details by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Blog details retrieved successfully
 */
router.get('/blog/read/:id', MainController.readblog);

/**
 * @swagger
 * /blog/{page}:
 *   get:
 *     summary: Get blogs with pagination
 *     parameters:
 *       - name: page
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Paginated blog list retrieved successfully
 */
router.get('/blog/:page', MainController.blog);

/**
 * @swagger
 * /anime/{id}:
 *   get:
 *     summary: Get anime details by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Anime details retrieved successfully
 */
router.get('/anime/:id', MainController.anime);

/**
 * @swagger
 * /anime/eps/{link}:
 *   get:
 *     summary: Get anime episode by link
 *     parameters:
 *       - name: link
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Anime episode details retrieved successfully
 */
router.get('/anime/eps/:link', MainController.readanime);

/**
 * @swagger
 * /search/{title}:
 *   get:
 *     summary: Search anime by title
 *     parameters:
 *       - name: title
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Search results retrieved successfully
 */
router.get('/search/:title', MainController.search);

/**
 * @swagger
 * /search/{title}/{page}:
 *   get:
 *     summary: Search anime by title with pagination
 *     parameters:
 *       - name: title
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *       - name: page
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Paginated search results retrieved successfully
 */
router.get('/search/:title/:page', MainController.searchByPage);

/**
 * @swagger
 * /season/:
 *   get:
 *     summary: Get current season anime
 *     responses:
 *       200:
 *         description: Current season anime retrieved successfully
 */
router.get('/season/', MainController.season);

/**
 * @swagger
 * /date-release/:
 *   get:
 *     summary: Get release dates
 *     responses:
 *       200:
 *         description: Anime release dates retrieved successfully
 */
router.get('/date-release/', MainController.date);

/**
 * @swagger
 * /list-anime/:
 *   get:
 *     summary: Get list of all anime
 *     responses:
 *       200:
 *         description: List of anime retrieved successfully
 */
router.get('/list-anime/', MainController.listWithoutPage);

/**
 * @swagger
 * /list-anime/{page}:
 *   get:
 *     summary: Get list of anime with pagination
 *     parameters:
 *       - name: page
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Paginated list of anime retrieved successfully
 */
router.get('/list-anime/:page', MainController.listWithPage);

/**
 * @swagger
 * /genre/{genre}:
 *   get:
 *     summary: Search anime by genre
 *     parameters:
 *       - name: genre
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Anime by genre retrieved successfully
 */
router.get('/genre/:genre', MainController.searchByGenre);

/**
 * @swagger
 * /tag/{tag}:
 *   get:
 *     summary: Search anime by tag
 *     parameters:
 *       - name: tag
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Anime by tag retrieved successfully
 */
router.get('/tag/:tag', MainController.tag);

module.exports = router;
