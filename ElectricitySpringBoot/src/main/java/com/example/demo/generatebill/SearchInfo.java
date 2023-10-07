package com.example.demo.generatebill;

public class SearchInfo {
	String meterNo;
	String name;
	String address;
	String meterType;
	double cmu;
	public SearchInfo() {
		super();
	}
	public SearchInfo(String name, String address, String meterType,String meterNo) {
		super();
		this.name = name;
		this.address = address;
		this.meterType = meterType;
		this.meterNo = meterNo;
	}
	
	public SearchInfo(double cmu) {
		super();
		this.cmu = cmu;
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
	public double getCmu() {
		return cmu;
	}
	public void setCmu(double cmu) {
		this.cmu = cmu;
	}
		
}
