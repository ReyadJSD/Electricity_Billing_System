package com.example.demo.customerDashboard;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;



public class CstmDashboardDA {

	Connection con;
	PreparedStatement pstmt;
	
	public CstmDashboard coutTotalBillAmount(String fineTotal, String meterNo) {
		CstmDashboard cd = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT SUM(fine_total) FROM payment_status WHERE meter_no = ?");
			pstmt.setString(1, meterNo);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				cd = new CstmDashboard();
				cd.setFineTotal(rs.getString(1));
			}
			con.close();
		} catch (Exception e) {
			System.out.println(e);
		}
		return cd;
	}
	
	public CstmDashboard countPendingBills(String pendingBills, String meterNo) {
		CstmDashboard cd = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT COUNT(*) FROM payment_status WHERE payment_status = 'Not Paid' AND meter_no = ?");
			pstmt.setString(1, meterNo);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				cd = new CstmDashboard();
				cd.setPendingBills(rs.getString(1));
			}
			con.close();
		}catch(Exception e) {
			System.out.println(e);
		}
		return cd;
	}
	
	public CstmDashboard coutPendingBillAmount(String totalBill, String meterNo) {
		CstmDashboard cd = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT SUM(total_bill) FROM payment_status WHERE payment_status = 'Not Paid' AND meter_no = ?");
			pstmt.setString(1, meterNo);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				cd = new CstmDashboard();
				cd.setTotalBill(rs.getString(1));
			}
			con.close();
		} catch (Exception e) {
			System.out.println(e);
		}
		return cd;
	}
	
	public CstmDashboard selectPendingMonth(String meterNo) {
		CstmDashboard cd = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT month FROM payment_status WHERE payment_status = 'Not Paid' AND meter_no = ?");
			pstmt.setString(1, meterNo);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				cd = new CstmDashboard();
				cd.setMonth(rs.getString(1));
			}
			con.close();
		} catch (Exception e) {
			System.out.println(e);
		}
		return cd;
	}
	
	
//	Select Monthly Bill Amounts Start Here
	
	public MonthChart selectTotalJanuary(String january, String meterNo) {
		MonthChart cd = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT total_bill FROM payment_status WHERE month = 'January' AND meter_no = ?");
			pstmt.setString(1, meterNo);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				cd = new MonthChart();
				cd.setJanuary(rs.getString(1));
			}
			con.close();
		}catch(Exception e) {
			System.out.println(e);
		}
		return cd;
	}
	
	public MonthChart selectTotalFebruary(String february, String meterNo) {
		MonthChart cd = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT total_bill FROM payment_status WHERE month = 'February' AND meter_no = ?");
			pstmt.setString(1, meterNo);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				cd = new MonthChart();
				cd.setFebruary(rs.getString(1));
			}
			con.close();
		}catch(Exception e) {
			System.out.println(e);
		}
		return cd;
	}
	
	public MonthChart selectTotalMarch(String march, String meterNo) {
		MonthChart cd = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT total_bill FROM payment_status WHERE month = 'March' AND meter_no = ?");
			pstmt.setString(1, meterNo);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				cd = new MonthChart();
				cd.setMarch(rs.getString(1));
			}
			con.close();
		}catch(Exception e) {
			System.out.println(e);
		}
		return cd;
	}
	
	public MonthChart selectTotalApril(String april, String meterNo) {
		MonthChart cd = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT total_bill FROM payment_status WHERE month = 'April' AND meter_no = ?");
			pstmt.setString(1, meterNo);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				cd = new MonthChart();
				cd.setApril(rs.getString(1));
			}
			con.close();
		}catch(Exception e) {
			System.out.println(e);
		}
		return cd;
	}
	
	public MonthChart selectTotalMay(String may, String meterNo) {
		MonthChart cd = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT total_bill FROM payment_status WHERE month = 'May' AND meter_no = ?");
			pstmt.setString(1, meterNo);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				cd = new MonthChart();
				cd.setMay(rs.getString(1));
			}
			con.close();
		}catch(Exception e) {
			System.out.println(e);
		}
		return cd;
	}
	
	public MonthChart selectTotalJune(String june, String meterNo) {
		MonthChart cd = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT total_bill FROM payment_status WHERE month = 'June' AND meter_no = ?");
			pstmt.setString(1, meterNo);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				cd = new MonthChart();
				cd.setJune(rs.getString(1));
			}
			con.close();
		}catch(Exception e) {
			System.out.println(e);
		}
		return cd;
	}
	
	public MonthChart selectTotalJuly(String july, String meterNo) {
		MonthChart cd = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT total_bill FROM payment_status WHERE month = 'July' AND meter_no = ?");
			pstmt.setString(1, meterNo);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				cd = new MonthChart();
				cd.setJuly(rs.getString(1));
			}
			con.close();
		}catch(Exception e) {
			System.out.println(e);
		}
		return cd;
	}
	
	public MonthChart selectTotalAugust(String august, String meterNo) {
		MonthChart cd = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT total_bill FROM payment_status WHERE month = 'August' AND meter_no = ?");
			pstmt.setString(1, meterNo);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				cd = new MonthChart();
				cd.setAugust(rs.getString(1));
			}
			con.close();
		}catch(Exception e) {
			System.out.println(e);
		}
		return cd;
	}
	
	public MonthChart selectTotalSeptember(String september, String meterNo) {
		MonthChart cd = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT total_bill FROM payment_status WHERE month = 'September' AND meter_no = ?");
			pstmt.setString(1, meterNo);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				cd = new MonthChart();
				cd.setSeptember(rs.getString(1));
			}
			con.close();
		}catch(Exception e) {
			System.out.println(e);
		}
		return cd;
	}
	
	public MonthChart selectTotalOctober(String october, String meterNo) {
		MonthChart cd = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT total_bill FROM payment_status WHERE month = 'October' AND meter_no = ?");
			pstmt.setString(1, meterNo);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				cd = new MonthChart();
				cd.setOctober(rs.getString(1));
			}
			con.close();
		}catch(Exception e) {
			System.out.println(e);
		}
		return cd;
	}
	
	public MonthChart selectTotalNovember(String november, String meterNo) {
		MonthChart cd = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT total_bill FROM payment_status WHERE month = 'November' AND meter_no = ?");
			pstmt.setString(1, meterNo);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				cd = new MonthChart();
				cd.setNovember(rs.getString(1));
			}
			con.close();
		}catch(Exception e) {
			System.out.println(e);
		}
		return cd;
	}
	public MonthChart selectTotalDecember(String december, String meterNo) {
		MonthChart cd = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT total_bill FROM payment_status WHERE month = 'December' AND meter_no = ?");
			pstmt.setString(1, meterNo);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				cd = new MonthChart();
				cd.setDecember(rs.getString(1));
			}
			con.close();
		}catch(Exception e) {
			System.out.println(e);
		}
		return cd;
	}
	
	//Select Monthly Bill Amounts Start Here
}
