import {
  CheckCircle,
  AlertTriangle,
  Briefcase,
  ChevronRight,
  Lightbulb,
} from "lucide-react";

import ScoreBadge from "@/components/ScoreBadge";
import type { Evaluation, ResumeAnalysisResult } from "@/types";

const ResultDashboard: React.FC<{ result: ResumeAnalysisResult }> = ({
  result,
}) => {
  const getEvaluationData = (res: ResumeAnalysisResult): Evaluation => {
    return res.resumeEvaluation;
  };

  const evalData = getEvaluationData(result);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Top Stats */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 font-semibold mb-2 uppercase text-xs tracking-wider">
            Tóm tắt ứng viên
          </h3>
          <p className="text-gray-800 leading-relaxed">
            {result.summary || "Chưa có tóm tắt."}
          </p>
        </div>

        {/* Score Card */}
        {evalData && (
          <div className="shrink-0">
            <ScoreBadge score={evalData.score} level={evalData.currentLevel} />
          </div>
        )}
      </div>

      {/* Evaluation Reasoning */}
      {evalData?.reasoning && (
        <div className="mb-8 p-4 bg-blue-50 border border-blue-100 rounded-xl flex gap-3 text-blue-800">
          <Briefcase className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="flex flex-col">
            <span className="font-bold">Nhận xét tổng quan</span>
            <span>{evalData.reasoning}</span>
          </div>
        </div>
      )}

      {/* Two Columns: Strengths & Weaknesses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-green-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-100 rounded-lg text-green-600">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Điểm mạnh</h3>
          </div>
          <ul className="space-y-4">
            {result.strengths?.map((item, idx) => (
              <li key={idx} className="flex gap-3 text-gray-700">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-100 rounded-lg text-red-600">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Điểm yếu</h3>
          </div>
          <ul className="space-y-4">
            {result.weaknesses?.map((item, idx) => (
              <li key={idx} className="flex gap-3 text-gray-700">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Improvement Suggestions */}
      {result.improvementSuggestions && (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              Gợi ý cải thiện CV
            </h3>
          </div>
          <ul className="space-y-4">
            {result.improvementSuggestions.map((item, idx) => (
              <li key={idx} className="flex gap-3 text-gray-700">
                <div className="p-1 bg-blue-50 rounded-full mt-0.5 h-fit text-blue-500">
                  <ChevronRight className="w-4 h-4" />
                </div>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResultDashboard;
