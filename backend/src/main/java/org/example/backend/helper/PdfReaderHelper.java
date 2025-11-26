package org.example.backend.helper;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.ai.document.Document;
import org.springframework.ai.reader.ExtractedTextFormatter;
import org.springframework.ai.reader.pdf.PagePdfDocumentReader;
import org.springframework.ai.reader.pdf.config.PdfDocumentReaderConfig;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;

@Component
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class PdfReaderHelper {
    PdfDocumentReaderConfig defaultPdfConfig;

    public PdfReaderHelper() {
        this.defaultPdfConfig = PdfDocumentReaderConfig.builder()
                .withPageTopMargin(0)
                .withPageExtractedTextFormatter(ExtractedTextFormatter.builder()
                        .withNumberOfTopTextLinesToDelete(0)
                        .build())
                .withPagesPerDocument(1)
                .build();
    }

    public List<Document> loadPdfAsDocuments(Resource pdfResource) {
        PagePdfDocumentReader pdfReader = new PagePdfDocumentReader(pdfResource, defaultPdfConfig);
        return pdfReader.read();
    }

    public String loadPdfContentAsString(Resource pdfResource) {
        List<Document> documents = loadPdfAsDocuments(pdfResource);

        return documents.stream().map(Document::getText).collect(Collectors.joining("\n\n"));
    }
}
