import Airtable from 'airtable'

const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_API_KEY })
  .base(process.env.REACT_APP_AIRTABLE_BASE_ID ?? '')

const TABLES = {
  CLASSES: 'Classes',
  STUDENTS: 'Students',
} as const

const classesTable = base(TABLES.CLASSES)
const studentsTable = base(TABLES.STUDENTS)

type Record = {
  id: string
}

const getMinifiedRecords = (records: Array<Record>) => {
  return records.map(({ id }) => id)
}

export {
  classesTable,
  studentsTable,
  getMinifiedRecords
}
