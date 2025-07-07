package com.backend.productservice.Model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
@Data
@AllArgsConstructor
@Getter
@Setter
@Builder
public class Product {
    @Id
    private String product_id;
    private String product_name;
    private int product_price;
    private String product_description;
    private String product_image;
    private int product_quantity;
    private String product_sku;

    public Product(ProductBuilder productBuilder) {
            this.product_id = productBuilder.product_id;
            this.product_name = productBuilder.product_name;
            this.product_price = productBuilder.product_price;
            this.product_description = productBuilder.product_description;
            this.product_quantity = productBuilder.product_quantity;
            this.product_sku = productBuilder.product_sku;
            this.product_image = productBuilder.product_image;
    }
    public Product()
    {

    }

    public int getProduct_price() {
        return product_price;
    }
    public void setProduct_price(int product_price) {
        this.product_price = product_price;
    }
    public String getProduct_description() {
        return product_description;
    }
    public void setProduct_description(String product_description) {
        this.product_description = product_description;
    }
    public String getProduct_image() {
        return product_image;
    }
    public void setProduct_image(String product_image) {
        this.product_image = product_image;
    }
    public String getProduct_name() {
        return product_name;
    }
    public void setProduct_name(String product_name) {
        this.product_name = product_name;
    }
    public String getProduct_id() {
        return product_id;
    }
    public void setProduct_id(String product_id) {
        this.product_id = product_id;
    }
    public int getProduct_quantity() {
        return product_quantity;
    }
    public void setProduct_quantity(int product_quantity) {
        this.product_quantity = product_quantity;
    }
    public String getProduct_sku() {
        return product_sku;
    }
    public void setProduct_sku(String product_sku) {
        this.product_sku = product_sku;
    }

    public String getId() {
            return null;
    }

    public static class ProductBuilder
    {
        private String product_id;
        private String product_name;
        private int product_price;
        private String product_description;
        private String product_image;
        private int product_quantity;
        private String product_sku;

        // ✅ Setters with proper naming
        public ProductBuilder setProduct_id(String product_id) {
            this.product_id = product_id;
            return this;
        }

        public ProductBuilder setProduct_name(String product_name) {
            this.product_name = product_name;
            return this;
        }

        public ProductBuilder setProduct_price(int product_price) {
            this.product_price = product_price;
            return this;
        }

        public ProductBuilder setProduct_description(String product_description) {
            this.product_description = product_description;
            return this;
        }

        public ProductBuilder setProduct_image(String product_image) {
            this.product_image = product_image;
            return this;
        }

        public ProductBuilder setProduct_quantity(int product_quantity) {
            this.product_quantity = product_quantity;
            return this;
        }

        public ProductBuilder setProduct_sku(String product_sku) {
            this.product_sku = product_sku;
            return this;
        }

        // ✅ Remove redundant `getProduct_sku` method
        public Product build() {
            return new Product(this);
        }
    }

    // ✅ Builder method
    public static ProductBuilder builder() {
        return new ProductBuilder();
    }


}
