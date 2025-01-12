'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface TrigVisualizerProps {
  value: number
  operation: string
}

export function TrigVisualizer({ value, operation }: TrigVisualizerProps) {
  const generateData = () => {
    const data = []
    for (let x = -Math.PI; x <= Math.PI; x += 0.1) {
      let y
      switch (operation) {
        case 'sine':
          y = Math.sin(x * value)
          break
        case 'cosine':
          y = Math.cos(x * value)
          break
        case 'tangent':
          y = Math.tan(x * value)
          break
        case 'cotangent':
          y = 1 / Math.tan(x * value)
          break
        case 'secant':
          y = 1 / Math.cos(x * value)
          break
        case 'cosecant':
          y = 1 / Math.sin(x * value)
          break
        default:
          y = 0
      }
      data.push({ x, y: isFinite(y) ? y : null })
    }
    return data
  }

  const data = generateData()

  return (
    <Card>
      <CardHeader>
        <CardTitle>{operation.charAt(0).toUpperCase() + operation.slice(1)} Visualization</CardTitle>
        <CardDescription>Value: {value}</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="x" 
              domain={[-Math.PI, Math.PI]} 
              tickFormatter={(value) => value.toFixed(2)}
            />
            <YAxis />
            <Tooltip 
              formatter={(value: number) => value.toFixed(4)}
              labelFormatter={(label: number) => `x: ${label.toFixed(2)}`}
            />
            <Line type="monotone" dataKey="y" stroke="#8884d8" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

