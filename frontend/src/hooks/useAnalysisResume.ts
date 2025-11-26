import { useMutation } from "@tanstack/react-query";
import type { ResumeAnalysisResult } from "@/types";
import { analysisResume } from "@/api/resumeApi";

export const useAnalysisResume = ({
  setResult,
  setError,
}: {
  setResult: React.Dispatch<React.SetStateAction<ResumeAnalysisResult | null>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  return useMutation({
    mutationFn: analysisResume,
    onError: (err) => {
      setError(err.message);
    },
    onSuccess: (data) => {
      setResult(data.data);
    },
  });
};
