package com.example.calendarbackmaster.service;

import com.example.calendarbackmaster.dto.TodoForm;
import com.example.calendarbackmaster.entity.Todo;
import com.example.calendarbackmaster.repository.TodoRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class TodoService {
    @Autowired
    private TodoRepository todoRepository;

    public List<Todo> index() {
        return todoRepository.findAll();
    }

    public Todo show(Long id) {
        return todoRepository.findById(id).orElse(null);
    }

    public Todo create(TodoForm dto) {
        Todo todo = dto.toEntity();
        if(todo.getId() != null){
            return null;
        }
        return todoRepository.save(todo);
    }

    public Todo update(Long id, TodoForm dto) {
        //1.DTO->엔티티 변환하기
        Todo todo = dto.toEntity();
        log.info("id: {}, todo: {}", id, todo.toString());
        //2. 타깃 조회하기
        Todo target = todoRepository.findById(id).orElse(null);
        //3. 잘못된 요청 처리하기
        if(target == null || id != todo.getId()){
            log.info("잘못된 요청! id: {}, todo: {}", id, todo.toString());
            return null;
        }
        //4. 업데이트 및 정상 응답(200)하기
        target.patch(todo);
        Todo updated = todoRepository.save(target);
        return updated;
    }

    public Todo delete(Long id) {
        //1. 대상 찾기
        Todo target = todoRepository.findById(id).orElse(null);
        //2. 잘못된 요청 처리하기
        if(target == null){
            return null;
        }
        //3. 대상 삭제하기
        todoRepository.delete(target);
        return target;
    }
}
