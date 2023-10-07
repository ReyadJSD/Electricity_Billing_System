package com.example.demo.JasperReports;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletResponse;
import net.sf.jasperreports.engine.JRException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class InvoiceController {
	@Autowired
	private InvoiceService service;
	
	@GetMapping("/invoicePdf")
    public void createPDF(@RequestParam("meterNo") String meterNo,@RequestParam("month") String month,HttpServletResponse response) throws IOException, JRException {
       response.setContentType("application/pdf");
       DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd:hh:mm:ss");
       String currentDateTime = dateFormatter.format(new Date());
  
       String headerKey = "Content-Disposition";
       String headerValue = "attachment; filename=foodmela_" + currentDateTime + ".pdf";
       response.setHeader(headerKey, headerValue);
  
        service.exportJasperReport(response, meterNo, month);
    }
}
