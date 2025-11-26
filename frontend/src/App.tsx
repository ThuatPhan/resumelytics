import React, { useState } from "react";

import Header from "@/components/Header";
import UploadSection from "@/components/UploadSection";
import ResultDashboard from "@/components/ResultDashboard";
import { useAnalysisResume } from "@/hooks/useAnalysisResume";
import type { ResumeAnalysisResult } from "@/types";

const App: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ResumeAnalysisResult | null>(null);

  const { mutateAsync: analysisResume, isPending: loading } = useAnalysisResume(
    { setError, setResult }
  );

  const handleAnalyze = async () => {
    if (!file) return;
    await analysisResume(file);
  };

  const resetState = () => {
    setFile(null);
    setResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header onReset={resetState} />

      <main className="max-w-5xl mx-auto px-6 py-10">
        {!result ? (
          <UploadSection
            file={file}
            loading={loading}
            error={error}
            onFileSelect={setFile}
            onError={setError}
            onAnalyze={handleAnalyze}
          />
        ) : (
          <ResultDashboard result={result} />
        )}
      </main>
    </div>
  );
};

export default App;
