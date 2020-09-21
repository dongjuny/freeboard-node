const router = require('express').Router();
const controller = require("./controller");


router.get("/", controller.main);

router.post("/create", controller.create);
router.delete("/delete", controller.delete);
router.get("/read", controller.read);
router.put("/update", controller.update);
router.get("/getlist", controller.getlist);


module.exports = router;