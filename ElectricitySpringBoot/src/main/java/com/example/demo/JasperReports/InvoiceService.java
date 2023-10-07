package com.example.demo.JasperReports;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import com.example.demo.billCollection.CollectBillDA;
import com.example.demo.billCollection.ReceiptGenerate;
import com.example.demo.customers.Customer;
import com.example.demo.customers.CustomerDA;

//import java.time.LocalDateTime;
//import java.time.format.DateTimeFormatter;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

@Service
public class InvoiceService {
	
	public void exportJasperReport(HttpServletResponse response, String meterNo, String month) throws JRException, IOException {
      List<Customer> getCustomer = new CustomerDA().allStudent();
        //Get file and compile it
        File file = ResourceUtils.getFile("classpath:Invoice.jrxml");
        JasperReport jasperReport = JasperCompileManager.compileReport(file.getAbsolutePath());
        JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(getCustomer);
        
        ReceiptGenerate or = new CollectBillDA().customerByMeternoForReceipt(meterNo, month);
        
//        DateTimeFormatter inputFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
        // Parse the input string into LocalDateTime
//        LocalDateTime localDateTime = LocalDateTime.parse(or.getOrderDate(), inputFormatter);
        // Define the desired output format
//        DateTimeFormatter outputFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        // Format the LocalDateTime
//        String formattedDate = localDateTime.format(outputFormatter);
        
        
        HashMap<String, Object> parameter = new HashMap<>();
        parameter.put("id", or.getBillId());
        parameter.put("name", or.getName());
        parameter.put("address", or.getAddress());
        parameter.put("district", or.getDistrict());
        parameter.put("email", or.getEmail());
        parameter.put("phone", or.getPhone());
        parameter.put("meterNo", or.getMeterNo());
        parameter.put("meterType", or.getMeterType());
        parameter.put("lmu", or.getLmu());
        parameter.put("cmu", or.getCmu());
        parameter.put("unit", or.getUnit());
        parameter.put("result",or.getResult());
        parameter.put("netBill",or.getNetBill());
        parameter.put("rentCharge",or.getRentCharge());
        parameter.put("tax",or.getTax());
        parameter.put("totalBill",or.getTotalBill());
        parameter.put("lastDate",or.getLastDate());
        parameter.put("receiveDate",or.getReceiveDate());
        parameter.put("fineTotal",or.getFineTotal());
        parameter.put("month",or.getMonth());
        parameter.put("year",or.getYear());
        parameter.put("status",or.getStatus());
        
        
        
        
        
        //Fill Jasper report
        JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameter, dataSource);
        //Export report
        JasperExportManager.exportReportToPdfStream(jasperPrint,response.getOutputStream());
    }
}

