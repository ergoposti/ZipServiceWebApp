import axios from "axios";
import { ZipFileListDto } from "../models/zipFiles/ZipFileListDto.js";

const port = "55000";
const baseUrl = `http://localhost:${port}`;

export const uploadZipFile = async (formData: FormData) => {
  return await axios.post<string>(`${baseUrl}/ZipFile/Upload`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const getZipFiles = async () =>
  await axios.get<ZipFileListDto>(`${baseUrl}/ZipFile/List`);

export const deleteZipFile = async (id: string) =>
  await axios.delete(`${baseUrl}/ZipFile/Delete/${id}`);

export const getDownloadUrl = (id: string) =>
  `${baseUrl}/ZipFile/Download/${id}`;
