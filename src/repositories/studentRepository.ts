import { studentsTable } from '@/services/airtable'

export class StudentRepository {
  /**
   * Fetch Students
   * @returns all students data
   */
  static fetchStudents = async () => {
    try {
      const records = await studentsTable.select().firstPage()

      const modRecords = records.map((record) => {
        return {
          name: record.fields.Name,
          students: record.fields.Students
        }
      })

      return modRecords
    } catch (error) {
      console.error(error)
    }
  }
}