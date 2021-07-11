/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.omc.omc;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Ailoji
 */
@Service
public class TodoServiceImp implements TodoService {
    
    @Autowired
    private TodoRepository repository;
    
    @Override
    public List<Todo> listar() {
        return repository.findAll();
    }
    
    @Override
    public Todo listarId(int id) {
        return repository.findByid(id);
    }
    
    @Override
    public Todo add(Todo t) {
        return repository.save(t);
    }
    
    @Override
    public Todo edit(Todo t) {
        return repository.save(t);
    }
    
    @Override
    public Todo delete(int id) {
        Todo t = repository.findByid(id);
        if (t!=null){
            repository.delete(t);
        }
        return t;
    }
    
}
