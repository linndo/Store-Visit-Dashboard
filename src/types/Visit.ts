export type Visit = {
  id: number
  store: string
  city: string
  rep: string
  status: 'completed' | 'pending' | 'in_progress' | 'cancelled'
  visitDate: string
  productsChecked: number
  issuesFound: number
}