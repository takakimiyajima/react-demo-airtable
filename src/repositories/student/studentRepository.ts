import { studentsTable } from "@/services/airtable"
import { ERROR_STATUS, ErrorStatusType } from "@/constants/error"
import {
  StudentIDEntity,
  StudentsEntity
} from "./studentType"

export class StudentRepository {
  /**
   * Fetch a student
   * @param name Student's name
   * @returns a student record ID filtered name
   */
  static fetchStudent = async (
    name: string
  ): Promise<StudentIDEntity> => {
    return await studentsTable
      .select({
        filterByFormula: `{Name} = "${name}"`,
        maxRecords: 1,
      })
      .firstPage()
      .then((student) => {
        return {
          studentID: student[0].id,
          error: null
        }
      })
      .catch((err) => {
        const statusCode = (Number(err.statusCode) || 404) as ErrorStatusType
        console.error(`${statusCode} ERROR:  ${ERROR_STATUS[statusCode]}`);
        return {
          studentID: '',
          isFetching: false,
          error: {
            statusCode,
            message: ERROR_STATUS[statusCode]
          }
        }
      })
  }

  /**
   * Fetch all students
   * @returns All students data
   */
  static fetchAllStudents = async (): Promise<StudentsEntity> => {
    return await studentsTable.select()
      .firstPage()
      .then((students) => {
        const modStudents = students.map((student) => {
          return {
            id: student.id as string,
            name: student.fields.Name as string,
          }
        })
        return {
          students: modStudents,
          error: null
        }
      })
      .catch((err) => {
        const statusCode = (Number(err.statusCode) || 404) as ErrorStatusType
        console.error(`${statusCode} ERROR:  ${ERROR_STATUS[statusCode]}`);
        return {
          students: [],
          error: {
            statusCode,
            message: ERROR_STATUS[statusCode]
          }
        }
      })
  }
}
