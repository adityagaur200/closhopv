package com.backend.inventoryservice.Service;

import com.backend.inventoryservice.Model.Inventory;
import com.backend.inventoryservice.Repository.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InventoryService {
    @Autowired
    private InventoryRepository inventoryRepository;

    public List<Inventory> isInStock(String skuCode)
    {
        return
    }
}
