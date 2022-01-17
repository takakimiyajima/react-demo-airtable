import { studentsTable } from '@/services/airtable'

export type Student = {
  id: string
  name: string
}

export class StudentRepository {
  /**
   * Fetch a student
   * @param name Student's name
   * @returns a student record ID filtered name
   */
  static fetchStudent = async(
    name: string
  ): Promise<string | null | undefined> => {
    console.log('fetchStudent')
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
  static fetchAllStudents = async(): Promise<Array<Student> | undefined> => {
    try {
      const students = await studentsTable.select().firstPage()

      return students.map((student) => {
        return {
          id: student.id as string,
          name: student.fields.Name as string,
        }
      })
    } catch (error) {
      console.error(error)
    }
  }
}
