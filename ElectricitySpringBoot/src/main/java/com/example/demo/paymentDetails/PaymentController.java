package com.example.demo.paymentDetails;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins="http://localhost:4200")
@RestController
public class PaymentController {
	
	@GetMapping(value ="/getbillsInfo/{meterNo}/{month}")
	public Payment2 getBillsByMeterno(@PathVariable("meterNo") String meterNo, @PathVariable("month") String month) {
		Payment2 s ;
		PaymentDA d = new PaymentDA();
		s=d.billsByMeterno(meterNo,month);
		return s;
	}
	
	@PostMapping(value="/savepayment")
	public Payment savePaymentDetails(@RequestBody Payment s){
		PaymentDA d = new PaymentDA();
		return d.insert(s);
	}
	
	List<Payment> pList = new ArrayList<>();
	@RequestMapping(value="/showpaymentdetails")
	public List<Payment> getPaymentInfo(){
		PaymentDA d = new PaymentDA();
		pList = d.showPaymentDetails();
		return pList;
	}
	
	//Search Individual Payment Details
	List<Payment> ptList = new ArrayList<>();
	@RequestMapping(value="/searchpayments/{meterNo}/{month}")
	public List<Payment> searchPaymentDetails(@PathVariable("meterNo") String meterNo, @PathVariable("month") String month){
		PaymentDA d = new PaymentDA();
		pList = d.searchPaymentDetails(meterNo,month);
		return pList;
	}
	
	
	//Payment Details for customer section
	List<Payment> cptList = new ArrayList<>();
	@RequestMapping(value="/showPaymentForCustomer/{meterNo}")
	public List<Payment> showPaymentDetailsForCustomer(@PathVariable("meterNo") String meterNo){
		PaymentDA d = new PaymentDA();
		pList = d.showhPaymentDetailsByMeterNo(meterNo);
		return pList;
	}
}
