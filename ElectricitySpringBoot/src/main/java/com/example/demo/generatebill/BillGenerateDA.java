package com.example.demo.generatebill;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class BillGenerateDA {
	Connection con;
	PreparedStatement pstmt;
	
	
	public BillGenerate insert(BillGenerate s) {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("INSERT INTO bill_details VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			pstmt.setString(1, null);
			pstmt.setString(2, s.meterNo);
			pstmt.setString(3, s.name);
			pstmt.setString(4, s.address);
			pstmt.setString(5, s.meterType);
			pstmt.setDouble(6, s.lmu);
			pstmt.setDouble(7, s.cmu);
			pstmt.setDouble(8, s.unit);
			pstmt.setDouble(9, s.result);
			pstmt.setDouble(10, s.netBill);
			pstmt.setDouble(11, s.rentCharge);
			pstmt.setDouble(12, s.tax);
			pstmt.setString(13, s.month);
			pstmt.setString(14, s.year);
			pstmt.setDouble(15, s.totalBill);
			pstmt.setString(16, s.status);
			int x = pstmt.executeUpdate();
			if(x != -1) {
				return s;
			}
			con.close();
		} catch (Exception e) {
			System.out.print(e);
		}
		return null;
	}
	
	public List<BillGenerate> allBill() {
		List<BillGenerate> sList = new ArrayList<>();
		BillGenerate s;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT * FROM bill_details");
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				s = new BillGenerate();
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
				sList.add(s);
			}
			con.close();
		} catch (Exception e) {
			System.out.print(e);
		}
		return sList;
	}
	
	public SearchInfo billsByMeterno(String meterNo) {
		SearchInfo s = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT * FROM customers WHERE meter_no =?");
			pstmt.setString(1, meterNo);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				s = new SearchInfo();
				s.setMeterNo(rs.getString(3));
				s.setName(rs.getString(1));
				s.setAddress(rs.getString(7));
				s.setMeterType(rs.getString(4));
			}
		} catch (Exception e) {
			System.out.println(e);
//			e.printStackTrace();
		}
		return s;
	}
	
	public SearchInfo lastMonthUnitByMeterno(String meterNo) {
		SearchInfo s = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT current_month_units FROM bill_details WHERE meter_no =?");
			pstmt.setString(1, meterNo);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				s = new SearchInfo(rs.getDouble(1));
			}
		} catch (Exception e) {
			System.out.println(e);
//			e.printStackTrace();
		}
		return s;
	}
	
	
	//Search Indivisual Bill Info
	
	public List<BillGenerate> searchBillInfoForTbl(String meterNo, String month) {
		List<BillGenerate> bList = new ArrayList<>();
		BillGenerate s;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT * FROM bill_details WHERE meter_no = ? AND month = ?");
			pstmt.setString(1, meterNo);
			pstmt.setString(2, month);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				s = new BillGenerate();
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
