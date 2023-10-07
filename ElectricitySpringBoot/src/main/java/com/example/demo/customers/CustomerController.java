package com.example.demo.customers;

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
public class CustomerController {
	List<Customer> pList = new ArrayList<>();
	@RequestMapping(value="/allcus")
	public List<Customer> allStudents(){
		CustomerDA d = new CustomerDA();
		pList = d.allStudent();
		return pList;
	}
	
	@GetMapping(value ="/customer/{meterNo}")
	public Customer getCustomerByMeterno(@PathVariable("meterNo") String meterNo) {
		Customer s ;
		CustomerDA d = new CustomerDA();
		s=d.customerByMeterno(meterNo);
		return s;
	}
	
	@PostMapping(value="/updatecus")
	public void update(@RequestBody Customer s){
		CustomerDA d = new CustomerDA();
		d.update(s);
	}
	
	
	@PostMapping(value="/savecstm")
	public Customer savecstm(@RequestBody Customer s){
		CustomerDA d = new CustomerDA();
		return d.insert(s);
	}
	
	
	@PostMapping(value="/delete")
	public void delete(@RequestBody Customer s){
		CustomerDA d = new CustomerDA();
		d.delete(s);
	}
	
	
List<Customer> ppList = new ArrayList<>();
	@RequestMapping(value ="/searchCustomer/{meterNo}")
	public List<Customer> searchProductInTable(@PathVariable("meterNo") String meterNo) {
		CustomerDA d = new CustomerDA();
		return d.searchCustomert( meterNo);
		
	
	}
}
