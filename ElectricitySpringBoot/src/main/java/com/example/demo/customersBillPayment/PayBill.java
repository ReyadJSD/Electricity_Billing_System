package com.example.demo.customersBillPayment;

public class PayBill {
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
	String tnxId;
	String phone;
	public PayBill() {
		super();
	}
	public PayBill(String meterNo, String name, String month, String year, String meterType, double unit,
			double totalBill, String lastDate, String receiveDate, double fineTotal, String status, String tnxId,
			String phone) {
		super();
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
		this.tnxId = tnxId;
		this.phone = phone;
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
	public String getTnxId() {
		return tnxId;
	}
	public void setTnxId(String tnxId) {
		this.tnxId = tnxId;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
}
