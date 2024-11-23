import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/enrollments`;
export const enroll = async (data: any) => {
  const response =  await axios.post(`${COURSES_API}`, data);
  return response.data;
};



export const unenroll = async (courseId: string, userId:string) => {
  const { data } = await axios.delete(`${COURSES_API}/${courseId}/${userId}`);
  return data;
};
