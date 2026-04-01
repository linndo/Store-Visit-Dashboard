import type { Visit } from '../types/Visit.ts';

export const mockVisits: Visit[] = [
  {
    "id": 1,
    "store": "REWE Friedrichstraße",
    "city": "Düsseldorf",
    "rep": "Anna Müller",
    "status": "completed",
    "visitDate": "2026-03-28T09:30:00",
    "productsChecked": 12,
    "issuesFound": 0
  },
  {
    "id": 2,
    "store": "EDEKA Marktplatz",
    "city": "Köln",
    "rep": "Anna Müller",
    "status": "completed",
    "visitDate": "2026-03-28T14:00:00",
    "productsChecked": 8,
    "issuesFound": 3
  },
  {
    "id": 3,
    "store": "Kaufland Berliner Allee",
    "city": "Düsseldorf",
    "rep": "Tom Becker",
    "status": "pending",
    "visitDate": "2026-03-31T10:00:00",
    "productsChecked": 0,
    "issuesFound": 0
  },
  {
    "id": 4,
    "store": "REWE Center Hansaring",
    "city": "Köln",
    "rep": "Tom Becker",
    "status": "in_progress",
    "visitDate": "2026-03-31T11:30:00",
    "productsChecked": 5,
    "issuesFound": 1
  },
  {
    "id": 5,
    "store": "Aldi Süd Grafenberg",
    "city": "Düsseldorf",
    "rep": "Lisa Schmidt",
    "status": "completed",
    "visitDate": "2026-03-27T08:00:00",
    "productsChecked": 15,
    "issuesFound": 2
  },
  {
    "id": 6,
    "store": "Lidl Flingern",
    "city": "Düsseldorf",
    "rep": "Lisa Schmidt",
    "status": "cancelled",
    "visitDate": "2026-03-29T13:00:00",
    "productsChecked": 0,
    "issuesFound": 0
  },
  {
    "id": 7,
    "store": "Netto Ehrenfeld",
    "city": "Köln",
    "rep": "Anna Müller",
    "status": "pending",
    "visitDate": "2026-04-01T09:00:00",
    "productsChecked": 0,
    "issuesFound": 0
  },
  {
    "id": 8,
    "store": "PENNY Bilk",
    "city": "Düsseldorf",
    "rep": "Tom Becker",
    "status": "completed",
    "visitDate": "2026-03-26T16:00:00",
    "productsChecked": 10,
    "issuesFound": 4
  }
]
