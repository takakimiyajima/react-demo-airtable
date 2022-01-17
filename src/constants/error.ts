/**
 * Error-related constant
 */

export const ERROR_STATUS = {
  [404]: 'Cannot read properties of undefined',
  [422]: 'Unprocessable entity',
  [500]: 'Internal server error'
}
export type ErrorStatusType = keyof typeof ERROR_STATUS;