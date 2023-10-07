package com.example.demo.billCollection;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins="http://localhost:4200")
@RestController
public class CollectBillController {
	@GetMapping("/")
	String index() {
		return "Spring Boot Rocks";
		 
	}
	@GetMapping(value ="/getcollectbillsInfo/{meterNo}/{month}")
	public CollectBill collectBillByMeterNoMonth(@PathVariable("meterNo") String meterNo, @PathVariable("month") String month) {
		CollectBill s ;
		CollectBillDA d = new CollectBillDA();
		s=d.collectBillByMeterNo(meterNo,month);
		return s;
	}
	
	@PostMapping(value="/collect")
	public CollectBill save(@RequestBody CollectBill s){
		CollectBillDA d = new CollectBillDA();
		return d.collectBills(s);
	}
	
	@GetMapping(value ="/selectAllDetails/{meterNo}/{month}")
	public ReceiptGenerate getCustomerByMeterno(@PathVariable("meterNo") String meterNo, @PathVariable("month") String month) {
		ReceiptGenerate s ;
		CollectBillDA d = new CollectBillDA();
		s=d.customerByMeternoForReceipt(meterNo,month);
		return s;
	}
}
