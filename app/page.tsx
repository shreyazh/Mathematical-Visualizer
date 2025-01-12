'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { TrigVisualizer } from '@/components/trig-visualizer'
import { ExponentVisualizer } from '@/components/exponent-visualizer'
import { MathOperations } from '@/components/math-operations'

export default function MathematicalVisualizer() {
  const [inputValue, setInputValue] = useState<number>(0)
  const [operation, setOperation] = useState<string>('sine')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // The state updates will trigger re-renders of the visualization components
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Mathematical Visualizer</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Input</CardTitle>
            <CardDescription>Enter a value and select an operation</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="inputValue">Value</Label>
                <Input
                  id="inputValue"
                  type="number"
                  value={inputValue}
                  onChange={(e) => setInputValue(parseFloat(e.target.value))}
                  step="any"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="operation">Operation</Label>
                <Select value={operation} onValueChange={setOperation}>
                  <SelectTrigger id="operation">
                    <SelectValue placeholder="Select operation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sine">Sine</SelectItem>
                    <SelectItem value="cosine">Cosine</SelectItem>
                    <SelectItem value="tangent">Tangent</SelectItem>
                    <SelectItem value="cotangent">Cotangent</SelectItem>
                    <SelectItem value="secant">Secant</SelectItem>
                    <SelectItem value="cosecant">Cosecant</SelectItem>
                    <SelectItem value="exponent">Exponent</SelectItem>
                    <SelectItem value="square">Square</SelectItem>
                    <SelectItem value="squareRoot">Square Root</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit">Visualize</Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Visualization</CardTitle>
            <CardDescription>Visual representation of the selected operation</CardDescription>
          </CardHeader>
          <CardContent>
            {['sine', 'cosine', 'tangent', 'cotangent', 'secant', 'cosecant'].includes(operation) && (
              <TrigVisualizer value={inputValue} operation={operation} />
            )}
            {operation === 'exponent' && (
              <ExponentVisualizer base={inputValue} />
            )}
            {['square', 'squareRoot'].includes(operation) && (
              <MathOperations value={inputValue} operation={operation} />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

