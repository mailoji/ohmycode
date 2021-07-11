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
public interface UserRepository extends CrudRepository<User, Integer> {

    List<User> findAll();

    User findByid(int id);

    User save(User u);

    void delete(User u);

}
