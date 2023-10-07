package com.example.demo.billCollection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
public class CollectBillDA {
	Connection con;
	PreparedStatement pstmt;
	
	public CollectBill collectBillByMeterNo(String meterNo, String month) {
		CollectBill s = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT * FROM payment_status WHERE meter_no = ? AND month = ?");
			pstmt.setString(1, meterNo);
			pstmt.setString(2, month);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				s = new CollectBill();
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
			}
			con.close();
		} catch (Exception e) {
			System.out.println(e);
//			e.printStackTrace();
		}
		return s;
	}
	
	public CollectBill collectBills(CollectBill s) {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("UPDATE payment_status SET bill_receive_date = ?, fine_total = ?, payment_status = 'Paid' WHERE meter_no = ? AND month = ?");
			pstmt.setString(1, s.receiveDate);
			pstmt.setDouble(2, s.fineTotal);
			pstmt.setString(3, s.meterNo);
			pstmt.setString(4, s.month);
			int x = pstmt.executeUpdate();
			if(x != -1) {
				this.updateBillingStatus(s);
				return s;
			}
			con.close();
			
		} catch (Exception e) {
			System.out.println(e);
		}
		return null;
	}
	
	public void updateBillingStatus(CollectBill s) {
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("UPDATE bill_details SET pay_status = 'Paid' WHERE meter_no = ? AND month = ?");
			pstmt.setString(1, s.meterNo);
			pstmt.setString(2, s.month);
			pstmt.executeUpdate();
			con.close();
			
		} catch (Exception e) {
			System.out.println(e);
		}
	}
 
	public ReceiptGenerate customerByMeternoForReceipt(String meterNo, String month) {
		ReceiptGenerate s = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pstmt = con.prepareStatement("SELECT customers.name,customers.address,customers.district,customers.email,customers.phone,customers.meter_no,customers.meter_type,bill_details.last_month_units,bill_details.current_month_units,bill_details.units,bill_details.bill_per_unit,bill_details.net_bill,bill_details.meter_rent,bill_details.tax,bill_details.total_bill,payment_status.last_date_for_pay,payment_status.bill_receive_date,payment_status.fine_total,bill_details.month,bill_details.year,bill_details.pay_status,payment_status.id FROM customers JOIN bill_details ON customers.meter_no = bill_details.meter_no JOIN payment_status ON customers.meter_no = payment_status.meter_no WHERE customers.meter_no = ? AND bill_details.month = ? AND payment_status.month = ?");
			pstmt.setString(1, meterNo);
			pstmt.setString(2, month);
			pstmt.setString(3, month);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				s = new ReceiptGenerate();
				s.setName(rs.getString(1));
				s.setAddress(rs.getString(2));
				s.setDistrict(rs.getString(3));
				s.setEmail(rs.getString(4));
				s.setPhone(rs.getString(5));
				s.setMeterNo(rs.getString(6));
				s.setMeterType(rs.getString(7));
				s.setLmu(rs.getDouble(8));
				s.setCmu(rs.getDouble(9));
				s.setUnit(rs.getDouble(10));
				s.setResult(rs.getDouble(11));
				s.setNetBill(rs.getDouble(12));
				s.setRentCharge(rs.getDouble(13));
				s.setTax(rs.getDouble(14));
				s.setTotalBill(rs.getDouble(15));
				s.setLastDate(rs.getString(16));
				s.setReceiveDate(rs.getString(17));
				s.setFineTotal(rs.getDouble(18));
				s.setMonth(rs.getString(19));
				s.setYear(rs.getString(20));
				s.setStatus(rs.getString(21));
				s.setBillId(rs.getInt(22));
			}
		} catch (Exception e) {
			System.out.println(e);
//			e.printStackTrace();
		}
		return s;
	}
	
	//rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4),rs.getString(5),rs.getString(6),rs.getString(7),rs.getDouble(8),rs.getDouble(9),rs.getDouble(10),rs.getDouble(11),rs.getDouble(12),rs.getDouble(13),rs.getDouble(14),rs.getDouble(15),rs.getString(16),rs.getString(17),rs.getDouble(18),rs.getString(19),rs.getString(20),rs.getString(21)
	
}
