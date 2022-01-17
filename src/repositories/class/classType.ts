/**
 * Class types
 */
import { ErrorEntity } from "@/repositories"
/**
 * API-related
 */
export type ClassEntity = {
  classRoom: string
  studentIDs: Array<string>
}

export type ClassesEntity = {
  classes: Array<ClassEntity>
  error: ErrorEntity | null
}

/**
 * Presentation-related
 */
export type ClassInfo = {
  classRoom: string;
  /** (e.g.) Jon, Jade, Mike .... */
  studentNames: string;
}
