import { studentsTable } from '@/services/airtable'

export class StudentRepository {
  /**
   * Fetch one student
   * @param name Student's name
   * @returns all students data
   */
  static fetchStudent = async(name: string) => {
    try {
      const student = await studentsTable.select({
        filterByFormula: `{Name} = "${name}"`,
        maxRecords: 1
      }).firstPage()

      const studentId = student[0] ? student[0].id : null

      return studentId
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * Fetch all students
   * @returns all students data
   */
  static fetchAllStudents = async() => {
    try {
      const students = await studentsTable.select().firstPage()

      return students.map((student) => {
        return {
          id: student.id,
          name: student.fields.Name,
        }
      })
    } catch (error) {
      console.error(error)
    }
  }
}