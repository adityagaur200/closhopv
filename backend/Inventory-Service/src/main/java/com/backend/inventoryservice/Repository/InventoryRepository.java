package com.backend.inventoryservice.Repository;

import com.backend.inventoryservice.Model.Inventory;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Repository
public interface InventoryRepository extends MongoRepository<Inventory, String>  {
    List<Inventory> findBySkuCode(List<String> skuCode);
}
