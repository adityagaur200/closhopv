package com.backend.productservice.Repository;

import com.backend.productservice.Model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends MongoRepository<Product, String>
{
    @Query("{'product_sku': ?0}")
    List<Product> findByproduct_sku(String product_sku);
    @Query("{'product_name': ?0}")
    Product findByproduct_name(String product_name);
    Optional<Product> findById(int id);

}
