package com.example.demo.receipt;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.customers.Customer;
import com.example.demo.customers.CustomerDA;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class ReceiptsController {
	@GetMapping(value ="/customerReceipt/{meterNo}")
	public Customer getCustomerByMeterno(@PathVariable("meterNo") String meterNo) {
		Customer s ;
		CustomerDA d = new CustomerDA();
		s=d.customerByMeterno(meterNo);
		return s;
	}

}
