const router = require("express").Router();
const apptsController = require("../../controllers/apptsController");

// Matches with "/api/books"
router.route("/")
  .get(apptsController.findAll)
  .post(apptsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(apptsController.findById)
  .post(apptsController.findById)
  .put(apptsController.update)
  .delete(apptsController.remove);

module.exports = router;
