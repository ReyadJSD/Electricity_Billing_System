package com.example.demo.customerRegistration;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;





public class CustomerSignUpDA {
	Connection con;
	PreparedStatement pstmt;
	public CustomerSignUp insert(CustomerSignUp s) {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("INSERT INTO users VALUES(?,?,?,?,?,?,?)");
			pstmt.setString(1, s.customerId);
			pstmt.setString(2, s.meterNo);
			pstmt.setString(3, s.customerName);
			pstmt.setString(4, s.address);
			pstmt.setString(5, s.customerEmail);
			pstmt.setString(6, s.customerPhone);
			pstmt.setString(7, s.confirmPassword);
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
	
	public CustomerSignUp update(String customerId, CustomerSignUp s) {
	    try {
	        Class.forName("com.mysql.cj.jdbc.Driver");
	        con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
	        pstmt = con.prepareStatement("UPDATE users SET customer_name=?, address=?, customer_email=?, customer_phone=? WHERE customer_id = ?");
	        pstmt.setString(1, s.getCustomerName());
	        pstmt.setString(2, s.getAddress());
	        pstmt.setString(3, s.getCustomerEmail());
	        pstmt.setString(4, s.getCustomerPhone());
	        pstmt.setString(5, customerId); // Use the customerId parameter in the WHERE clause
	        pstmt.executeUpdate();
	        con.close();
	    } catch (Exception e) {
	        System.out.print(e);
	    }
	    return s;
	}

	
	
//	customer Login
	
	public CustomerSignUp customerSignin(CustomerSignUp s) {
		CustomerSignUp info=null;
		try { 
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT * FROM users WHERE customer_id=? AND meter_no=? AND password=?");
			pstmt.setString(1, s.customerId);
			pstmt.setString(2, s.meterNo);
			pstmt.setString(3, s.confirmPassword);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				info = new CustomerSignUp();
				info.setCustomerId(rs.getString(1));
				info.setMeterNo(rs.getString(2));
				info.setCustomerName(rs.getString(3));
				info.setAddress(rs.getString(4));
				info.setCustomerEmail(rs.getString(5));
				info.setCustomerPhone(rs.getString(6));
			}
			con.close();
			
		} catch(Exception e) {
			System.out.println(e+"ggg");
		}
		
		return info;
	}
	
	
	public CustomerSignUp getCustomerByIdForProfile(String customerId) {
		CustomerSignUp u =null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("select * from users where customer_id =?");
			pstmt.setString(1, customerId);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				u = new CustomerSignUp();
				u.setCustomerId(rs.getString(1));
				u.setMeterNo(rs.getString(2));
				u.setCustomerName(rs.getString(3));
				u.setAddress(rs.getString(4));
				u.setCustomerEmail(rs.getString(5));
				u.setCustomerPhone(rs.getString(6));
			}
			con.close();
		} catch (Exception e) {
			System.out.println(e);
		}
		return u;
	}
}
