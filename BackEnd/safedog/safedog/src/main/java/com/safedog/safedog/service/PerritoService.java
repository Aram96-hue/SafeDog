package com.safedog.safedog.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.safedog.safedog.exception.PerritoNotFoundException;
import com.safedog.safedog.model.ContactoDeEmergencia;
import com.safedog.safedog.model.Perrito;
import com.safedog.safedog.repository.PerritoRepository;

@Service
public class PerritoService {
	// Mando a llamar UserRepository
		private PerritoRepository perritoRepository;
		
		@Autowired
		public PerritoService (PerritoRepository perritoRepository) {
			this.perritoRepository  = perritoRepository;
		}
		
		
	//Método para obtener todos los perritos
		public List <Perrito> getAll(){
			return perritoRepository.findAll();
		}
		
		public Perrito createPerrito(Perrito newPerrito) {
			return perritoRepository.save(newPerrito);
			}

		
		//Método para actualizar información de perrito, permitiendo modificar todos lo campos (nombre, tamanio, raza, anio, mes, genero, urlFoto)
		public Perrito updatePerrito(Perrito perrito, Long idPerrito) {
			return perritoRepository.findById(idPerrito)
					.map(perritoMap ->{
						perritoMap.setNombre(perrito.getNombre());
						perritoMap.setTamanio(perrito.getTamanio());
						perritoMap.setRaza(perrito.getRaza());
						perritoMap.setAnio(perrito.getAnio());
						perritoMap.setMes(perrito.getMes());
						perritoMap.setGenero(perrito.getGenero());
						perritoMap.setUrlFoto(perrito.getUrlFoto());
						return perritoRepository.save(perritoMap);			
					})
					.orElseThrow(()-> new PerritoNotFoundException(idPerrito));
		}
		
		
		//Método para borrar un perrito por ID
		public void deletePerrito(Long idPerrito) {
			if(perritoRepository.existsById(idPerrito)) {
				perritoRepository.deleteById(idPerrito);
			}else {
				throw new PerritoNotFoundException(idPerrito);
			}	
		}
		

}
