const db = require("./model");

const checkProjectId = async (req, res, next) => {
  const uniqueID = await db.getByID(req.params.id);
  if (!uniqueID) {
    res
      .status(404)
      .json({ message: `The project with id ${req.params.id} does not exist on the database` });
  } else {
    req.uniqueID = uniqueID;
    next();
  }
};

const checkProjectPayload = (req, res, next) => {
  if (!req.body.project_name) {
    res.status(400).json({ message: "project name is a required field" });
  } else {
    next();
  }
};

module.exports = { checkProjectId, checkProjectPayload };
