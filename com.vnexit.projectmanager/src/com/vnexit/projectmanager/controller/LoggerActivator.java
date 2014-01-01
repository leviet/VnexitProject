package com.vnexit.projectmanager.controller;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

public class LoggerActivator {
	private static final Logger log = Logger.getLogger(LoggerActivator.class);

	public LoggerActivator() {

	}

	public void startConfigLog() {
		PropertyConfigurator.configure("log4j.properties");
	}
}
