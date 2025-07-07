package com.backend.inventoryservice.DTO;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class InventoryDTO {
    private String skuCode;
    public boolean isInStock;

}
