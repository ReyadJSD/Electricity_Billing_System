package com.example.demo.customerRegistration;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class CustomerSignUpController {
	
	@PostMapping(value="/insertCustomer")
	public CustomerSignUp save(@RequestBody CustomerSignUp s){
		CustomerSignUpDA d = new CustomerSignUpDA();
		return d.insert(s);
	}
	
	@PostMapping(value = "/updateCustomers/{customerId}")
	public CustomerSignUp update(@PathVariable String customerId, @RequestBody CustomerSignUp customerSignUp) {
	    CustomerSignUpDA d = new CustomerSignUpDA();
	    return d.update(customerId, customerSignUp);
	}

	
	@PostMapping(value = "/cstmlogin")
	public CustomerSignUp customerLogIn(@RequestBody CustomerSignUp customer) {
		CustomerSignUpDA userDa = new CustomerSignUpDA();
		return userDa.customerSignin(customer);
	}
	
	@GetMapping(value="/customerProfile/{customerId}")
	public CustomerSignUp getUsersByUsername(@PathVariable("customerId")String customerId) {
		CustomerSignUp u;
		CustomerSignUpDA fd = new CustomerSignUpDA();
		u= fd.getCustomerByIdForProfile(customerId);
		return u;
		
	}

}
