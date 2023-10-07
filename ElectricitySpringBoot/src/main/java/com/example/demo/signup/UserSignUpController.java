package com.example.demo.signup;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class UserSignUpController {

	//	List<UserSignUp> pList = new ArrayList<>();
//	@RequestMapping(value="/all")
//	public List<UserSignUp> allStudents(){
//		UserSignUpDA d = new UserSignUpDA();
//		pList = d.allUsers();
//		return pList;
//	}
	
	
	@PostMapping(value="/save")
	public UserSignUp save(@RequestBody UserSignUp s){
		UserSignUpDA d = new UserSignUpDA();
		return d.insert(s);
	}
	
	@PostMapping(value="/update")
	public void update(@RequestBody UserSignUp s){
		UserSignUpDA d = new UserSignUpDA();
		d.update(s);
	}
	
	
	@GetMapping(value="/adminsProfile/{userId}")
	public UserSignUp getUsersByUsername(@PathVariable("userId")String userId) {
		UserSignUp u;
		UserSignUpDA fd = new UserSignUpDA();
		u= fd.getUserByName(userId);
		return u;
		
	}

}
