package com.example.calendarbackmaster.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String title;
    @Column
    private String content;
    @Column
    private String date;
    @Column
    private String hour;
    @Column
    private String minute;

    public void patch(Todo todo) {
        if(todo.title != null)
            this.title = todo.title;
        if(todo.content != null)
            this.content = todo.content;
        if(todo.date != null)
            this.date = todo.date;
        if(todo.hour != null)
            this.hour = todo.hour;
        if(todo.minute != null)
            this.minute = todo.minute;
    }
}
