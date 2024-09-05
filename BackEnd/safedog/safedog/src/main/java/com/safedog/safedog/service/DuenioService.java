package com.safedog.safedog.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.safedog.safedog.dto.DuenioDTO;
import com.safedog.safedog.exception.ContactoDeEmergenciaException;
import com.safedog.safedog.exception.PerritoNotFoundException;
import com.safedog.safedog.model.ContactoDeEmergencia;
import com.safedog.safedog.model.Duenio;
import com.safedog.safedog.model.Perrito;
import com.safedog.safedog.repository.ContactoDeEmergenciaRepository;
import com.safedog.safedog.repository.DuenioRepository;
import com.safedog.safedog.repository.PerritoRepository;

@Service
public class DuenioService {

	// Mando a llamar UserRepository
			private DuenioRepository dueniosRepository;
			
			@Autowired
		
			private ContactoDeEmergenciaRepository contactoDeEmergenciaRepository;
			
			@Autowired
			private PerritoRepository  perritoRepository;
			
			@Autowired
			public DuenioService (DuenioRepository dueniosRepository) {
				this.dueniosRepository  = dueniosRepository;
			}
			
	
			
		//Método para obtener todos los dueños
			public List <Duenio> getAll(){
				return dueniosRepository.findAll();
			}
			
		//Método Post 
			public Duenio newDuenio(Duenio newDuenio) {
				return dueniosRepository.save(newDuenio);
			}
			
		
		//Método Get By email
			public Duenio getByEmail(String correo){
			     return dueniosRepository.findByEmail(correo);
			}
			
		//Método Post
			public Duenio createDuenio(Duenio duenio) {
				return dueniosRepository.save(duenio);
				}
			
			public Perrito getPerrito(Long id) {
				return perritoRepository.findById(id).orElseThrow(() -> new PerritoNotFoundException(id));
			}
			
			public ContactoDeEmergencia getContactoDeEmergencia(Long id) {
				return contactoDeEmergenciaRepository.findById(id).orElseThrow(() -> new ContactoDeEmergenciaException(id));
			}
			
			
}

