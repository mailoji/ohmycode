/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.omc.omc;

import java.util.List;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author Ailoji
 */
public interface TodoRepository extends CrudRepository<Todo, Integer> {

    List<Todo> findAll();

    Todo findByid(int id);

    Todo save(Todo t);

    void delete(Todo t);

}
