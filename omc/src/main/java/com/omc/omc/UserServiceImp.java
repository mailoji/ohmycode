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
public class UserServiceImp implements UserService {
    
    @Autowired
    private UserRepository repository;
    
    @Override
    public List<User> listar() {
        return repository.findAll();
    }
    
    @Override
    public User listarId(int id) {
        return repository.findByid(id);
    }
    
    @Override
    public User add(User u) {
        return repository.save(u);
    }
    
    @Override
    public User edit(User u) {
        return repository.save(u);
    }
    
    @Override
    public User delete(int id) {
        User u = repository.findByid(id);
        if (u!=null){
            repository.delete(u);
        }
        return u;
    }
    
}
