// types/AppUser.ts
export type AppUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'patient' | 'doctor';
  mfaType?: 'email' | 'totp';
  // os campos abaixo são opcionais dependendo do tipo de usuário
  specialty?: string;
  dateOfBirth?: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
  };
  emergencyContact?: {
    name: string;
    relationship: string;
    phone: string;
  };
  medicalHistory?: {
    condition: string;
    diagnosedAt: string;
    medication: string;
  }[];
  officeAddress?: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
  };
  totpSecret?: string;
};
