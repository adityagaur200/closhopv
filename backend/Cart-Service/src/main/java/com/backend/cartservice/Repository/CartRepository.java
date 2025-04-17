package com.backend.cartservice.Repository;

import com.backend.cartservice.Model.Cart;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepository extends MongoRepository<Cart, String> {
    List<Cart> findById(int customerId);
}
