package com.example.calendarbackmaster.dto;

import com.example.calendarbackmaster.entity.Todo;
import lombok.AllArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@ToString
public class TodoForm {
    private Long id;
    private String title;
    private String content;
    private String date;
    private String hour;
    private String minute;

    public Todo toEntity() {
        return new Todo(id, title, content, date, hour, minute);
    }
}
