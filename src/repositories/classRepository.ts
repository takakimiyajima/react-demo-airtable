import { classesTable } from '@/services/airtable'

export class ClassRepository {
  /**
   * Fetch Classes Data
   * @returns All Classes Data
   */
  static fetchAllClasses = async () => {
    try {
      const records = await classesTable.select().firstPage()

      return records.map((record) => {
        return {
          name: record.fields.Name,
          students: record.fields.Students
        }
      })
    } catch (error) {
      console.error(error)
    }
  }
}