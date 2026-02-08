import Project from "../models/Project.js";

/* GET ALL PROJECTS */
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();

    res.json(projects);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ADD PROJECT */
export const addProject = async (req, res) => {
  try {
    const project = new Project(req.body);

    await project.save();

    res.json({
      message: "Project Added Successfully"
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
