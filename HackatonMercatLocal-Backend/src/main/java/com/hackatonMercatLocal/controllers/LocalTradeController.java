package com.hackatonMercatLocal.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/localtrade")
public class LocalTradeController {
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	@GetMapping("/{neighborhood}")
	@CrossOrigin
	public Map<String, Object> getNeighborhood(@PathVariable String neighborhood) {

		String query = "select * from Neighborhood where name='"+neighborhood+"';";

		Map<String, Object> results = jdbcTemplate.queryForMap(query);

		return results;
	}
	@GetMapping("/getAllNeighborhoods")
	@CrossOrigin
	public List<Map<String, Object>> getAllNeighborhood() {

		String query = "select name  from Neighborhood;";

		List<Map<String, Object>> results = jdbcTemplate.queryForList(query);

		return results;
	}

}
