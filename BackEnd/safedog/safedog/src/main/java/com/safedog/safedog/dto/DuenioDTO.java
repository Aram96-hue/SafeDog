package com.safedog.safedog.dto;

import jakarta.persistence.Column;

public class DuenioDTO {


	private Integer idDuenio;
	
	private String nombre;
	
    private String apellido;

    private String telefono;

    private String correo;
  
    private String contrasenia;

    private String direccion;

    private String urlFoto;
    
    private Long perrito;
    
    private Long contactoDeEmergencia;
    
    
 
	public Integer getIdDuenio() {
		return idDuenio;
	}

	public void setIdDuenio(Integer idDuenio) {
		this.idDuenio = idDuenio;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public String getContrasenia() {
		return contrasenia;
	}

	public void setContrasenia(String contrasenia) {
		this.contrasenia = contrasenia;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getUrlFoto() {
		return urlFoto;
	}

	public void setUrlFoto(String urlFoto) {
		this.urlFoto = urlFoto;
	}

	public Long getPerrito() {
		return perrito;
	}

	public void setPerrito(Long perrito) {
		this.perrito = perrito;
	}

	public Long getContactoDeEmergencia() {
		return contactoDeEmergencia;
	}

	public void setContactoDeEmergencia(Long contactoDeEmergencia) {
		this.contactoDeEmergencia = contactoDeEmergencia;
	}
    
    
	
}
