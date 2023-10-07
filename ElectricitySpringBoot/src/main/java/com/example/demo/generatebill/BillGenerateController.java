package com.example.demo.generatebill;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;





@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BillGenerateController {
//	@GetMapping("/calculate")
//    public double calculateResult(@RequestBody BillGenerate s) {
//		BillGenerateDA d = new BillGenerateDA();
//		d.calculateResult(s);
//        return 0; // Default value if the conditions are not met
//    }
	
	@PostMapping(value="/savebill")
	public BillGenerate savecstm(@RequestBody BillGenerate s){
		BillGenerateDA d = new BillGenerateDA();
		return d.insert(s);
	}
	
	List<BillGenerate> pList = new ArrayList<>();
	@RequestMapping(value="/showbill")
	public List<BillGenerate> allBill(){
		BillGenerateDA d = new BillGenerateDA();
		pList = d.allBill();
		return pList;
	}
	
	@GetMapping(value ="/bills/{meterNo}")
	public SearchInfo getBillsByMeterno(@PathVariable("meterNo") String meterNo) {
		SearchInfo s ;
		BillGenerateDA d = new BillGenerateDA();
		s=d.billsByMeterno(meterNo);
		return s;
	}
	
	@GetMapping(value ="/lmu/{meterNo}")
	public SearchInfo getLastMonthUnitByMeterno(@PathVariable("meterNo") String meterNo) {
		SearchInfo s ;
		BillGenerateDA d = new BillGenerateDA();
		s=d.lastMonthUnitByMeterno(meterNo);
		return s;
	}
	
	List<BillGenerate> ppList = new ArrayList<>();
	@RequestMapping(value ="/searchbill/{meterNo}/{month}")
	public List<BillGenerate> searchProductInTable(@PathVariable("meterNo") String meterNo, @PathVariable("month") String month) {
		BillGenerateDA d = new BillGenerateDA();
		return d.searchBillInfoForTbl( meterNo,month);
	}

}
