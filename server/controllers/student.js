import Student from "../models/student.js"

export const getStudents = async (req, res) => {
  try {
    const allStudents = await Student.find()
    res.status(200).json(allStudents)
  } catch (error) {
    res.status(404).json({message: `Something went wrong! Error.: ${error}`})
  }
}

export const createStudent = async (req, res) => {
  const student = req.body
  const newStudent = new Student(student)

  try {
    await newStudent.save()
    res.status(201).json(newStudent)
  } catch (error) {
    res.status(409).json({message: `Something went wrong! Error.: ${error}`})
  }
}

export const deleteStudent = async (req, res) => {
  const id = req.params.id
  
  try {
    await Student.findByIdAndRemove(id).exec()
    res.status(200).json({ message: 'Student was successfully deleted.'})
  } catch (error) {
    res.status(400).json({message: `Something went wrong. Error.: ${error}`})
  }
}