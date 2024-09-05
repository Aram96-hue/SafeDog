package com.safedog.safedog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.safedog.safedog.model.ContactoDeEmergencia;
import com.safedog.safedog.service.ContactoDeEmergenciaService;

@RestController
@RequestMapping("/api/safedog")
public class ContactoDeEmergenciaController {
	
	private ContactoDeEmergenciaService contactoDeEmergenciaService;
	
	@Autowired
	public ContactoDeEmergenciaController (ContactoDeEmergenciaService contactoDeEmergenciaService) {
		this.contactoDeEmergenciaService = contactoDeEmergenciaService;
	}
	
	@GetMapping("/contactoE")
	public List< ContactoDeEmergencia> getMappingAll(){
		return contactoDeEmergenciaService.getMappingAll();
	}
	
	@PostMapping
	public ContactoDeEmergencia newContactoDeEmergencia(@RequestBody ContactoDeEmergencia contactoDeEmergencia) {
		return contactoDeEmergenciaService.createContactoDeEmergencia(contactoDeEmergencia);
	}
	
}
