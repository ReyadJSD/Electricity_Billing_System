package com.example.demo.billCollection;

public class ReceiptGenerate {
	int billId;
	String name;
	String address;
	String district;
	String email;
	String phone;
	String meterNo;
	String meterType;
	double lmu;
	double cmu;
	double unit;
	double result;
	double netBill;
	double rentCharge;
	double tax;
    double totalBill;
    String lastDate;
    String receiveDate;
    double fineTotal;
    String month;
    String year;
    String status;
	public ReceiptGenerate() {
		super();
	}
	public ReceiptGenerate(int billId,String name, String address, String district, String email, String phone, String meterNo,
			String meterType, double lmu, double cmu, double unit, double result, double netBill, double rentCharge,
			double tax, double totalBill, String lastDate, String receiveDate, double fineTotal, String month,
			String year, String status) {
		super();
		this.billId = billId;
		this.name = name;
		this.address = address;
		this.district = district;
		this.email = email;
		this.phone = phone;
		this.meterNo = meterNo;
		this.meterType = meterType;
		this.lmu = lmu;
		this.cmu = cmu;
		this.unit = unit;
		this.result = result;
		this.netBill = netBill;
		this.rentCharge = rentCharge;
		this.tax = tax;
		this.totalBill = totalBill;
		this.lastDate = lastDate;
		this.receiveDate = receiveDate;
		this.fineTotal = fineTotal;
		this.month = month;
		this.year = year;
		this.status = status;
	}
	
	public int getBillId() {
		return billId;
	}
	public void setBillId(int billId) {
		this.billId = billId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getDistrict() {
		return district;
	}
	public void setDistrict(String district) {
		this.district = district;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getMeterNo() {
		return meterNo;
	}
	public void setMeterNo(String meterNo) {
		this.meterNo = meterNo;
	}
	public String getMeterType() {
		return meterType;
	}
	public void setMeterType(String meterType) {
		this.meterType = meterType;
	}
	public double getLmu() {
		return lmu;
	}
	public void setLmu(double lmu) {
		this.lmu = lmu;
	}
	public double getCmu() {
		return cmu;
	}
	public void setCmu(double cmu) {
		this.cmu = cmu;
	}
	public double getUnit() {
		return unit;
	}
	public void setUnit(double unit) {
		this.unit = unit;
	}
	public double getResult() {
		return result;
	}
	public void setResult(double result) {
		this.result = result;
	}
	public double getNetBill() {
		return netBill;
	}
	public void setNetBill(double netBill) {
		this.netBill = netBill;
	}
	public double getRentCharge() {
		return rentCharge;
	}
	public void setRentCharge(double rentCharge) {
		this.rentCharge = rentCharge;
	}
	public double getTax() {
		return tax;
	}
	public void setTax(double tax) {
		this.tax = tax;
	}
	public double getTotalBill() {
		return totalBill;
	}
	public void setTotalBill(double totalBill) {
		this.totalBill = totalBill;
	}
	public String getLastDate() {
		return lastDate;
	}
	public void setLastDate(String lastDate) {
		this.lastDate = lastDate;
	}
	public String getReceiveDate() {
		return receiveDate;
	}
	public void setReceiveDate(String receiveDate) {
		this.receiveDate = receiveDate;
	}
	public double getFineTotal() {
		return fineTotal;
	}
	public void setFineTotal(double fineTotal) {
		this.fineTotal = fineTotal;
	}
	public String getMonth() {
		return month;
	}
	public void setMonth(String month) {
		this.month = month;
	}
	public String getYear() {
		return year;
	}
	public void setYear(String year) {
		this.year = year;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
    
}
