package com.backend.orderservice.Service;

import com.backend.orderservice.DTO.OrderDto;
import com.backend.orderservice.DTO.ProductDto;
import com.backend.orderservice.Model.Order;
import com.backend.orderservice.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository repo;

    @Autowired
    private WebClient.Builder webClientBuilder;

    // CREATE ORDER SERVICE.
    public Order addOrder(OrderDto orderDto) {
        WebClient client = webClientBuilder.baseUrl("http://localhost:4040/product").build();

        String skuCode = orderDto.getsku_code();

        List<ProductDto> productDtos = client.get()
                .uri("/search/sku/{skuCode}", skuCode)
                .retrieve()
                .bodyToMono(new ParameterizedTypeReference<List<ProductDto>>() {})
                .block();

        if (productDtos == null || productDtos.isEmpty()) {
            throw new IllegalArgumentException("Product with SKU " + skuCode + " not found");
        }

        ProductDto productDto = productDtos.get(0);

        if (productDto.getProduct_quantity() < orderDto.getQuantity()) {
            throw new IllegalArgumentException("Insufficient stock for SKU " + skuCode);
        }

        Order newOrder = Order.builder()
                .setOrder_date(orderDto.getOrder_date())
                .setOrder_time(orderDto.getOrder_time())
                .setOrder_status(orderDto.getOrder_status())
                .setDelivery_address(orderDto.getDelivery_address())
                .setDelivery_city(orderDto.getDelivery_city())
                .setDelivery_email(orderDto.getDelivery_email())
                .setDelivery_phone(orderDto.getDelivery_phone())
                .setDelivery_postal_code(orderDto.getDelivery_postal_code())
                .setTotal_price(orderDto.getTotal_price())
                .setQuantity(orderDto.getQuantity())
                .setCustomer_id(orderDto.getCustomer_id())
                .setProduct_id(orderDto.getProduct_id())
                .build();

        return repo.save(newOrder);
    }


    // GET ALL ORDERS.
    public List<OrderDto> showAll() {
        List<Order> orders = repo.findAll();
        return orders.stream().map(this::mapToDto).toList();
    }

    // GET ORDERS BY CUSTOMER ID.
    public List<OrderDto> getById(int customer_id) {
        List<Order> orders = repo.findByCustomerId(customer_id);
        return orders.stream().map(this::mapToDto).toList();
    }

    // GET ORDER BY ORDER ID.
    public Optional<Order> getByOrderId(int orderId) {
        return repo.findById(String.valueOf(orderId));
    }

    private OrderDto mapToDto(Order order) {
        OrderDto orderDto = new OrderDto();
        orderDto.setCustomer_id(order.getCustomer_id());
        orderDto.setProduct_id(order.getProduct_id());
        orderDto.setQuantity(order.getQuantity());
        orderDto.setTotal_price(order.getTotal_price());
        orderDto.setOrder_status(order.getOrder_status());
        orderDto.setDelivery_address(order.getDelivery_address());
        orderDto.setDelivery_city(order.getDelivery_city());
        orderDto.setDelivery_email(order.getDelivery_email());
        orderDto.setDelivery_phone(order.getDelivery_phone());
        orderDto.setDelivery_postal_code(order.getDelivery_postal_code());
        orderDto.setOrder_time(order.getOrder_time());
        orderDto.setOrder_date(order.getOrder_date());
        return orderDto;
    }
}
