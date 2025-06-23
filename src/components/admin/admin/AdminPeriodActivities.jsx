import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { period } from '@/static/adminData'
import React from 'react'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'


const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
}

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const AdminPeriodActivities = () => {
  return (
   <div className='max-w-[300px] rotdate-90'>
     <ChartContainer config={chartConfig} className="min-h-[500px] w-full">
      <BarChart accessibilityLayer data={chartData}>
            {/* <CartesianGrid vertical={false} /> */}
    <ChartTooltip content={<ChartTooltipContent />} />

        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4}  maxBarSize={8}  />
         <XAxis
      dataKey="month"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value.slice(0, 3)}
    />
        {/* <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} /> */}
            <ChartLegend content={<ChartLegendContent />} />

      </BarChart>
    </ChartContainer>
    <div className="grid grid-cols-2 md:grid-cols-4  gap-5 mb-8">
            {
            period.map(_period=>{
                return(
                    <div className='  flex flex-row flex-wrap text-wrap
                     gap-4 sm:justify-between rounded-md md:rounded-sm  items-center shadow-gray-500  shadow-2xl px-3 py-5  md:p-5 '>
                        <h1 className='capitalize text-sm '>{_period.name}</h1>
                        <p>{_period.times}</p>
                    </div>
                )
            })
        }
    </div>

   </div>
  )
}

export default AdminPeriodActivities