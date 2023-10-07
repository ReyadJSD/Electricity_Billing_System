package com.example.demo.dashbord;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins="http://localhost:4200")
@RestController
public class DashboardController {
	@GetMapping(value="/rowcount")
	public Dashboard getAllRowCount() {
		Dashboard d;
		DashboardDA dd = new DashboardDA();
		d= dd.countAllCustomer();
		return d;
	}
	
	@GetMapping(value="/residentilarowcount/{residential}")
	public Dashboard getResidentialRowCount(@PathVariable("residential") String residential) {
		Dashboard d;
		DashboardDA dd = new DashboardDA();
		d= dd.countResidentialCustomer(residential);
		return d;
	}
	
	@GetMapping(value="/businessrowcount/{business}")
	public Dashboard getBusinessRowCount(@PathVariable("business") String business) {
		Dashboard d;
		DashboardDA dd = new DashboardDA();
		d= dd.countBusinessCustomer(business);
		return d;
	}
	
	@GetMapping(value="/smallindustryrowcount/{smallIndustry}")
	public Dashboard getSmallIndustrialRowCount(@PathVariable("smallIndustry") String smallIndustry) {
		Dashboard d;
		DashboardDA dd = new DashboardDA();
		d= dd.countSmallIndustrialCustomer(smallIndustry);
		return d;
	}
	
	@GetMapping(value="/earnings/{totalEarning}")
	public Dashboard getTotalEarnings(@PathVariable("totalEarning") String totalEarning) {
		Dashboard d;
		DashboardDA dd = new DashboardDA();
		d= dd.countEarnings(totalEarning);
		return d;
	}
	
	@GetMapping(value="/pendingEarnings/{pendingEarning}")
	public Dashboard getPendingBills(@PathVariable("pendingEarning") String pendingEarning) {
		Dashboard d;
		DashboardDA dd = new DashboardDA();
		d= dd.countPendingEarnings(pendingEarning);
		return d;
	}
	
	@GetMapping(value="/pendingBillsRow/{pendingBills}")
	public Dashboard getPendingBillsRows(@PathVariable("pendingBills") String pendingBills) {
		Dashboard d;
		DashboardDA dd = new DashboardDA();
		d= dd.countPendingBills(pendingBills);
		return d;
	}
}
