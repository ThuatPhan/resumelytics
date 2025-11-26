package org.example.backend.dto.response;

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
public class ResumeEvaluation {
    @JsonPropertyDescription(
            "The estimated seniority level based on experience (e.g., Intern, Fresher, Junior, Senior, Lead)")
    String currentLevel;

    @JsonPropertyDescription("Suitability score on a scale of 0 to 10 based on the target role and identified level")
    double score;

    @JsonPropertyDescription("A brief explanation for the assigned score")
    String reasoning;
}
