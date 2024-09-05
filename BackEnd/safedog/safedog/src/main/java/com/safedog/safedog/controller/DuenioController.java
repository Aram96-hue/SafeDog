package com.safedog.safedog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.safedog.safedog.dto.DuenioDTO;
import com.safedog.safedog.exception.DuenioNotFoundException;
import com.safedog.safedog.model.ContactoDeEmergencia;
import com.safedog.safedog.model.Duenio;
import com.safedog.safedog.model.Perrito;
import com.safedog.safedog.service.DuenioService;

@RestController
@RequestMapping("/api/safedog/duenios")
public class DuenioController {

private DuenioService duenioService;
	
	@Autowired
	public DuenioController(DuenioService duenioService) {
		this.duenioService= duenioService;
	}
	
	@GetMapping("/listado")
	public List<Duenio> getMappingAll() {
		return duenioService.getAll();
	}
		
	
	@GetMapping("/duenio/correo")
		public ResponseEntity<Duenio> getByEmail(@RequestParam(name="correo")String correo){
			Duenio duenioByEmail = duenioService.getByEmail(correo);
			if(duenioByEmail == null) {
			     throw new DuenioNotFoundException(correo);
			}
			return new ResponseEntity<Duenio>(duenioByEmail, HttpStatus.OK);
			
		}

	//Mapear método post que reciba un nuevo objeto y que reciba el body del mismo.
	 @PostMapping
		public Duenio newDuenio (@RequestBody DuenioDTO duenioDTO) {
		 Perrito perrito = duenioService.getPerrito(duenioDTO.getPerrito());
		 ContactoDeEmergencia contactoE = duenioService.getContactoDeEmergencia(duenioDTO.getContactoDeEmergencia());
		 Duenio newDuenio = new Duenio();
		 newDuenio.setIdDuenio(duenioDTO.getIdDuenio());
		 newDuenio.setNombre(duenioDTO.getNombre());
		 newDuenio.setApellido(duenioDTO.getApellido());
		 newDuenio.setIdDuenio(duenioDTO.getIdDuenio());
		 newDuenio.setTelefono(duenioDTO.getTelefono());
		 newDuenio.setCorreo(duenioDTO.getCorreo());
		 newDuenio.setContrasenia(duenioDTO.getContrasenia());
		 newDuenio.setDireccion(duenioDTO.getDireccion());
		 newDuenio.setUrlFoto(duenioDTO.getUrlFoto());
		 newDuenio.setPerrito(perrito);
		 newDuenio.setContactoDeEmergencia(contactoE);
		 
		 return duenioService.createDuenio(newDuenio);
		}
	
}
