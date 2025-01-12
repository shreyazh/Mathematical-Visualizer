'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface MathOperationsProps {
  value: number
  operation: string
}

export function MathOperations({ value, operation }: MathOperationsProps) {
  const generateData = () => {
    const data = []
    const range = operation === 'square' ? 10 : Math.ceil(Math.sqrt(value)) + 1
    for (let x = 0; x <= range; x++) {
      let y
      if (operation === 'square') {
        y = Math.pow(x, 2)
      } else if (operation === 'squareRoot') {
        y = Math.sqrt(x)
      }
      data.push({ x, y })
    }
    return data
  }

  const data = generateData()

  return (
    <Card>
      <CardHeader>
        <CardTitle>{operation === 'square' ? 'Square' : 'Square Root'} Visualization</CardTitle>
        <CardDescription>Value: {value}</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip 
              formatter={(value: number) => value.toFixed(4)}
              labelFormatter={(label: number) => `x: ${label}`}
            />
            <Bar dataKey="y" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

