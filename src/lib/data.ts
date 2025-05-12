import { AppUser } from "@/types/AppUser";

// Mock user data
export const users: AppUser [] = [
    {
        id: "1",
        email: "alice@paciente.com",
        password: "123456",
        role: "patient",
        name: "Alice Silva",
        dateOfBirth: "1990-02-14",
        phone: "(11) 98765-4321",
        address: {
            street: "Rua das Flores, 123",
            city: "São Paulo",
            state: "SP",
            postalCode: "01234-567"
        },
        emergencyContact: {
            name: "Carlos Silva",
            relationship: "Brother",
            phone: "(11) 99876-5432"
        },
        medicalHistory: [
            {
                condition: "Hypertension",
                diagnosedAt: "2015-08-01",
                medication: "Lisinopril 10mg"
            },
            {
                condition: "Asthma",
                diagnosedAt: "2018-05-20",
                medication: "Salbutamol Inhaler"
            }
        ],
    },
    {
        id: "2",
        email: "bob@paciente.com",
        password: "123456",
        role: "patient",
        name: "Bob Costa",
        dateOfBirth: "1985-06-25",  
        phone: "(11) 97654-3210",
        address: {
            street: "Rua da Paz, 456",
            city: "São Paulo",
            state: "SP",
            postalCode: "01456-789"
        },
        emergencyContact: {
            name: "Joana Costa",
            relationship: "Wife",
            phone: "(11) 96754-3210"
        },
        medicalHistory: [
            {
                condition: "Diabetes Type 2",
                diagnosedAt: "2017-01-10",
                medication: "Metformin 500mg"
            },
        ],
    },
    {
        id: "3",
        email: "dr.bob@medico.com",
        password: "123456",
        role: "doctor",
        name: "Dr. Bob Martins",
        specialty: "Cardiologist",
        phone: "(11) 98765-1234",
        officeAddress: {
            street: "Av. Paulista, 456",
            city: "São Paulo",
            state: "SP",
            postalCode: "01310-000"
        },
        totpSecret: "JBSWY3DPEHPK3PXP", // Test secret (would be securely stored in a real app)
    },
];

// Sample exam data
export const sampleExams = [
    {
        id: "exam1",
        patientId: "1",
        doctorId: "3",
        date: "2023-05-15T10:30:00Z",
        type: "Blood Test",
        result:
            "Hemoglobin: 14.2 g/dL (Normal)\nWhite Blood Cells: 7,500/μL (Normal)\nPlatelets: 250,000/μL (Normal)\n\nAll results within normal range.",
        doctorComments: "Patient's blood test results are normal. No action required at the moment.",
        followUpDate: "2023-06-15T10:30:00Z",
    },
    {
        id: "exam2",
        patientId: "1",
        doctorId: "3",
        date: "2023-06-20T14:15:00Z",
        type: "Chest X-Ray",
        result:
            "Chest X-ray shows clear lung fields. No evidence of pneumonia or other abnormalities. Heart size appears normal.",
        doctorComments: "No issues found in the X-ray. Recommend routine check-up in 6 months.",
        followUpDate: "2023-12-20T14:15:00Z",
    },
    {
        id: "exam3",
        patientId: "2",
        doctorId: "3",
        date: "2023-05-10T09:00:00Z",
        type: "Blood Glucose Test",
        result:
            "Fasting blood glucose: 110 mg/dL (Elevated)\nPost-meal blood glucose: 140 mg/dL (Elevated)",
        doctorComments: "Patient shows elevated glucose levels, possible sign of pre-diabetes.",
        followUpDate: "2023-06-10T09:00:00Z",
    },
    {
        id: "exam4",
        patientId: "2",
        doctorId: "3",
        date: "2023-07-01T11:00:00Z",
        type: "Echocardiogram",
        result:
            "Normal heart size and function. No evidence of heart failure or structural abnormalities.",
        doctorComments: "Echocardiogram results are normal. No issues with heart function.",
        followUpDate: "2023-12-01T11:00:00Z",
    },
];

// Retorna todos os usuários com o papel de "patient"
export function getAllPatients() {
  return users.filter((user) => user.role === "patient")
}

// Retorna os exames de um paciente com base no seu ID
export function getExamsForPatient(patientId: string) {
  return sampleExams.filter((exam) => exam.patientId === patientId)
}

