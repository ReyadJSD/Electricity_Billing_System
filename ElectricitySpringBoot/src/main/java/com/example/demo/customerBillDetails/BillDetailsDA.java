package com.example.demo.customerBillDetails;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;



public class BillDetailsDA {
	Connection con;
	PreparedStatement pstmt;
	
	public List<BillDetails> showCustomerAllBillsByMeterNo(String meterNo) {
		List<BillDetails> bList = new ArrayList<>();
		BillDetails s;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT * FROM bill_details WHERE meter_no = ?");
			pstmt.setString(1, meterNo);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				s = new BillDetails();
				s.setMeterNo(rs.getString(2));
				s.setName(rs.getString(3));
				s.setAddress(rs.getString(4));
				s.setMeterType(rs.getString(5));
				s.setLmu(rs.getDouble(6));
				s.setCmu(rs.getDouble(7));
				s.setUnit(rs.getDouble(8));
				s.setResult(rs.getDouble(9));
				s.setNetBill(rs.getDouble(10));
				s.setRentCharge(rs.getDouble(11));
				s.setTax(rs.getDouble(12));
				s.setMonth(rs.getString(13));
				s.setYear(rs.getString(14));
				s.setTotalBill(rs.getDouble(15));
				s.setStatus(rs.getString(16));
				bList.add(s);
			}
			con.close();
		} catch (Exception e) {
			System.out.print(e);
		}
		return bList;
	}
	
	
	public List<BillDetails> showCustomerAllBillsByMonth(String meterNo,String month) {
		List<BillDetails> bList = new ArrayList<>();
		BillDetails s;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT * FROM bill_details WHERE meter_no = ? AND month = ?");
			pstmt.setString(1, meterNo);
			pstmt.setString(2, month);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				s = new BillDetails();
				s.setMeterNo(rs.getString(2));
				s.setName(rs.getString(3));
				s.setAddress(rs.getString(4));
				s.setMeterType(rs.getString(5));
				s.setLmu(rs.getDouble(6));
				s.setCmu(rs.getDouble(7));
				s.setUnit(rs.getDouble(8));
				s.setResult(rs.getDouble(9));
				s.setNetBill(rs.getDouble(10));
				s.setRentCharge(rs.getDouble(11));
				s.setTax(rs.getDouble(12));
				s.setMonth(rs.getString(13));
				s.setYear(rs.getString(14));
				s.setTotalBill(rs.getDouble(15));
				s.setStatus(rs.getString(16));
				bList.add(s);
			}
			con.close();
		} catch (Exception e) {
			System.out.print(e);
		}
		return bList;
	}


}
