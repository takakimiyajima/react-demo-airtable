/**
 * Error-related constant
 */

export const ERROR_STATUS = {
  [404]: 'Cannot find the user you chose.',
  [422]: 'Unprocessable entity.',
  [500]: 'We are Sorry Internal System Error: Please try again if you encounter an error.'
}
export type ErrorStatusType = keyof typeof ERROR_STATUS;