package com.example.demo.customerRegistration;

public class CustomerSignUp {
	String customerId;
	String meterNo;
	String customerName;
	String address;
	String customerEmail;
	String customerPhone;
	String confirmPassword;
	public CustomerSignUp() {
		super();
	}
	public CustomerSignUp(String customerId, String meterNo, String customerName, String address, String customerEmail,
			String customerPhone, String confirmPassword) {
		super();
		this.customerId = customerId;
		this.meterNo = meterNo;
		this.customerName = customerName;
		this.address = address;
		this.customerEmail = customerEmail;
		this.customerPhone = customerPhone;
		this.confirmPassword = confirmPassword;
	}
	public String getCustomerId() {
		return customerId;
	}
	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}
	public String getMeterNo() {
		return meterNo;
	}
	public void setMeterNo(String meterNo) {
		this.meterNo = meterNo;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCustomerEmail() {
		return customerEmail;
	}
	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}
	public String getCustomerPhone() {
		return customerPhone;
	}
	public void setCustomerPhone(String customerPhone) {
		this.customerPhone = customerPhone;
	}
	public String getConfirmPassword() {
		return confirmPassword;
	}
	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}
	
}
