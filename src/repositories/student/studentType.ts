/**
 * Student types
 */
import { ErrorEntity } from "@/repositories"

/**
 * API-related
 */
export type StudentIDEntity = {
  studentID: string
  error: ErrorEntity | null
}

export type StudentEntity = {
  id: string
  name: string
}
 
export type StudentsEntity = {
  students: Array<StudentEntity>
  error: ErrorEntity | null
}
