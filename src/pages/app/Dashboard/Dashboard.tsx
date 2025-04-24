import { CardDayOrdersAmount } from './components/CardDayOrdersAmount/CardDayOrdersAmount'
import { CardMonthCanceledOrdersAmount } from './components/CardMonthCanceledOrdersAmount/CardMonthCanceledOrdersAmount'
import { CardMonthOrdersAmount } from './components/CardMonthOrdersAmount/CardMonthOrdersAmount'
import { CardMonthRecenue } from './components/CardMonthRecenue/CardMonthRecenue'

export function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      <div className="grid grid-cols-4 gap-6">
        <CardMonthRecenue />
        <CardMonthOrdersAmount />
        <CardDayOrdersAmount />
        <CardMonthCanceledOrdersAmount />
      </div>
    </div>
  )
}
