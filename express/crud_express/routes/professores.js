var express = require("express");
var router = express.Router();
var professorService = require("../services/professor.services");
var professorservicemongo = require("../services/professormongo.service");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
/*
router.get("/listar", (req, res, next) => {
  res.json(professorService.list());
});
*/

/*
router.post("/register", (req, res, next) => {
  const professor = professorService.register(req.body);
  res.json(professor);
});
*/

/*
router.get("/retrieve/:id", (req, res, next) => {
  const out = professorService.retrieve(req.params.id);
  return res.json(out);
});
*/

router.get("/listar", (request, response, next) => {
  professorservicemongo.list(request, response);
});

router.post("/register", (request, response, next) => {
  professorservicemongo.register(request, response);
});

router.get("/retrieve/:id", (request, response, next) => {
  professorservicemongo.retrieve(request, response);
});

router.put("/update/:id", (req, res, next) => {
  professorservicemongo.update(req, res);
});

router.delete("/delete/:id", (req, res, next) => {
  professorservicemongo.delete(req, res);
});

/*
router.put("/update/:id", (req, res, next) => {
  const professor = professorService.update(req.params.id, req.body);
  res.json(professor);
});

router.delete("/delete/:id", (req, res, next) => {
  const ok = professorService.delete(req.params.id);
  if (ok) return res.json({ sucess: true });
  else return res.json({ sucess: false });
});
*/

module.exports = router;
