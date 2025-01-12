'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ExponentVisualizerProps {
  base: number
}

export function ExponentVisualizer({ base }: ExponentVisualizerProps) {
  const generateData = () => {
    const data = []
    for (let x = 0; x <= 10; x += 0.1) {
      data.push({ x, y: Math.pow(base, x) })
    }
    return data
  }

  const data = generateData()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Exponent Visualization</CardTitle>
        <CardDescription>Base: {base}</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="x" 
              domain={[0, 10]} 
              tickFormatter={(value) => value.toFixed(1)}
            />
            <YAxis />
            <Tooltip 
              formatter={(value: number) => value.toFixed(4)}
              labelFormatter={(label: number) => `x: ${label.toFixed(1)}`}
            />
            <Line type="monotone" dataKey="y" stroke="#82ca9d" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

