import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export function PatientList({ patients, selectedPatientId, onSelect }: {
    patients: any[],
    selectedPatientId: string | null,
    onSelect: (patient: any) => void
}) {
    return (
        <Card className="md:col-span-3">
            <CardHeader>
                <CardTitle className="text-blue-700">Patients</CardTitle>
                <CardDescription>Select a patient to view their exams</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    {patients.map((patient) => (
                        <Button
                            key={patient.id}
                            variant={selectedPatientId === patient.id ? "default" : "outline"}
                            className="w-full justify-start"
                            onClick={() => onSelect(patient)}
                        >
                            {patient.email}
                        </Button>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
