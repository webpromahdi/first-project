import { StudentMOdel } from '../student.model';
import { Student } from './student.iterface';

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentMOdel.create(student);
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentMOdel.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentMOdel.find({ id });
  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
