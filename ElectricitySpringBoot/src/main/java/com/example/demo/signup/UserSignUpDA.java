package com.example.demo.signup;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
public class UserSignUpDA {
		Connection con;
		PreparedStatement pstmt;

	public UserSignUp insert(UserSignUp s) {
			try {
				Class.forName("com.mysql.cj.jdbc.Driver");
				con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
				pstmt = con.prepareStatement("INSERT INTO admin VALUES(?,?,?,?,?)");
				pstmt.setString(1, s.userId);
				pstmt.setString(2, s.name);
				pstmt.setString(3, s.email);
				pstmt.setString(4, s.phone);
				pstmt.setString(5, s.confirmPassword);
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
		
		public void update(UserSignUp s) {
			try {
				Class.forName("com.mysql.cj.jdbc.Driver");
				con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
				pstmt = con.prepareStatement("UPDATE admin SET name=?, email=?,phone=?, confirmPassword=? WHERE user_id = ?");
				pstmt.setString(1, s.name);
				pstmt.setString(2, s.email);
				pstmt.setString(3, s.phone);
				pstmt.setString(4, s.confirmPassword);
				pstmt.setString(5, s.userId);
				pstmt.executeUpdate();
				con.close();
			} catch (Exception e) {
				System.out.print(e);
			}
		}
		
		
		public UserSignUp getUserByName(String userId) {
			UserSignUp u =null;
			try {
				Class.forName("com.mysql.cj.jdbc.Driver");
				con = DriverManager.getConnection("jdbc:mysql://localhost:3306/spring_project", "root", "nh123456");
				pstmt = con.prepareStatement("select * from admin where user_id =?");
				pstmt.setString(1, userId);
				ResultSet rs = pstmt.executeQuery();
				while (rs.next()) {
					u = new UserSignUp();
					u.setName(rs.getString(2));
					u.setEmail(rs.getString(3));
					u.setPhone(rs.getString(4));
				}
				con.close();
			} catch (Exception e) {
				System.out.println(e);
			}
			return u;
		}
		

}
