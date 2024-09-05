package com.safedog.safedog.model;

import java.util.List;
import java.util.Objects;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "duenios")
public class Duenio {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_dueño")
	private Integer idDuenio;
	@Column(name = "nombre", length = 100, nullable = false, unique = false)
	private String nombre;
	
    @Column(name = "apellido", length = 100, nullable = false, unique = false)
    private String apellido;

    @Column(name = "telefono", length = 12, nullable = false, unique = true)
    private String telefono;

    @Column(name = "correo", length = 100, nullable = false , unique = true)
    private String correo;

    @Column(name = "contraseña", length = 50, nullable = false , unique = false)
    private String contrasenia;

    @Column(name = "direccion", length = 255, nullable = false, unique = false)
    private String direccion;

    @Column(name = "url_foto", length = 255, nullable = false, unique = true)
    private String urlFoto;
	
	//Definir las relaciones (1:1) One to One Un Duenio puede tener una sola mascota
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="Perritos_id_perrito", nullable= false)
	private Perrito perrito;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="Contactos_Emergencia_id_contacto_emergencia", nullable= false)
	private ContactoDeEmergencia contactoDeEmergencia;
	
	
    
    
	public Duenio() {
	}

	
	



	public Duenio(Integer idDuenio, String nombre, String apellido, String telefono, String correo, String contrasenia,
			String direccion, String urlFoto, Perrito perrito, ContactoDeEmergencia contactoDeEmergencia) {
		this.idDuenio = idDuenio;
		this.nombre = nombre;
		this.apellido = apellido;
		this.telefono = telefono;
		this.correo = correo;
		this.contrasenia = contrasenia;
		this.direccion = direccion;
		this.urlFoto = urlFoto;
		this.perrito = perrito;
		this.contactoDeEmergencia = contactoDeEmergencia;
	}






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


	public Perrito getPerrito() {
		return perrito;
	}


	public void setPerrito(Perrito perrito) {
		this.perrito = perrito;
	}


	public ContactoDeEmergencia getContactoDeEmergencia() {
		return contactoDeEmergencia;
	}


	public void setContactoDeEmergencia(ContactoDeEmergencia contactoDeEmergencia) {
		this.contactoDeEmergencia = contactoDeEmergencia;
	}






	@Override
	public String toString() {
		return "Duenio [idDuenio=" + idDuenio + ", nombre=" + nombre + ", apellido=" + apellido + ", telefono="
				+ telefono + ", correo=" + correo + ", contrasenia=" + contrasenia + ", direccion=" + direccion
				+ ", urlFoto=" + urlFoto + ", perrito=" + perrito + ", contactoDeEmergencia=" + contactoDeEmergencia
				+ "]";
	}






	@Override
	public int hashCode() {
		return Objects.hash(apellido, contactoDeEmergencia, contrasenia, correo, direccion, idDuenio, nombre, perrito,
				telefono, urlFoto);
	}






	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Duenio other = (Duenio) obj;
		return Objects.equals(apellido, other.apellido)
				&& Objects.equals(contactoDeEmergencia, other.contactoDeEmergencia)
				&& Objects.equals(contrasenia, other.contrasenia) && Objects.equals(correo, other.correo)
				&& Objects.equals(direccion, other.direccion) && Objects.equals(idDuenio, other.idDuenio)
				&& Objects.equals(nombre, other.nombre) && Objects.equals(perrito, other.perrito)
				&& Objects.equals(telefono, other.telefono) && Objects.equals(urlFoto, other.urlFoto);
	}



	
}
