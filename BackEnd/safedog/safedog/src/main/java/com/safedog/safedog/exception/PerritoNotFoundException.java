package com.safedog.safedog.exception;

public class PerritoNotFoundException extends RuntimeException {
	
	private static final long serialVersionUID=1L;
	
	public PerritoNotFoundException(Long idPerrito) {
		super("El perrito con el Id: "+ idPerrito + " no existe");
	}
}
