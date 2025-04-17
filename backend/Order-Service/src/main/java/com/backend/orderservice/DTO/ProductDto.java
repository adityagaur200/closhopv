package com.backend.orderservice.DTO;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class ProductDto
{
    private String product_name;
    private int product_price;
    private String product_description;
    private List<Byte> product_image;
    private int product_quantity;
    private String product_sku;


    public int getProduct_price() {
        return product_price;
    }

    public String getProduct_description() {
        return product_description;
    }

    public List<Byte> getProduct_image() {
        return product_image;
    }

    public String getProduct_name() {
        return product_name;
    }

    public int getProduct_quantity() {
        return product_quantity;
    }

    public String getProduct_sku(String productSku) {
        return product_sku;
    }
}
