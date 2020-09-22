const router = require('express').Router();
const controller = require("./board");

//전체 게시물 불러오기
router.get("/", controller.main);
router.post("/create", controller.create);
router.delete("/delete/:id", controller.delete);
router.get("/read/:id", controller.read);
router.put("/update/:id", controller.update);


module.exports = router;