"use client"
import {TrendingUp} from 'lucide-react'
import {
    Label,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
  } from "recharts"


import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { useEffect } from 'react'

  const chartData = [
    { browser: "safari", visitors: 12, fill: "var(--color-safari)" },
  ]

  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    safari: {
      label: "Safari",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig

export default function Chart(){
    
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    let date = dd + '/' + mm + '/' + yyyy;

    return (
        <div className='w-1/2 h-fit rounded-xl shadow-lg flex justify-between'>
            <div className='flex flex-col p-3'>
                <h3 className='font-medium text-lg text-gray-600'>Overall Score</h3>
                <h1 className='font-semibold text-2xl'>Remark :<span className='text-green-400 font-semibold text-2xl'>Good</span></h1>
                <span className='text-gray-400 font-light'>Evaluated on {date}</span>
            </div>
        <div className=''>
        <Card className="flex flex-col">
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square h-screen max-h-[200px]"
            >
              <RadialBarChart
                data={chartData}
                endAngle={160}
                innerRadius={80}
                outerRadius={140}
              >
                <PolarGrid
                  gridType="circle"
                  radialLines={false}
                  stroke="none"
                  className="first:fill-muted last:fill-background"
                  polarRadius={[86, 74]}
                />
                <RadialBar dataKey="visitors" background />
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-4xl font-bold"
                            >
                              {chartData[0].visitors.toLocaleString()+"/30"}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              Score
                            </tspan>
                          </text>
                        )
                      }
                    }}
                  />
                </PolarRadiusAxis>
              </RadialBarChart>
            </ChartContainer>
          </CardContent>
          {/* <CardFooter className="flex-col gap-2 text-sm">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
              Showing total visitors for the last 6 months
            </div>
          </CardFooter> */}
        </Card>
        </div>
        </div>
    )
}