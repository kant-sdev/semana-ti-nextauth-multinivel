"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2 } from "lucide-react"

interface AddExamFormProps {
    patientId: number
    onExamAdded: () => void
}

export function AddExamForm({ patientId, onExamAdded }: AddExamFormProps) {
    const [examType, setExamType] = useState("")
    const [examResult, setExamResult] = useState("")
    const [success, setSuccess] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!examType || !examResult) return

        const exam = {
            exam: examType,
            result: examResult
        }

        console.log("Novo Exame Adicionando: ", exam)

        setSuccess(true)

        setExamType("")
        setExamResult("")

        setTimeout(() => {
            setSuccess(false)
            onExamAdded()
        }, 1500)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {success && (
                <Alert className="bg-green-50 border-green-200">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-600">Exam added successfully</AlertDescription>
                </Alert>
            )}

            <div className="space-y-2">
                <Label htmlFor="examType">Exam Type</Label>
                <Select value={examType} onValueChange={setExamType} required>
                    <SelectTrigger id="examType">
                        <SelectValue placeholder="Select exam type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Blood Test">Blood Test</SelectItem>
                        <SelectItem value="X-Ray">X-Ray</SelectItem>
                        <SelectItem value="MRI">MRI</SelectItem>
                        <SelectItem value="CT Scan">CT Scan</SelectItem>
                        <SelectItem value="Ultrasound">Ultrasound</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2">
                <Label htmlFor="examResult">Exam Results</Label>
                <Textarea
                    id="examResult"
                    placeholder="Enter exam results"
                    value={examResult}
                    onChange={(e) => setExamResult(e.target.value)}
                    rows={5}
                    required
                />
            </div>

            <Button type="submit" className="w-full">
                Add Exam
            </Button>
        </form>
    )
}
