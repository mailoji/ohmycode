/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.omc.omc;

import javax.persistence.*;

/**
 *
 * @author Ailoji
 */
@Entity
@Table(name = "todo")
public class Todo {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    @JoinColumn(name = "user")
    private User user;
    @Column
    private String title;
    @Column
    private boolean completed;

    public Todo() {
    }

    public Todo(int id, User user, String title, boolean completed) {
        this.id = id;
        this.user = user;
        this.title = title;
        this.completed = completed;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

}
