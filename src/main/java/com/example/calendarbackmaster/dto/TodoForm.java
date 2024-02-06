package com.example.calendarbackmaster.dto;

import com.example.calendarbackmaster.entity.Todo;
import lombok.AllArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@ToString
public class TodoForm {
    private Long id;
//    private Long year;
//    private Long month;
//    private Long day;
    private String title;
    private String content;

    public Todo toEntity() {
        return new Todo(id,title, content);
    }
}
