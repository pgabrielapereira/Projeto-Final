const controller = require("../controller/psiController");
const express = require("express");

const router = express.Router();

router.get("/bairro", controller.findPsiByLocation);

router.get("/all", controller.findAllPsis);

router.get("/:id", controller.findPsiById);

router.post("/add", controller.addNewPsi);

router.patch("/:id", controller.updatePsi);

router.delete("/:id", controller.deletePsi);

module.exports = router;
