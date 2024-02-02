package com.example.calendarbackmaster.api;

import com.example.calendarbackmaster.dto.TodoForm;
import com.example.calendarbackmaster.entity.Todo;
import com.example.calendarbackmaster.repository.TodoRepository;
import com.example.calendarbackmaster.service.TodoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
public class TodoApiController {
    @Autowired
    private TodoService todoService;

    //GET
    @GetMapping("/api/todos") //모든 데이터 조회요청
    public List<Todo> index() {
        return todoService.index();
    }

    @GetMapping("/api/todos/{id}") //단일 데이터 조회 요청
    public Todo show(@PathVariable Long id) {
        return todoService.show(id);
    }

    //POST
    @PostMapping("/api/todos") //생성 요청
    public ResponseEntity<Todo> create(@RequestBody TodoForm dto) {
        Todo created = todoService.create(dto);
        return (created != null) ?
                ResponseEntity.status(HttpStatus.OK).body(created) :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }

    //PATCH
    @PatchMapping("/api/todos/{id}") //수정 요청
    public ResponseEntity<Todo> update(@PathVariable Long id, @RequestBody TodoForm dto) {
        Todo updated = todoService.update(id, dto);
        return (updated != null) ?
                ResponseEntity.status(HttpStatus.OK).body(updated) :
                ResponseEntity.status((HttpStatus.BAD_REQUEST)).body(null);
    }

    //DELETE
    @DeleteMapping("/api/todos/{id}") //삭제 요청
    public ResponseEntity<Todo> delete(@PathVariable Long id){
        Todo deleted = todoService.delete(id);
        return (deleted != null) ?
                ResponseEntity.status(HttpStatus.NO_CONTENT).build():
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
}
