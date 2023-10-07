package com.example.demo.paymentDetails;

public class Payment {
	int id;
	String meterNo;
	String name;
	String month;
	String year;
	String meterType;
	double unit;
	double totalBill;
	String lastDate;
	String receiveDate;
	double fineTotal;
	String status;
	public Payment() {
		super();
	}
	public Payment(int id, String meterNo, String name, String month, String year, String meterType, double unit,
			double totalBill, String lastDate, String receiveDate, double fineTotal, String status) {
		super();
		this.id = id;
		this.meterNo = meterNo;
		this.name = name;
		this.month = month;
		this.year = year;
		this.meterType = meterType;
		this.unit = unit;
		this.totalBill = totalBill;
		this.lastDate = lastDate;
		this.receiveDate = receiveDate;
		this.fineTotal = fineTotal;
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
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
}
