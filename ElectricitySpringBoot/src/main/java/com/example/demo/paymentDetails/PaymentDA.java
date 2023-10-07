package com.example.demo.paymentDetails;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;


public class PaymentDA {
	
	Connection con;
	PreparedStatement pstmt;

	public Payment2 billsByMeterno(String meterNo, String month) {
		Payment2 s = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT customers.meter_no,customers.name,customers.meter_type,bill_details.units,bill_details.month,bill_details.year,bill_details.total_bill,bill_details.pay_status FROM customers JOIN bill_details  ON customers.meter_no = bill_details.meter_no WHERE customers.meter_no =? AND bill_details.month=?");
			pstmt.setString(1, meterNo);
			pstmt.setString(2, month);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				s = new Payment2(rs.getString(1),rs.getString(2),rs.getString(3),rs.getDouble(4),rs.getString(5),rs.getString(6), rs.getDouble(7),rs.getString(8));
			}
		} catch (Exception e) {
			System.out.println(e);
//			e.printStackTrace();
		}
		return s;
	}
	
	public Payment insert (Payment s) {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("INSERT INTO payment_status VALUES(?,?,?,?,?,?,?,?,?,?,?,?)");
			pstmt.setString(1, null);
			pstmt.setString(2, s.meterNo);
			pstmt.setString(3, s.name);
			pstmt.setString(4, s.month);
			pstmt.setString(5, s.year);
			pstmt.setString(6, s.meterType);
			pstmt.setDouble(7, s.unit);
			pstmt.setDouble(8, s.totalBill);
			pstmt.setString(9, s.lastDate);
			pstmt.setString(10, null);
			pstmt.setDouble(11, 0);
			pstmt.setString(12, s.status);
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
	
	public List<Payment> showPaymentDetails() {
		List<Payment> sList = new ArrayList<>();
		Payment s;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT * FROM payment_status");
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				s = new Payment();
				s.setMeterNo(rs.getString(2));
				s.setName(rs.getString(3));
				s.setMonth(rs.getString(4));
				s.setYear(rs.getString(5));
				s.setMeterType(rs.getString(6));
				s.setUnit(rs.getDouble(7));
				s.setTotalBill(rs.getDouble(8));
				s.setLastDate(rs.getString(9));
				s.setReceiveDate(rs.getString(10));
				s.setFineTotal(rs.getDouble(11));
				s.setStatus(rs.getString(12));
				sList.add(s);
			}
			con.close();
		} catch (Exception e) {
			System.out.print(e);
		}
		return sList;
	}
	
	//Search Payment Details.
	public List<Payment> searchPaymentDetails(String meterNo, String month) {
		List<Payment> pList = new ArrayList<>();
		Payment s;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT * FROM payment_status WHERE meter_no = ? AND month = ?");
			pstmt.setString(1, meterNo);
			pstmt.setString(2, month);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				s = new Payment();
				s.setMeterNo(rs.getString(2));
				s.setName(rs.getString(3));
				s.setMonth(rs.getString(4));
				s.setYear(rs.getString(5));
				s.setMeterType(rs.getString(6));
				s.setUnit(rs.getDouble(7));
				s.setTotalBill(rs.getDouble(8));
				s.setLastDate(rs.getString(9));
				s.setReceiveDate(rs.getString(10));
				s.setFineTotal(rs.getDouble(11));
				s.setStatus(rs.getString(12));
				pList.add(s);
			}
			con.close();
		} catch (Exception e) {
			System.out.print(e);
		}
		return pList;
	}
	
	
	
	//Payment Details for customer section
	public List<Payment> showhPaymentDetailsByMeterNo(String meterNo) {
		List<Payment> pList = new ArrayList<>();
		Payment s;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT * FROM payment_status WHERE meter_no = ?");
			pstmt.setString(1, meterNo);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				s = new Payment();
				s.setMeterNo(rs.getString(2));
				s.setName(rs.getString(3));
				s.setMonth(rs.getString(4));
				s.setYear(rs.getString(5));
				s.setMeterType(rs.getString(6));
				s.setUnit(rs.getDouble(7));
				s.setTotalBill(rs.getDouble(8));
				s.setLastDate(rs.getString(9));
				s.setReceiveDate(rs.getString(10));
				s.setFineTotal(rs.getDouble(11));
				s.setStatus(rs.getString(12));
				pList.add(s);
			}
			con.close();
		} catch (Exception e) {
			System.out.print(e);
		}
		return pList;
	}
}
