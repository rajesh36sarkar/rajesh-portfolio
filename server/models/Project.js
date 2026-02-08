import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    techStack: String,
    liveLink: String,
    githubLink: String,

    image: {
      type: String,
      default: "",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Project", projectSchema);
