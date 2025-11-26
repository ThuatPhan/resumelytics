import { useState } from "react";
import {
  AlertTriangle,
  BrainCircuit,
  FileText,
  Loader2,
  UploadCloud,
} from "lucide-react";

interface UploadSectionProps {
  file: File | null;
  loading: boolean;
  error: string | null;
  onFileSelect: (file: File | null) => void;
  onError: (msg: string | null) => void;
  onAnalyze: () => void;
}

const UploadSection: React.FC<UploadSectionProps> = ({
  file,
  loading,
  error,
  onFileSelect,
  onError,
  onAnalyze,
}) => {
  const [dragActive, setDragActive] = useState<boolean>(false);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const validateAndSetFile = (selectedFile: File) => {
    if (selectedFile.type !== "application/pdf") {
      onError("Vui lòng chỉ tải lên file định dạng PDF.");
      return;
    }
    onFileSelect(selectedFile);
    onError(null);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Tối ưu hóa CV của bạn với AI
        </h2>
        <p className="text-gray-500 text-lg">
          Tải lên CV của bạn (PDF) để nhận phân tích chi tiết, điểm số ATS và
          gợi ý cải thiện từ chuyên gia AI.
        </p>
      </div>

      <div
        className={`relative border-2 border-dashed rounded-2xl p-10 transition-all duration-300 ease-in-out text-center cursor-pointer
          ${
            dragActive
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 bg-white hover:border-blue-400"
          }
          ${file ? "border-green-400 bg-green-50" : ""}
        `}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="file-upload"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleChange}
          accept=".pdf"
          disabled={loading}
        />

        <div className="flex flex-col items-center justify-center pointer-events-none">
          {file ? (
            <>
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <FileText className="w-10 h-10 text-green-600" />
              </div>
              <p className="text-lg font-semibold text-gray-800">{file.name}</p>
              <p className="text-sm text-gray-500 mt-1">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onFileSelect(null);
                }}
                className="mt-4 text-sm text-red-500 hover:underline z-10 pointer-events-auto"
              >
                Xóa file
              </button>
            </>
          ) : (
            <>
              <div className="bg-blue-50 p-4 rounded-full mb-4">
                <UploadCloud className="w-10 h-10 text-blue-600" />
              </div>
              <p className="text-lg font-semibold text-gray-800">
                Kéo thả CV vào đây
              </p>
              <p className="text-sm text-gray-500 mt-1">
                hoặc nhấn để chọn file (PDF)
              </p>
            </>
          )}
        </div>
      </div>

      {error && (
        <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <button
        onClick={onAnalyze}
        disabled={!file || loading}
        className={`mt-8 w-full py-4 rounded-xl text-lg font-bold text-white shadow-lg transition-all
          ${
            !file || loading
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1"
          }
          flex items-center justify-center gap-3 cursor-pointer
        `}
      >
        {loading ? (
          <>
            <Loader2 className="w-6 h-6 animate-spin" />
            Đang phân tích...
          </>
        ) : (
          <>
            <BrainCircuit className="w-6 h-6" />
            Bắt đầu Phân tích
          </>
        )}
      </button>
    </div>
  );
};

export default UploadSection;
