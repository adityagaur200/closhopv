package com.backend.inventoryservice.Controller;

import com.backend.inventoryservice.DTO.InventoryDTO;
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
    public List<InventoryDTO> isInStock(@RequestParam List<String> skuCode)
    {
        return inventoryService.isInStock(skuCode);
    }
}
