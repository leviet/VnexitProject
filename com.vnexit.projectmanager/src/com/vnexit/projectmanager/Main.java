package com.vnexit.projectmanager;

import com.vnexit.projectmanager.controller.LoggerActivator;

public class Main {

	public static void main(String[] args) {
		LoggerActivator logger = new LoggerActivator();
		logger.startConfigLog();
	}

}
