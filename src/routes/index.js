const router = require('express').Router();
const controller = require("./board");

router.get("/", controller.getlist);
router.post("/create", controller.create);
router.delete("/delete/:id", controller.delete);
router.get("/read/:id", controller.read);

router.put("/update/:id", controller.update);
router.get("/update/:id", controller.update_page);

module.exports = router;