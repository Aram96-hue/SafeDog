package com.safedog.safedog.exception;

public class ContactoDeEmergenciaException  extends RuntimeException {
	
	   /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ContactoDeEmergenciaException(Long id) {
	        super("El contacto de emergencia con el Id: " + id + " no existe." );
	    }
}
