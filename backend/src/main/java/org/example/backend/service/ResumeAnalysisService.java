package org.example.backend.service;

import org.example.backend.dto.response.ResumeAnalysisResult;
import org.example.backend.helper.PdfReaderHelper;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.google.genai.GoogleGenAiChatModel;
import org.springframework.ai.google.genai.GoogleGenAiChatOptions;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;

@Service
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class ResumeAnalysisService {
    ChatClient chatClient;
    PdfReaderHelper pdfReaderHelper;

    public ResumeAnalysisService(ChatClient.Builder chatClientBuilder, PdfReaderHelper pdfReaderHelper) {
        chatClient = chatClientBuilder.build();
        this.pdfReaderHelper = pdfReaderHelper;
    }

    public ResumeAnalysisResult analysisResume(MultipartFile resumeFile) {
        String rawCvContent = pdfReaderHelper.loadPdfContentAsString(resumeFile.getResource());

        return chatClient
                .prompt()
                .system(
                        """
								You are a strict and critical Senior Tech Recruiter.
								Your task is to review the candidate's resume provided below.

								IMPORTANT RESPONSE RULES:
								1. Analyze the resume strictly based on the provided text.
								2. **CRITICAL: Although the JSON keys are in English, the VALUES (your analysis content) MUST BE IN VIETNAMESE.**
								""")
                .user(String.format("""
								Here is the resume content:
								%s
								""", rawCvContent))
                .options(GoogleGenAiChatOptions.builder()
                        .model(GoogleGenAiChatModel.ChatModel.GEMINI_2_5_PRO)
                        .temperature(0.4)
                        .build())
                .call()
                .entity(ResumeAnalysisResult.class);
    }
}
