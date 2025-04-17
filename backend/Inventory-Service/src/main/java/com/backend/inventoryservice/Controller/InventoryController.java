package com.backend.inventoryservice.Controller;

import com.backend.inventoryservice.Model.Inventory;
import com.backend.inventoryservice.Repository.InventoryRepository;
import com.backend.inventoryservice.Service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@CrossOrigin
public class InventoryController
{
    @Autowired
    private InventoryService inventoryService;

    @GetMapping()
    public List<Inventory> isInStock(@RequestParam String skuCode)
    {
        return inventoryService.isInStock(skuCode);
    }

}
