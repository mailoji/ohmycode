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
public interface UserService {

    List<User> listar();

    User listarId(int id);

    User add(User u);

    User edit(User u);

    User delete(int id);

}
