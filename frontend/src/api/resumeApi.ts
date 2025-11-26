import { axiosInstance } from "@/lib/axios";
import type { ApiResponse, ResumeAnalysisResult } from "@/types";

export const analysisResume = async (resumeFile: File) => {
  const formData = new FormData();
  formData.append("resumeFile", resumeFile);

  const response = await axiosInstance.post<ApiResponse<ResumeAnalysisResult>>(
    "/resume/analyze",
    formData
  );

  return response.data;
};
