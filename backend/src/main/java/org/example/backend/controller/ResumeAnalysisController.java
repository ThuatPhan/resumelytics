package org.example.backend.controller;

import org.example.backend.dto.response.ApiResponse;
import org.example.backend.dto.response.ResumeAnalysisResult;
import org.example.backend.service.ResumeAnalysisService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

@RestController
@RequestMapping("/api/resume/analyze")
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequiredArgsConstructor
public class ResumeAnalysisController {
    ResumeAnalysisService resumeAnalysisService;

    @PostMapping
    ApiResponse<ResumeAnalysisResult> analysisResume(@RequestPart(name = "resumeFile") MultipartFile resumeFile) {
        return ApiResponse.success(resumeAnalysisService.analysisResume(resumeFile));
    }
}
