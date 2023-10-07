package com.example.demo.receipt;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.example.demo.customers.Customer;

public class ReceiptsDA {
	Connection con;
	PreparedStatement pstmt;
	
	public Customer customerByMeterno(String meterNo) {
		Customer s = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("select * from customers where meter_no=?");
			pstmt.setString(1, meterNo);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				s = new Customer();
				s.setName(rs.getString(1));
				s.setAddress(rs.getString(2));
				s.setDistrict(rs.getString(3));
				s.setEmail(rs.getString(3));
				s.setPhone(rs.getString(4));
			}
			con.close();
		} catch (Exception e) {
			System.out.println(e);
//			e.printStackTrace();
		}
		return s;
	}
}
