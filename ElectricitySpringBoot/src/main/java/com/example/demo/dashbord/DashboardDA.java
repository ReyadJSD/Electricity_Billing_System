package com.example.demo.dashbord;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class DashboardDA {
	Connection con;
	PreparedStatement pstmt;
	
	public Dashboard countAllCustomer() {
		Dashboard d = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT COUNT(*) FROM customers");
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				d = new Dashboard();
				d.setRowCount(rs.getString(1));
			}
		}catch(Exception e) {
			System.out.println(e);
		}
		return d;
	}
	
	public Dashboard countResidentialCustomer(String residential) {
		Dashboard d = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT COUNT(*) FROM customers WHERE meter_type = 'Residential'");
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				d = new Dashboard();
				d.setResidential(rs.getString(1));
			}
		}catch(Exception e) {
			System.out.println(e);
		}
		return d;
	}
	
	public Dashboard countBusinessCustomer(String business) {
		Dashboard d = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT COUNT(*) FROM customers WHERE meter_type = 'Business'");
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				d = new Dashboard();
				d.setBusiness(rs.getString(1));
			}
		}catch(Exception e) {
			System.out.println(e);
		}
		return d;
	}
	
	public Dashboard countSmallIndustrialCustomer(String smallIndustry) {
		Dashboard d = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT COUNT(*) FROM customers WHERE meter_type = 'Small Industry'");
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				d = new Dashboard();
				d.setSmallIndustry(rs.getString(1));
			}
		}catch(Exception e) {
			System.out.println(e);
		}
		return d;
	}
	
	public Dashboard countEarnings(String totalEarning) {
		Dashboard d = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT SUM(fine_total) FROM payment_status");
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				d = new Dashboard();
				d.setTotalEarning(rs.getString(1));
			}
		}catch(Exception e) {
			System.out.println(e);
		}
		return d;
	}
	
	public Dashboard countPendingEarnings(String pendingEarning) {
		Dashboard d = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT SUM(total_bill) FROM payment_status WHERE payment_status = 'Not Paid'");
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				d = new Dashboard();
				d.setPendingEarning(rs.getString(1));
			}
		}catch(Exception e) {
			System.out.println(e);
		}
		return d;
	}
	
	public Dashboard countPendingBills(String pendingBills) {
		Dashboard d = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT COUNT(*) FROM payment_status WHERE payment_status = 'Not Paid'");
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				d = new Dashboard();
				d.setPendingBills(rs.getString(1));
			}
		}catch(Exception e) {
			System.out.println(e);
		}
		return d;
	}
}
