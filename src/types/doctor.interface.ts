
export type IDoctor = {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  contactNumber?: string;
  address?: string;
  registrationNumber?: string;
  experience?: number;
  gender: "MALE" | "FEMALE";
  appointmentFee?: number;
  qualification?: string;
  currentWorkingPlace?: string;
  designation?: string;
  specialties?: string[]; // specialty IDs to add
  removeSpecialties?: string[]; // specialty IDs to remove
  profilePhoto?: File | string;
  isDeleted?: boolean;
  averageRating?: number;
  createdAt?: string;
  updatedAt?: string;
  sortKey?: string;

  // Include relation for nested updates if needed
  doctorSpecialties?: Array<{
    specialitiesId: string;
    specialties?: {
      id: string;
      title: string;
      icon?: string;
    };
  }>;
};
