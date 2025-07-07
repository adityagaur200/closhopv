package com.backend.inventoryservice.Service;

import com.backend.inventoryservice.DTO.InventoryDTO;
import com.backend.inventoryservice.Repository.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InventoryService {
    @Autowired
    private InventoryRepository inventoryRepository;

    public List<InventoryDTO> isInStock(List<String> skuCode)
    {
        return inventoryRepository.findBySkuCode(skuCode).stream().map(
                inventory -> InventoryDTO.builder().skuCode(inventory.getSkuCode())
                        .isInStock(inventory.getQuantity()>0)
                        .build()).toList();
    }
}
