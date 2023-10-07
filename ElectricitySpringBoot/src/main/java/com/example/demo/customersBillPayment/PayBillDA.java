package com.example.demo.customersBillPayment;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class PayBillDA {
	Connection con;
	PreparedStatement pst;
    
	public PayBill insertTxn(PayBill p) {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pst = con.prepareStatement("INSERT INTO transactions VALUES(?,?,?,?)");
			pst.setString(1, p.tnxId);
			pst.setString(2, p.meterNo);
			pst.setString(3, p.phone);
			pst.setDouble(4, p.totalBill);
			int x = pst.executeUpdate();
			if(x != -1) {
				return p;
			}
			con.close();
			
		} catch (Exception e) {
			System.out.println(e);
		}
		return null;
	}


}
