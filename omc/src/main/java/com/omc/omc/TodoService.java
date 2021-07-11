/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.omc.omc;

import java.util.List;

/**
 *
 * @author Ailoji
 */
public interface TodoService {

    List<Todo> listar();

    Todo listarId(int id);

    Todo add(Todo t);

    Todo edit(Todo t);

    Todo delete(int id);

}
