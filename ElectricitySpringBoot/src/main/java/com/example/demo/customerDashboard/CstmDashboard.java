package com.example.demo.customerDashboard;

public class CstmDashboard {
	String meterNo;
	String month;
	String totalBill;
	String fineTotal;
	String lastDate;
	String status;
	String rowCount;
	String pendingBills;
	String pendingCustomer;
	public CstmDashboard() {
		super();
	}
	public CstmDashboard(String meterNo, String month, String totalBill, String fineTotal, String lastDate,
			String status, String rowCount, String pendingBills, String pendingCustomer) {
		super();
		this.meterNo = meterNo;
		this.month = month;
		this.totalBill = totalBill;
		this.fineTotal = fineTotal;
		this.lastDate = lastDate;
		this.status = status;
		this.rowCount = rowCount;
		this.pendingBills = pendingBills;
		this.pendingCustomer = pendingCustomer;
	}
	public String getMeterNo() {
		return meterNo;
	}
	public void setMeterNo(String meterNo) {
		this.meterNo = meterNo;
	}
	public String getMonth() {
		return month;
	}
	public void setMonth(String month) {
		this.month = month;
	}
	public String getTotalBill() {
		return totalBill;
	}
	public void setTotalBill(String totalBill) {
		this.totalBill = totalBill;
	}
	public String getFineTotal() {
		return fineTotal;
	}
	public void setFineTotal(String fineTotal) {
		this.fineTotal = fineTotal;
	}
	public String getLastDate() {
		return lastDate;
	}
	public void setLastDate(String lastDate) {
		this.lastDate = lastDate;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getRowCount() {
		return rowCount;
	}
	public void setRowCount(String rowCount) {
		this.rowCount = rowCount;
	}
	public String getPendingBills() {
		return pendingBills;
	}
	public void setPendingBills(String pendingBills) {
		this.pendingBills = pendingBills;
	}
	public String getPendingCustomer() {
		return pendingCustomer;
	}
	public void setPendingCustomer(String pendingCustomer) {
		this.pendingCustomer = pendingCustomer;
	}
	
	
}
