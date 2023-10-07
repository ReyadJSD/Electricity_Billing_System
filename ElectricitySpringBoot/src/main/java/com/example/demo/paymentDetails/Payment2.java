package com.example.demo.paymentDetails;

public class Payment2 {
	String meterNo;
	String name;
	String meterType;
	double unit;
	String month;
	String year;
	double totalBill;
	String status;
	public Payment2() {
		super();
	}
	public Payment2(String meterNo, String name, String meterType, double unit, String month, String year,
			double totalBill, String status) {
		super();
		this.meterNo = meterNo;
		this.name = name;
		this.meterType = meterType;
		this.unit = unit;
		this.month = month;
		this.year = year;
		this.totalBill = totalBill;
		this.status = status;
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
	public String getMeterType() {
		return meterType;
	}
	public void setMeterType(String meterType) {
		this.meterType = meterType;
	}
	public double getUnit() {
		return unit;
	}
	public void setUnit(double unit) {
		this.unit = unit;
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
