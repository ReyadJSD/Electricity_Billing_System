package com.example.demo.login;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;



public class UserLoginDA {
	Connection con;
	PreparedStatement pst;

//	public HashMap<String, String> userSignin(UserLogin user) {
//		HashMap<String, String> userPass = new HashMap<>();
//		userPass.put("status", "Fail");
//		try {
//			Class.forName("com.mysql.cj.jdbc.Driver");
//			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
//			pst = con.prepareStatement("SELECT * FROM admin WHERE user_id=? AND password=?");
//			pst.setString(1, user.userId);
//			pst.setString(2, user.password);
//			ResultSet rs = pst.executeQuery();
//			if (rs.next()) {
//				userPass.put("status", "success");
//				user.setUserId(rs.getString(1));
//				user.setName(rs.getString(2));
//				user.setEmail(rs.getString(3));
//			}
//		} catch (Exception e) {
//			System.out.println("Cann.t get info" + e);
//		}
//		return userPass;
//	}
	
	public UserLogin userSignin(UserLogin s) {
		UserLogin info=null;
		try { 
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
			pst = con.prepareStatement("SELECT * FROM admin WHERE user_id=? AND password=?");
			pst.setString(1, s.userId);
			pst.setString(2, s.password);
			ResultSet rs = pst.executeQuery();
			if (rs.next()) {
				info = new UserLogin();
				info.setUserId(rs.getString(1));
				info.setName(rs.getString(2));
				info.setEmail(rs.getString(3));
				info.setPassword(rs.getString(5));
				
			}
			
		} catch(Exception e) {
			System.out.println(e);
		}
		
		return info;
	}
}
