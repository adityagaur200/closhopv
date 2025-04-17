package com.backend.cartservice.Model;

import com.backend.cartservice.DTO.CartDto;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
@Document
public class Cart
{
    @Id
    private String product_id;
    private String product_name;
    private String product_price;
    private String product_image;
    private int product_quantity;

    public Cart(Cart.CartBuilder cartBuilder) {
    }

    public String getProduct_name() {
        return product_name;
    }
    public void setProduct_name(String product_name) {
        this.product_name = product_name;
    }
    public String getProduct_price() {
        return product_price;
    }
    public void setProduct_price(String product_price) {
        this.product_price = product_price;
    }
    public String getProduct_image() {
        return product_image;
    }
    public void setProduct_image(String product_image) {
        this.product_image = product_image;
    }
    public int getProduct_quantity() {
        return product_quantity;
    }
    public void setProduct_quantity(int product_quantity) {
        this.product_quantity = product_quantity;
    }
    public Cart(String product_name, String product_price, String product_image, int product_quantity) {
        this.product_name = product_name;
        this.product_price = product_price;
        this.product_image = product_image;
        this.product_quantity = product_quantity;
    }
    public static class CartBuilder
    {
        private String product_name;
        private String product_price;
        private String product_image;
        private int product_quantity;

        public CartBuilder(CartBuilder cartBuilder)
        {
            this.product_name = cartBuilder.product_name;
            this.product_price = cartBuilder.product_price;
            this.product_image = cartBuilder.product_image;
            this.product_quantity = cartBuilder.product_quantity;
        }

        public CartBuilder() {

        }

        public CartBuilder setProduct_name(String product_name) {
            this.product_name = product_name;
            return this;
        }
        public CartBuilder setProduct_price(String product_price) {
            this.product_price = product_price;
            return this;
        }
        public CartBuilder setProduct_image(String product_image) {
            this.product_image = product_image;
            return this;
        }
        public CartBuilder setProduct_quantity(int product_quantity) {
            this.product_quantity = product_quantity;
            return this;
        }
        public CartBuilder getProduct_Price() {
            return this;
        }
        public CartBuilder getProduct_Image() {
            return this;
        }
        public CartBuilder getProduct_Quantity() {
            return this;
        }
        public CartBuilder getProduct_Name(){
            return this;
        }
        public Cart build()
        {
            return new Cart(this);
        }
    }
    public static CartBuilder builder()
    {
        return new CartBuilder();
    }
}
