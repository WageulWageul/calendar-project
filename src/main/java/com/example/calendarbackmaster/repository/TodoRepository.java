package com.example.calendarbackmaster.repository;

import com.example.calendarbackmaster.entity.Todo;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;

public interface TodoRepository extends CrudRepository<Todo, Long> {
    @Override
    ArrayList<Todo> findAll();
}
