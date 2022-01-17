import { classesTable } from '@/services/airtable'

export type Class = {
  name: string
  students: Array<string>
}

export class ClassRepository {
  /**
   * Fetch Classes Data
   * @returns All Classes Data
   */
  static fetchAllClasses = async (): Promise<Array<Class> | undefined> => {
    try {
      const records = await classesTable.select().firstPage()

      return records.map((record) => {
        return {
          name: record.fields.Name as string,
          students: record.fields.Students as Array<string>
        }
      })
    } catch (error) {
      console.error(error)
    }
  }
}