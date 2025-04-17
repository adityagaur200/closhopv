package com.backend.orderservice.Model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class Order
{
    @Id
    private int order_id;
    private int customer_id;
    private int product_id;
    private int quantity;
    private int total_price;
    private String order_time;
    private String order_status;
    private String order_date;
    private String delivery_email;
    private String delivery_address;
    private String delivery_postal_code;
    private String delivery_city;
    private String delivery_phone;

    public Order(OrderBuilder orderBuilder) {
        this.order_id = orderBuilder.order_id;
        this.customer_id = orderBuilder.customer_id;
        this.product_id = orderBuilder.product_id;
        this.quantity = orderBuilder.quantity;
        this.total_price = orderBuilder.total_price;
        this.order_status = orderBuilder.order_status;
        this.order_date = orderBuilder.order_date;
        this.order_time = orderBuilder.order_time;
        this.delivery_address = orderBuilder.delivery_address;
        this.delivery_phone = orderBuilder.delivery_phone;
        this.delivery_email = orderBuilder.delivery_email;
        this.delivery_postal_code = orderBuilder.delivery_postal_code;
        this.delivery_city = orderBuilder.delivery_city;
    }

    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    public int getTotal_price() {
        return total_price;
    }
    public void setTotal_price(int total_price) {
        this.total_price = total_price;
    }
    public String getOrder_status() {
        return order_status;
    }
    public void setOrder_status(String order_status) {
        this.order_status = order_status;
    }
    public String getOrder_date() {
        return order_date;
    }
    public void setOrder_date(String order_date) {
        this.order_date = order_date;
    }
    public String getOrder_time() {
        return order_time;
    }
    public void setOrder_time(String order_time) {
        this.order_time = order_time;
    }
    public String getDelivery_address() {
        return delivery_address;
    }
    public void setDelivery_address(String delivery_address) {
        this.delivery_address = delivery_address;
    }
    public String getDelivery_phone() {
        return delivery_phone;
    }
    public void setDelivery_phone(String delivery_phone) {
        this.delivery_phone = delivery_phone;
    }
    public String getDelivery_email() {
        return delivery_email;
    }
    public void setDelivery_email(String delivery_email) {
        this.delivery_email = delivery_email;
    }
    public String getDelivery_postal_code() {
        return delivery_postal_code;
    }
    public void setDelivery_postal_code(String delivery_postal_code) {
        this.delivery_postal_code = delivery_postal_code;
    }
    public String getDelivery_city() {
        return delivery_city;
    }
    public void setDelivery_city(String delivery_city) {
        this.delivery_city = delivery_city;
    }
    public int getCustomer_id() {
        return customer_id;
    }
    public void setCustomer_id(int customer_id) {
        this.customer_id = customer_id;
    }
    public int getOrder_id() {
        return order_id;

    }
    public void setOrder_id(int order_id) {
        this.order_id = order_id;
    }
    public int getProduct_id() {
        return product_id;
    }
    public void setProduct_id(int product_id) {
        this.product_id = product_id;
    }

    public static class OrderBuilder {
        private int order_id;
        private int customer_id;
        private int product_id;
        private int quantity;
        private int total_price;
        private String order_status;
        public String order_date;
        private String order_time;
        private String delivery_address;
        private String delivery_phone;
        private String delivery_email;
        private String delivery_postal_code;
        private String delivery_city;

        public OrderBuilder setOrder_id(int order_id) {
            this.order_id = order_id;
            return this;
        }
        public OrderBuilder setCustomer_id(int customer_id) {
            this.customer_id = customer_id;
            return this;
        }
        public OrderBuilder setProduct_id(int product_id) {
            this.product_id = product_id;
            return this;
        }
        public OrderBuilder setQuantity(int quantity) {
            this.quantity = quantity;
            return this;
        }
        public OrderBuilder setTotal_price(int total_price) {
            this.total_price = total_price;
            return this;
        }
        public OrderBuilder setOrder_status(String order_status) {
            this.order_status = order_status;
            return this;
        }
        public OrderBuilder setOrder_date(String order_date) {
            this.order_date = order_date;
            return this;
        }
        public OrderBuilder setOrder_time(String order_time) {
            this.order_time = order_time;
            return this;
        }
        public OrderBuilder setDelivery_address(String delivery_address) {
            this.delivery_address = delivery_address;
            return this;
        }
        public OrderBuilder setDelivery_phone(String delivery_phone) {
            this.delivery_phone = delivery_phone;
            return this;
        }
        public OrderBuilder setDelivery_email(String delivery_email) {
            this.delivery_email = delivery_email;
            return this;
        }
        public OrderBuilder setDelivery_postal_code(String delivery_postal_code) {
            this.delivery_postal_code = delivery_postal_code;
            return this;
        }
        public OrderBuilder setDelivery_city(String delivery_city) {
            this.delivery_city = delivery_city;
            return this;
        }

        public Order build() {
            Order order = new Order(this);
            return order;
        }
    }
    public static OrderBuilder builder()
    {
        return new OrderBuilder();
    }
}