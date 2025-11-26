export interface Evaluation {
  currentLevel: string;
  score: number;
  reasoning: string;
}

export interface ResumeAnalysisResult {
  summary: string;
  strengths: string[];
  weaknesses: string[];
  improvementSuggestions: string[];
  resumeEvaluation: Evaluation;
  interviewQuestions?: string[];
}


export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}
