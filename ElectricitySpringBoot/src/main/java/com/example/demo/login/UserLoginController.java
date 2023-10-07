package com.example.demo.login;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class UserLoginController {
//		@PostMapping(value = "/login")
//		public HashMap<String, String> userSignIn(@RequestBody UserLogin u) {
//			UserLoginDA d = new UserLoginDA();
//			return d.userSignin(u);		
//		}
	
	@PostMapping(value = "/login")
	public UserLogin userLogIn(@RequestBody UserLogin admin) {
		UserLoginDA userDa = new UserLoginDA();
		return userDa.userSignin(admin);
	}
}
