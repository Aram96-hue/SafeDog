package com.safedog.safedog.model;

import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Contactos_Emergencia")
public class ContactoDeEmergencia {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_contacto_emergencia")
	private Integer idContactoEmergencia;
	@Column(name = "nombre", length = 100, nullable = false, unique = false)
	private String nombre;
	@Column(name = "telefono", length = 12, nullable = false, unique = true)
	private String telefono;
	@Column(name = "apellido", length = 100, nullable = false, unique = true)
	private String apellido;
	@Column(name = "correo", length = 100, nullable = false, unique = true)
	private String correo;
	
	public ContactoDeEmergencia() {
		
	}

	public ContactoDeEmergencia(Integer idContactoEmergencia, String nombre, String telefono, String apellido,
			String correo) {
		this.idContactoEmergencia = idContactoEmergencia;
		this.nombre = nombre;
		this.telefono = telefono;
		this.apellido = apellido;
		this.correo = correo;
	}

	public Integer getIdContactoEmergencia() {
		return idContactoEmergencia;
	}

	public void setIdContactoEmergencia(Integer idContactoEmergencia) {
		this.idContactoEmergencia = idContactoEmergencia;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	@Override
	public String toString() {
		return "ContactoDeEmergencia [idContactoEmergencia=" + idContactoEmergencia + ", nombre=" + nombre
				+ ", telefono=" + telefono + ", apellido=" + apellido + ", correo=" + correo + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(apellido, correo, idContactoEmergencia, nombre, telefono);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ContactoDeEmergencia other = (ContactoDeEmergencia) obj;
		return Objects.equals(apellido, other.apellido) && Objects.equals(correo, other.correo)
				&& Objects.equals(idContactoEmergencia, other.idContactoEmergencia)
				&& Objects.equals(nombre, other.nombre) && Objects.equals(telefono, other.telefono);
	}
	
}
