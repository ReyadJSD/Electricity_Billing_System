package com.example.demo.customersBillPayment;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin (origins="http://localhost:4200")
@RestController
public class PayBillController {
	
	@PostMapping(value="/saveTxn")
	public PayBill saveTxn(@RequestBody PayBill p){
		PayBillDA pbd = new PayBillDA();
		return pbd.insertTxn(p);
	}
}
