package com.example.demo.customerBillDetails;

public class BillDetails {
	int id;
	String meterNo;
	String name;
	String address;
	String meterType;
	double lmu;
	double cmu;
	double unit;
	double result;
	double netBill;
	double rentCharge;
	double tax;
	String month;
	String year;
	double totalBill;
	String status;
	public BillDetails() {
		super();
	}
	public BillDetails(int id, String meterNo, String name, String address, String meterType, double lmu, double cmu,
			double unit, double result, double netBill, double rentCharge, double tax, String month, String year,
			double totalBill, String status) {
		super();
		this.id = id;
		this.meterNo = meterNo;
		this.name = name;
		this.address = address;
		this.meterType = meterType;
		this.lmu = lmu;
		this.cmu = cmu;
		this.unit = unit;
		this.result = result;
		this.netBill = netBill;
		this.rentCharge = rentCharge;
		this.tax = tax;
		this.month = month;
		this.year = year;
		this.totalBill = totalBill;
		this.status = status;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getMeterNo() {
		return meterNo;
	}
	public void setMeterNo(String meterNo) {
		this.meterNo = meterNo;
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
	public double getTotalBill() {
		return totalBill;
	}
	public void setTotalBill(double totalBill) {
		this.totalBill = totalBill;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	

}
