package com.vnexit.projectmanager.persistence;

import com.vnexit.projectmanager.datamodel.User;

public interface Login {
	public boolean checkLogin(User u);

	public String getUserDetail(String key);
}
