package com.sergio.crud.backend.repositories;

import com.sergio.crud.backend.entities.DisasterEvent; // Import DisasterEvent
import org.springframework.data.jpa.repository.JpaRepository;

public interface DisasterEventRepository extends JpaRepository<DisasterEvent, Long> {
    // Add any custom query methods you might need here
}
