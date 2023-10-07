package com.example.demo.customers;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class CustomerDA {
	Connection con;
	PreparedStatement pstmt;

public Customer insert(Customer s) {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("INSERT INTO customers VALUES(?,?,?,?,?,?,?,?,?)");
			pstmt.setString(1, s.name);
			pstmt.setString(2, s.gender);
			pstmt.setString(3, s.meterNo);
			pstmt.setString(4, s.meterType);
			pstmt.setString(5, s.issueDate);
			pstmt.setString(6, s.district);
			pstmt.setString(7, s.address);
			pstmt.setString(8, s.email);
			pstmt.setString(9, s.phone);
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

public List<Customer> allStudent() {
	List<Customer> sList = new ArrayList<>();
	Customer s;
	try {
		Class.forName("com.mysql.cj.jdbc.Driver");
		con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
		pstmt = con.prepareStatement("SELECT * FROM customers");
		ResultSet rs = pstmt.executeQuery();
		while (rs.next()) {
			s = new Customer(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4),rs.getString(5),rs.getString(6),rs.getString(7),rs.getString(8),rs.getString(9));
			sList.add(s);
		}
	} catch (Exception e) {
		System.out.print(e);
	}
	return sList;
}



public Customer customerByMeterno(String meterNo) {
	Customer s = null;
	try {
		Class.forName("com.mysql.cj.jdbc.Driver");
		con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
		pstmt = con.prepareStatement("select * from customers where meter_no=?");
		pstmt.setString(1, meterNo);
		ResultSet rs = pstmt.executeQuery();
		while (rs.next()) {

			s = new Customer(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4),rs.getString(5),rs.getString(6),rs.getString(7),rs.getString(8),rs.getString(9));

		}
	} catch (Exception e) {
		System.out.println(e);
//		e.printStackTrace();
	}
	return s;
}

	
	public void update(Customer s) {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("UPDATE customers SET name=?, gender=?, meter_type=?,issue_date=?,district=?,address=?,email=?,phone=? WHERE meter_no=?");
			pstmt.setString(1, s.name);
			pstmt.setString(2, s.gender);
			pstmt.setString(3, s.meterType);
			pstmt.setString(4, s.issueDate);
			pstmt.setString(5, s.district);
			pstmt.setString(6, s.address);
			pstmt.setString(7, s.email);
			pstmt.setString(8, s.phone);
			pstmt.setString(9, s.meterNo);
			pstmt.executeUpdate();
			con.close();
		} catch (Exception e) {
			System.out.print(e);
		}
	}

public void delete(Customer s) {
	try {
		Class.forName("com.mysql.cj.jdbc.Driver");
		con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
		pstmt = con.prepareStatement("DELETE FROM customers WHERE meter_no = ?");
		pstmt.setString(1, s.meterNo);
		pstmt.executeUpdate();
		con.close();
	} catch (Exception e) {
		System.out.print(e);
	}
}



//Search Customer
public List<Customer> searchCustomert(String meterNo) {
	List<Customer> cList = new ArrayList<>();
	Customer s;
	try {
		Class.forName("com.mysql.cj.jdbc.Driver");
		con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
		pstmt = con.prepareStatement("select * from customers where meter_no=?");
		pstmt.setString(1, meterNo);
		ResultSet rs = pstmt.executeQuery();
		
		while (rs.next()) {

			s = new Customer (rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5),  rs.getString(6), rs.getString(7), rs.getString(8), rs.getString(9) );
			cList.add(s);
		}
	} catch (Exception e) {
		e.printStackTrace();
	}
	return cList;
}
}