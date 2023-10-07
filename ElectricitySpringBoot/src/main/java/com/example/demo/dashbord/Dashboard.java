package com.example.demo.dashbord;

public class Dashboard {
	String rowCount;
	String residential;
	String business;
	String smallIndustry;
	String totalEarning;
	String pendingEarning;
	String pendingBills;
	String pendingCustomer;
	public Dashboard() {
		super();
	}
	public Dashboard(String rowCount, String residential, String business, String smallIndustry, String totalEarning,
			String pendingEarning, String pendingBills, String pendingCustomer) {
		super();
		this.rowCount = rowCount;
		this.residential = residential;
		this.business = business;
		this.smallIndustry = smallIndustry;
		this.totalEarning = totalEarning;
		this.pendingEarning = pendingEarning;
		this.pendingBills = pendingBills;
		this.pendingCustomer = pendingCustomer;
	}
	public String getRowCount() {
		return rowCount;
	}
	public void setRowCount(String rowCount) {
		this.rowCount = rowCount;
	}
	public String getResidential() {
		return residential;
	}
	public void setResidential(String residential) {
		this.residential = residential;
	}
	public String getBusiness() {
		return business;
	}
	public void setBusiness(String business) {
		this.business = business;
	}
	public String getSmallIndustry() {
		return smallIndustry;
	}
	public void setSmallIndustry(String smallIndustry) {
		this.smallIndustry = smallIndustry;
	}
	public String getTotalEarning() {
		return totalEarning;
	}
	public void setTotalEarning(String totalEarning) {
		this.totalEarning = totalEarning;
	}
	public String getPendingEarning() {
		return pendingEarning;
	}
	public void setPendingEarning(String pendingEarning) {
		this.pendingEarning = pendingEarning;
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
