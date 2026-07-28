import { z } from 'zod'

export const anmeldungSchema = z
  .object({
    vorname: z.string().trim().min(1, 'Bitte Vorname eingeben'),
    nachname: z.string().trim().min(1, 'Bitte Nachname eingeben'),
    geburtsdatum: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, 'Ungültiges Geburtsdatum'),
    strasse: z.string().trim().min(1, 'Bitte Straße und Hausnummer eingeben'),
    plz: z.string().regex(/^\d{5}$/, 'Keine gültige Postleitzahl'),
    ort: z.string().trim().min(1, 'Bitte Wohnort eingeben'),
    telefon: z.string().trim().optional().default(''),
    email: z.string().trim().email('Keine gültige E-Mail-Adresse'),
    versicherungsart: z.enum(['gesetzlich', 'privat'], {
      message: 'Bitte Versicherungsart wählen',
    }),
    kassenik: z.string().trim().min(1, 'Bitte IK der Krankenkasse eingeben'),
    versichertennummer: z
      .string()
      .trim()
      .min(1, 'Bitte Versichertennummer eingeben'),
    entbindungstermin: z
      .string()
      .default('')
      .refine(
        (val) => val === '' || /^\d{4}-\d{2}-\d{2}$/.test(val),
        'Ungültiger Entbindungstermin',
      )
      .refine((val) => {
        if (!val) return true
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        return new Date(`${val}T00:00:00`) > today
      }, 'Entbindungstermin muss in der Zukunft liegen'),
    para: z.coerce
      .number()
      .int()
      .min(1, 'Bitte Anzahl der Schwangerschaften angeben')
      .max(9),
    gravida: z.coerce
      .number()
      .int()
      .min(0, 'Bitte Anzahl der Geburten angeben')
      .max(9),
    bemerkung: z.string().trim().optional().default(''),
  })
  .refine((data) => data.gravida <= data.para, {
    message: 'Mehr Geburten als Schwangerschaften',
    path: ['gravida'],
  })

export type AnmeldungInput = z.infer<typeof anmeldungSchema>
