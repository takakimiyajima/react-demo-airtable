import { studentsTable } from "@/services/airtable"
import { Error } from '@/reducer'
import { ERROR_STATUS, ErrorStatusType } from '@/constants/error'


export type StudentID = {
  studentID: string
  error?: Error
}

export type StudentInfo = {
  id: string
  name: string
}

export type StudentsInfo = {
  students: Array<StudentInfo>
  error?: Error
}

export class StudentRepository {
  /**
   * Fetch a student
   * @param name Student's name
   * @returns a student record ID filtered name
   */
  static fetchStudent = async (
    name: string
  ): Promise<StudentID> => {
    return await studentsTable
      .select({
        filterByFormula: `{Name} = "${name}"`,
        maxRecords: 1,
      })
      .firstPage()
      .then((student) => {
        return {
          studentID: student[0].id,
          error: undefined
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
      });
  }

  /**
   * Fetch all students
   * @returns all students data
   */
  static fetchAllStudents = async (): Promise<StudentsInfo> => {
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
          error: undefined
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
