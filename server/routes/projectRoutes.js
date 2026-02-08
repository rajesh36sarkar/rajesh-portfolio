import express from "express";
import Project from "../models/Project.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();


// ⭐ GET PROJECTS
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json(err);
  }
});


// ⭐ ADD PROJECT
router.post("/", protect, async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.json(project);
  } catch (err) {
    res.status(500).json(err);
  }
});


// ⭐ DELETE PROJECT
router.delete("/:id", protect, async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ msg: "Deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});


// ⭐ FINAL UPDATE ROUTE
router.put("/:id", protect, async (req, res) => {
  try {

    console.log("Incoming Update Data:", req.body);

    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ msg: "Project not found" });
    }

    project.title = req.body.title;
    project.description = req.body.description;
    project.techStack = req.body.techStack;

    if (req.body.image) {
      project.image = req.body.image;
    }

    const updatedProject = await project.save();

    res.json(updatedProject);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


export default router;
