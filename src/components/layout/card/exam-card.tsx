"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Trash } from "lucide-react"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface ExamCardProps {
    exam: {
        id: string
        patientId: number
        date: string
        type: string
        result: string
    }
    isDoctor: boolean
    onExamDeleted?: () => void
}

export function ExamCard({ exam, isDoctor, onExamDeleted }: ExamCardProps) {
    const [showResult, setShowResult] = useState(false)

    const handleDelete = () => {
        console.log('Exame Deletado')
    }

    return (
        <Card>
            <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{exam.type}</CardTitle>
                    <Badge variant="outline">{new Date(exam.date).toLocaleDateString()}</Badge>
                </div>
            </CardHeader>
            <CardContent>
                {showResult ? (
                    <div className="bg-gray-50 p-3 rounded-md text-sm">
                        <p className="whitespace-pre-line">{exam.result}</p>
                    </div>
                ) : (
                    <Button variant="outline" size="sm" className="w-full" onClick={() => setShowResult(true)}>
                        <FileText size={16} className="mr-2" />
                        View Results
                    </Button>
                )}
            </CardContent>
            {isDoctor && (
                <CardFooter className="pt-0 justify-end">
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                                <Trash size={16} className="mr-2" />
                                Delete
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This will permanently delete this exam record. This action cannot be undone.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={handleDelete} className="bg-red-500 hover:bg-red-600">
                                    Delete
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </CardFooter>
            )}
        </Card>
    )
}
