import { classesTable } from '@/services/airtable'
import { ClassesEntity } from "./classType"
import { ERROR_STATUS, ErrorStatusType } from '@/constants/error'

export class ClassRepository {
  /**
   * Fetch Classes Data
   * @returns All Classes Data
   */
  static fetchAllClasses = async (): Promise<ClassesEntity> => {
    return await classesTable.select({
      sort: [{ field: 'Name', direction: 'asc' }]
    })
      .firstPage()
      .then((classes) => {
        const modClasses = classes.map((c) => {
          return {
            classRoom: c.fields.Name as string,
            studentIDs: c.fields.Students as Array<string>
          }
        })

        return {
          classes: modClasses,
          error: null
        }
      })
      .catch((err) => {
        const statusCode = (Number(err.statusCode) || 404) as ErrorStatusType
        console.error(`${statusCode} ERROR:  ${ERROR_STATUS[statusCode]}`)
        return {
          classes: [],
          error: {
            statusCode,
            message: ERROR_STATUS[statusCode]
          }
        }
      })
  }
}