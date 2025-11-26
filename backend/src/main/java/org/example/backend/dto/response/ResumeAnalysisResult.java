package org.example.backend.dto.response;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonPropertyDescription;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ResumeAnalysisResult {
    @JsonPropertyDescription("A concise summary of the candidate's profile in about 3 sentences")
    String summary;

    @JsonPropertyDescription("A list of the top 3 key technical or cognitive strengths based on the provided CV")
    List<String> strengths;

    @JsonPropertyDescription(
            "A list of potential weaknesses, gaps, or risks (e.g., short tenure, missing key skills, shallow project descriptions)")
    List<String> weaknesses;

    @JsonPropertyDescription(
            "A list of specific, actionable suggestions to improve the resume and increase hiring chances")
    List<String> improvementSuggestions;

    @JsonPropertyDescription("Detailed evaluation regarding seniority, score, and reasoning")
    ResumeEvaluation resumeEvaluation;
}
