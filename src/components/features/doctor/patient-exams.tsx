import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExamCard } from "@/components/layout/card/exam-card"
import { AddExamForm } from "@/components/layout/form/add-exam-form"

export function PatientExams({ selectedPatient, exams, showAddExam, onToggleAddExam, onExamAdded }: {
    selectedPatient: any,
    exams: any[],
    showAddExam: boolean,
    onToggleAddExam: () => void,
    onExamAdded: () => void
}) {
    return (
        <Card className="md:col-span-9">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="text-xl text-blue-700">
                            {selectedPatient ? `Exams for ${selectedPatient.email}` : "Select a patient"}
                        </CardTitle>
                        <CardDescription>
                            {selectedPatient ? "View and manage patient exams" : ""}
                        </CardDescription>
                    </div>
                    {selectedPatient && (
                        <Button
                            onClick={onToggleAddExam}
                            variant={showAddExam ? "outline" : "default"}
                        >
                            {showAddExam ? "Cancel" : "Add Exam"}
                        </Button>
                    )}
                </div>
            </CardHeader>
            <CardContent>
                {selectedPatient ? (
                    showAddExam ? (
                        <AddExamForm patientId={selectedPatient.id} onExamAdded={onExamAdded} />
                    ) : exams.length > 0 ? (
                        <div className="grid gap-4 md:grid-cols-2">
                            {exams.map((exam) => (
                                <ExamCard
                                    key={exam.id}
                                    exam={exam}
                                    isDoctor={true}
                                    onExamDeleted={onExamAdded}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-8">
                            <p className="text-muted-foreground">No exams found for this patient</p>
                        </div>
                    )
                ) : (
                    <div className="text-center py-8">
                        <p className="text-muted-foreground">Please select a patient from the list</p>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
