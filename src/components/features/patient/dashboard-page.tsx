"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getExamsForPatient, getAllPatients } from "@/lib/data"
import { ExamCard } from "@/components/layout/card/exam-card"
import { useSession } from "next-auth/react"

export default function PatientDashboard() {
    const [user, setUser] = useState<any>(null)
    const [exams, setExams] = useState<any[]>([])

    const {data: session} = useSession();

    useEffect(() => {
        const patient = getAllPatients().find(p => p.id === "1")
        if (!patient) return

        setUser(patient)

        const patientExams = getExamsForPatient(patient.id)
        setExams(patientExams)
    }, [])

    if (!user) return null

    console.log(session?.user?.mfaType)

    return (
        <div className="min-h-screen bg-gray-50">

            <main className="container mx-auto p-4 py-8">
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle className="text-2xl text-green-700">Your Exams</CardTitle>
                                <CardDescription>View all your medical exam results</CardDescription>
                            </div>
                            <Badge variant="outline" className="bg-green-50">
                                Patient
                            </Badge>
                        </div>
                    </CardHeader>
                    <CardContent>
                        {exams.length > 0 ? (
                            <div className="grid gap-4 md:grid-cols-2">
                                {exams.map((exam) => (
                                    <ExamCard key={exam.id} exam={exam} isDoctor={false} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <p className="text-muted-foreground">No exams found</p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}
