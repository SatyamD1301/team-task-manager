const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  try {
    const {
      title,
      description,
      assignedTo,
      dueDate,
      status
    } = req.body;

    const task = await Task.create({
      title,
      description,
      assignedTo,
      dueDate,
      status
    });

    res.status(201).json({
      message: "Task Created Successfully",
      task
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};