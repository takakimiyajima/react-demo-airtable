import { classesTable } from '@/services/airtable'

export class ClassRepository {
  /**
   * Fetch Classes Data
   * @returns All Classes Data
   */
  static fetchClass = async () => {
    try {
      const records = await classesTable.select().firstPage()

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