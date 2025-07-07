package com.backend.orderservice.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductDto {
    private String product_name;
    private int product_price;
    private String product_description;
    private List<Byte> product_image;
    private int product_quantity;
    private String product_sku;

    public String getProduct_sku() {
        return product_sku;
    }

    public int getProduct_quantity() {
        return product_quantity;
    }
}
