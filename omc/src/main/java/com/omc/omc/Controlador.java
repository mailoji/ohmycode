/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.omc.omc;

import com.google.gson.Gson;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Ailoji
 */
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/todos"})
public class Controlador {

    Gson gson = new Gson();

    @Autowired
    TodoService service;

    @GetMapping
    public List<Todo> listar() {
        return service.listar();
    }

    @PostMapping
    public Todo agregar(@RequestBody Todo t) {
        return service.add(t);
    }

    @GetMapping(path = {"/{id}"})
    public Todo listarId(@PathVariable("id") int id) {
        return service.listarId(id);
    }

    @PutMapping(path = {"/{id}"})
    public Todo editar(@RequestBody Todo t, @PathVariable("id") int id) {
        t.setId(id);
        return service.edit(t);
    }

    @DeleteMapping(path = {"/{id}"})
    public Todo delete(@PathVariable("id") int id) {
        return service.delete(id);
    }
}
