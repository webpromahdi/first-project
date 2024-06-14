export type Gurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type LocalGurdian = {
  name: string;
  occupation: string;
  contactNo: string;
  adress: string;
};

export type StudentName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type Student = {
  name: StudentName;
  id: string;
  gender: 'male' | 'female';
  dept: string;
  email: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  gurdian: Gurdian;
  localDurdian: LocalGurdian;
  profileImg?: string;
  isActive: 'active' | 'inActive';
};
