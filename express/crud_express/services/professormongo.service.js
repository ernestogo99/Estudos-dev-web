const professormodel = require("../models/professor.modelmongo");

class Professorservicemongo {
  static list(request, response) {
    professormodel
      .find()
      .then((professores) => {
        console.log(professores);
        response.status(200).json(professores);
      })
      .catch((error) => {
        console.error("Error fetching professors:", error);
        response.status(500).json({ error: "Internal Server Error" });
      });
  }

  static register(request, response) {
    professormodel.create(request.body).then((professor) => {
      response.status(201).json(professor);
    });
  }

  static retrieve(request, response) {
    professormodel.findById(request.params.id).then((professor) => {
      response.status(201).json(professor);
    });
  }

  static update(request, response) {
    professormodel
      .findByIdAndUpdate(request.params.id, request.body, { new: true })
      .then((professor) => {
        response.status(201).json(professor);
      });
  }

  static delete(request, response) {
    professormodel
      .findByIdAndDelete(request.params.id)
      .then((professor) => {
        if (professor) {
          response
            .status(200)
            .json({ message: "Professor deleted successfully" });
        } else {
          response.status(404).json({ error: "Professor not found" });
        }
      })
      .catch((error) => {
        console.error("Error deleting professor:", error);
        response.status(500).json({ error: "Internal Server Error" });
      });
  }
}

module.exports = Professorservicemongo;
