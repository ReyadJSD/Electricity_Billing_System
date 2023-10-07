package com.example.demo.customerDashboard;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins="http://localhost:4200")
@RestController
public class CstmDashboardController {
	
 @GetMapping(value="/totalPaidAmt/{fineTotal}/{meterNo}")
 public CstmDashboard totalPaidAmt(@PathVariable("fineTotal") String fineTotal, @PathVariable("meterNo") String meterNo) {
	 CstmDashboard cd;
	 CstmDashboardDA cdd = new CstmDashboardDA();
	 cd = cdd.coutTotalBillAmount(fineTotal, meterNo);
	 return cd;
 }
 
 @GetMapping(value="/pendingBillsRow/{pendingBills}/{meterNO}")
	public CstmDashboard getPendingBillsRows(@PathVariable("pendingBills") String pendingBills, @PathVariable("meterNO") String meterNo) {
	 CstmDashboard cd;
	 CstmDashboardDA dd = new CstmDashboardDA();
		cd= dd.countPendingBills(pendingBills,meterNo);
		return cd;
	}
 
 @GetMapping(value="/totalPendingAmt/{totalBill}/{meterNo}")
 public CstmDashboard totalPendingAmt(@PathVariable("totalBill") String totalBill, @PathVariable("meterNo") String meterNo) {
	 CstmDashboard cd;
	 CstmDashboardDA cdd = new CstmDashboardDA();
	 cd = cdd.coutPendingBillAmount(totalBill, meterNo);
	 return cd;
 }
 
 @GetMapping(value="/getPendingBillMonth/{meterNo}")
 public CstmDashboard getPendingBillMonth(@PathVariable("meterNo") String meterNo) {
	 CstmDashboard cd;
	 CstmDashboardDA cdd = new CstmDashboardDA();
	 cd = cdd.selectPendingMonth(meterNo);
	 return cd;
 }
 
 
 //Monthly Bill Amount Start Here
 
 @GetMapping(value="/januaryTotal/{january}/{meterNo}")
	public MonthChart januaryTotal(@PathVariable("january") String january, @PathVariable("meterNo") String meterNo) {
	 MonthChart cd;
	 CstmDashboardDA dd = new CstmDashboardDA();
		cd= dd.selectTotalJanuary(january,meterNo);
		return cd;
	}

@GetMapping(value="/februaryTotal/{february}/{meterNo}")
	public MonthChart februaryTotal(@PathVariable("february") String february, @PathVariable("meterNo") String meterNo) {
	 MonthChart cd;
	 CstmDashboardDA dd = new CstmDashboardDA();
		cd= dd.selectTotalFebruary(february,meterNo);
		return cd;
	}

@GetMapping(value="/marchTotal/{march}/{meterNo}")
	public MonthChart marchTotal(@PathVariable("march") String march, @PathVariable("meterNo") String meterNo) {
	 MonthChart cd;
	 CstmDashboardDA dd = new CstmDashboardDA();
		cd= dd.selectTotalMarch(march,meterNo);
		return cd;
	}

@GetMapping(value="/aprilTotal/{april}/{meterNo}")
	public MonthChart aprilTotal(@PathVariable("april") String april, @PathVariable("meterNo") String meterNo) {
	 MonthChart cd;
	 CstmDashboardDA dd = new CstmDashboardDA();
		cd= dd.selectTotalApril(april,meterNo);
		return cd;
	}

@GetMapping(value="/mayTotal/{may}/{meterNo}")
	public MonthChart mayTotal(@PathVariable("may") String may, @PathVariable("meterNo") String meterNo) {
	 MonthChart cd;
	 CstmDashboardDA dd = new CstmDashboardDA();
		cd= dd.selectTotalMay(may,meterNo);
		return cd;
	}

@GetMapping(value="/juneTotal/{june}/{meterNo}")
	public MonthChart juneTotal(@PathVariable("june") String june, @PathVariable("meterNo") String meterNo) {
	 MonthChart cd;
	 CstmDashboardDA dd = new CstmDashboardDA();
		cd= dd.selectTotalJune(june,meterNo);
		return cd;
	}

@GetMapping(value="/julyTotal/{july}/{meterNo}")
	public MonthChart julyTotal(@PathVariable("july") String july, @PathVariable("meterNo") String meterNo) {
	 MonthChart cd;
	 CstmDashboardDA dd = new CstmDashboardDA();
		cd= dd.selectTotalJuly(july,meterNo);
		return cd;
	}

@GetMapping(value="/augustTotal/{august}/{meterNo}")
	public MonthChart augustTotal(@PathVariable("august") String august, @PathVariable("meterNo") String meterNo) {
	 MonthChart cd;
	 CstmDashboardDA dd = new CstmDashboardDA();
		cd= dd.selectTotalAugust(august,meterNo);
		return cd;
	}

@GetMapping(value="/septemberTotal/{september}/{meterNo}")
	public MonthChart septemberTotal(@PathVariable("september") String september, @PathVariable("meterNo") String meterNo) {
	 MonthChart cd;
	 CstmDashboardDA dd = new CstmDashboardDA();
		cd= dd.selectTotalSeptember(september,meterNo);
		return cd;
	}

@GetMapping(value="/octoberTotal/{october}/{meterNo}")
	public MonthChart octoberTotal(@PathVariable("october") String october, @PathVariable("meterNo") String meterNo) {
	 MonthChart cd;
	 CstmDashboardDA dd = new CstmDashboardDA();
		cd= dd.selectTotalOctober(october,meterNo);
		return cd;
	}

@GetMapping(value="/novemberTotal/{november}/{meterNo}")
	public MonthChart novemberTotal(@PathVariable("november") String november, @PathVariable("meterNo") String meterNo) {
	 MonthChart cd;
	 CstmDashboardDA dd = new CstmDashboardDA();
		cd= dd.selectTotalNovember(november,meterNo);
		return cd;
	}

@GetMapping(value="/decemberTotal/{december}/{meterNo}")
	public MonthChart decemberTotal(@PathVariable("december") String december, @PathVariable("meterNo") String meterNo) {
	 MonthChart cd;
	 CstmDashboardDA dd = new CstmDashboardDA();
		cd= dd.selectTotalDecember(december,meterNo);
		return cd;
	}

//Monthly Bill Amount End Here
}
