package com.safedog.safedog.exception;

public class DuenioNotFoundException extends RuntimeException {
	
	public DuenioNotFoundException(String correo){
	     super("El dueño con el correo: " + correo + "no existe.");
	}

}
