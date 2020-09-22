const router = require('express').Router();
const controller = require("./board");

router.get("/getlist", controller.getlist);
router.post("/create", controller.create);
router.delete("/delete/:id", controller.delete);
router.get("/read/:id", controller.read);
router.put("/update/:id", controller.update);

module.exports = router;