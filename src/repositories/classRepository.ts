import { classesTable } from '@/services/airtable'
import { Error } from '@/reducer'
import { ERROR_STATUS, ErrorStatusType } from '@/constants/error'

export type Class = {
  name: string
  students: Array<string>
}

export type ClassesInfo = {
  classes: Array<Class>
  error?: Error
}

export class ClassRepository {
  /**
   * Fetch Classes Data
   * @returns All Classes Data
   */
  static fetchAllClasses = async (): Promise<ClassesInfo> => {
    return await classesTable.select()
      .firstPage()
      .then((classes) => {
        const modClasses = classes.map((c) => {
          return {
            name: c.fields.Name as string,
            students: c.fields.Students as Array<string>
          }
        })
        return {
          classes: modClasses,
          error: undefined
        }
      })
      .catch((err) => {
        const statusCode = (Number(err.statusCode) || 404) as ErrorStatusType
        console.error(`${statusCode} ERROR:  ${ERROR_STATUS[statusCode]}`);
        return {
          classes: [],
          error: {
            statusCode,
            message: ERROR_STATUS[statusCode]
          }
        }
      });
  }
}