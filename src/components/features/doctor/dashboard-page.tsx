"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { PatientExams } from "./patient-exams"
import { PatientList } from "./patient-list"
import { getAllPatients, getExamsForPatient } from "@/lib/data"


export default function DoctorDashboard() {
    const router = useRouter()
    const [patients, setPatients] = useState<any[]>([])
    const [selectedPatient, setSelectedPatient] = useState<any>(null)
    const [patientExams, setPatientExams] = useState<any[]>([])
    const [showAddExam, setShowAddExam] = useState(false)

    useEffect(() => {
        const allPatients = getAllPatients()
        setPatients(allPatients)

        if (allPatients.length > 0) {
            handleSelectPatient(allPatients[0])
        }
    }, [])

    const handleSelectPatient = (patient: any) => {
        setSelectedPatient(patient)
        setPatientExams(getExamsForPatient(patient.id))
        setShowAddExam(false)
    }

    const handleExamAdded = () => {
        if (selectedPatient) {
            setPatientExams(getExamsForPatient(selectedPatient.id))
            setShowAddExam(false)
        }
    }

    const toggleAddExam = () => setShowAddExam(prev => !prev)


    return (
        <div className="min-h-screen bg-gray-50">
            <main className="container mx-auto p-4 py-8">
                <div className="grid gap-6 md:grid-cols-12">
                    <PatientList
                        patients={patients}
                        selectedPatientId={selectedPatient?.id ?? null}
                        onSelect={handleSelectPatient}
                    />
                    <PatientExams
                        selectedPatient={selectedPatient}
                        exams={patientExams}
                        showAddExam={showAddExam}
                        onToggleAddExam={toggleAddExam}
                        onExamAdded={handleExamAdded}
                    />
                </div>
            </main>
        </div>
    )
}
