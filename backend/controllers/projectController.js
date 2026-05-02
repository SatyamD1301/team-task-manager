const Project = require("../models/Project");

exports.createProject = async (req, res) => {
  try {
    const { title, description, deadline } = req.body;

    const project = await Project.create({
      title,
      description,
      deadline
    });

    res.status(201).json({
      message: "Project Created Successfully",
      project
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};