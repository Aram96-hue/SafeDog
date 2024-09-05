package com.safedog.safedog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.safedog.safedog.model.Perrito;

public interface PerritoRepository extends JpaRepository<Perrito, Long> {

}
