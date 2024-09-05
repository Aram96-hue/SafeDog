package com.safedog.safedog.model;

import java.util.List;
import java.util.Objects;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Perritos")
public class Perrito {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_perrito")
	private Integer idPerrito;
	@Column(name = "nombre", length = 100, nullable = false, unique = false)
	private String nombre;
	@Column(name = "tamaño", nullable = false, unique = false)
	private String tamanio;
	@Column(name = "raza", length = 100, nullable = false, unique = false)
	private String raza;
	@Column(name = "año", nullable = false, unique = false)
	private Integer anio;
	@Column(name = "mes", nullable = false, unique = false)
	private Integer mes;
	@Column(name = "genero", nullable = false, unique = false)
	private String genero;
	@Column(name = "url_foto", length = 255, nullable = false, unique = false)
	private String urlFoto;
	
	public Perrito() {
	}

	public Perrito(Integer idPerrito, String nombre, String tamanio, String raza, Integer anio, Integer mes,
			String genero, String urlFoto) {
		this.idPerrito = idPerrito;
		this.nombre = nombre;
		this.tamanio = tamanio;
		this.raza = raza;
		this.anio = anio;
		this.mes = mes;
		this.genero = genero;
		this.urlFoto = urlFoto;
	}
	
	
	public Integer getIdPerrito() {
		return idPerrito;
	}



	public void setIdPerrito(Integer idPerrito) {
		this.idPerrito = idPerrito;
	}



	public String getNombre() {
		return nombre;
	}



	public void setNombre(String nombre) {
		this.nombre = nombre;
	}



	public String getTamanio() {
		return tamanio;
	}



	public void setTamanio(String tamanio) {
		this.tamanio = tamanio;
	}



	public String getRaza() {
		return raza;
	}



	public void setRaza(String raza) {
		this.raza = raza;
	}



	public Integer getAnio() {
		return anio;
	}



	public void setAnio(Integer anio) {
		this.anio = anio;
	}



	public Integer getMes() {
		return mes;
	}



	public void setMes(Integer mes) {
		this.mes = mes;
	}



	public String getGenero() {
		return genero;
	}



	public void setGenero(String genero) {
		this.genero = genero;
	}



	public String getUrlFoto() {
		return urlFoto;
	}



	public void setUrlFoto(String urlFoto) {
		this.urlFoto = urlFoto;
	}



	@Override
	public String toString() {
		return "Perrito [idPerrito=" + idPerrito + ", nombre=" + nombre + ", tamanio=" + tamanio + ", raza=" + raza
				+ ", anio=" + anio + ", mes=" + mes + ", genero=" + genero + ", urlFoto=" + urlFoto + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(anio, genero, idPerrito, mes, nombre, raza, tamanio, urlFoto);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Perrito other = (Perrito) obj;
		return anio == other.anio && genero == other.genero && Objects.equals(idPerrito, other.idPerrito)
				&& mes == other.mes && Objects.equals(nombre, other.nombre) && Objects.equals(raza, other.raza)
				&& tamanio == other.tamanio && Objects.equals(urlFoto, other.urlFoto);
	}
		
}
