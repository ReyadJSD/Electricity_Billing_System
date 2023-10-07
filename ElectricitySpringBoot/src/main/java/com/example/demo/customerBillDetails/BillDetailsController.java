package com.example.demo.customerBillDetails;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BillDetailsController {
	
	List<BillDetails> ppList = new ArrayList<>();
	@RequestMapping(value ="/showAllBillForCustomer/{meterNo}")
	public List<BillDetails> showCustomerBillInTable(@PathVariable("meterNo") String meterNo) {
		BillDetailsDA d = new BillDetailsDA();
		return d.showCustomerAllBillsByMeterNo( meterNo);
	}
	
	List<BillDetails> bpList = new ArrayList<>();
	@RequestMapping(value ="/showAllBillBymonth/{meterNo}/{month}")
	public List<BillDetails> showCustomerBillByMonth(@PathVariable("meterNo") String meterNo, @PathVariable("month") String month) {
		BillDetailsDA d = new BillDetailsDA();
		return d.showCustomerAllBillsByMonth( meterNo,month);
	}

}
