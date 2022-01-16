import { studentsTable } from '@/services/airtable'

export class StudentRepository {
  /**
   * Fetch one student
   * @param name Student's name
   * @returns all students data
   */
  static fetchStudent = async(name: string) => {
    try {
      const records = await studentsTable.select({
        filterByFormula: `{Name} = "${name}"`,
      }).firstPage()

      const modRecords = records.map((record) => {
        return {
          name: record.fields.Name,
          classes: record.fields.Classes
        }
      })

      return modRecords
    } catch (error) {
      console.error(error)
    }
  }
}