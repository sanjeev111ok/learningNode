const mongoose = require("mongoose")
mongoose
  .connect("mongodb://localhost:27017/playground")
  .then(() => console.log("connected to mongoDB"))
  .catch((err) => console.error("failed to connect to mongoDB", err))

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
})
async function createCourse() {
  const Course = mongoose.model("Course", courseSchema)
  const course = new Course({
    name: "Node JS course",
    auther: "Sanjeev",
    tags: ["node", "backend"],
    isPublished: true,
  })
  const result = await course.save()
  console.log(result)
}
