package com.vnexit.projectmanager.datamodel;

import java.util.ArrayList;
import java.util.List;

import com.google.appengine.api.datastore.Entity;
import com.vnexit.projectmanager.dao.DataService;


public class User {
	
	public static Entity createOrUpdateUser(String username, String password,
			String role) {
		Entity user = getSingleUser(username,password);
		if(user == null){
		  user = new Entity("User");
		  user.setProperty("UserName", username);
		  user.setProperty("PassWord", password);
		  user.setProperty("Role", role);
		} else{
		  if (username != null && !"".equals(username)) {
			user.setProperty("UserName", username);
		  }	
		  if (password != null && !"".equals(password)) {
		    user.setProperty("PassWord", password);
		  }
		  if (role != null && !"".equals(role)) {
			user.setProperty("Role", role);
		  } 
		}
		DataService.persistEntity(user);
		return user;
	}
	
	public static Iterable<Entity> getAllUser() {
		Iterable<Entity> entities = DataService.listEntities("User", null, null);
		return entities;
	}
	
	public static Boolean CheckUser(String username,String password){
		Iterable<Entity> results = DataService.listEntities("User", "UserName", username);
		List<Entity> entity = new ArrayList<Entity>();
		for(Entity e : results) {
			if(e!=null) {
				if (e.getProperty("PassWord").toString().equals(password)) {
					return true;
				}	
			}		
		}
		return false;
	}
	
	public static Entity getSingleUser(String username,String password) {
		Iterable<Entity> results = DataService.listEntities("User", "UserName", username);
		List<Entity> entity = new ArrayList<Entity>();
		for(Entity e : results) {
			if(e!=null) {
				if (e.getProperty("PassWord").toString().equals(password)) {
					entity.add(e);
				}	
			}		
		}		
		if (!entity.isEmpty()) {
			return (Entity)entity.remove(0);
		}
		return null;
	}
}
