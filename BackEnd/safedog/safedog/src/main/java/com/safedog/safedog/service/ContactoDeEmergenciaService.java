package com.safedog.safedog.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.safedog.safedog.model.ContactoDeEmergencia;
import com.safedog.safedog.repository.ContactoDeEmergenciaRepository;

@Service
public class ContactoDeEmergenciaService {

	private ContactoDeEmergenciaRepository contactoDeEmergenciaRepository;
	
	@Autowired
	public ContactoDeEmergenciaService(ContactoDeEmergenciaRepository contactoDeEmergenciaRepository) {
		this.contactoDeEmergenciaRepository = contactoDeEmergenciaRepository;
	}
	
	public List<ContactoDeEmergencia> getMappingAll(){
		return contactoDeEmergenciaRepository.findAll();
	}
	
	public ContactoDeEmergencia createContactoDeEmergencia(ContactoDeEmergencia newContactoDeEmergencia) {
		return contactoDeEmergenciaRepository.save(newContactoDeEmergencia);
		}
	
	
}
