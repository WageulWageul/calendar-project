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
//    @Column
//    private Long year;
//    @Column
//    private Long month;
//    @Column
//    private Long day;
    @Column
    private String title;
    @Column
    private String content;

    public void patch(Todo todo) {
//        if(todo.year != null)
//            this.year = todo.year;
//        if(todo.month != null)
//            this.month = todo.month;
//        if(todo.day != null)
//            this.day = todo.day;
        if(todo.title != null)
            this.title = todo.title;
        if(todo.content != null)
            this.content = todo.content;
    }
}
