package com.backend.orderservice.Service;

import com.backend.orderservice.DTO.OrderDto;
import com.backend.orderservice.DTO.ProductDto;
import com.backend.orderservice.Model.Order;
import com.backend.orderservice.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService
{
    @Autowired
    private OrderRepository repo;
    private WebClient.Builder webClient;



    //CREATING ADD ORDER SERVICE.
    public Order addOrder(OrderDto order) {
        boolean isAvailable;
        WebClient client = webClient.build();

        String SkuCode = order.getsku_code();

        // Fetch the list of orders and check availability
        List<ProductDto> responseList = Collections.singletonList(client.get().uri(uriBuilder -> uriBuilder.path("/search/{sku_code}").build(SkuCode))
                .retrieve()
                .bodyToMono(ProductDto.class)
                .block());

        isAvailable = responseList.stream().anyMatch(productDto -> productDto.getProduct_quantity()>0);

        // Create new order only if the product is available
        if (isAvailable) {
            Order newOrder = Order.builder()
                    .setOrder_date(order.getOrder_date())  // Updated method name
                    .setOrder_time(order.getOrder_time())
                    .setOrder_status(order.getOrder_status())
                    .setDelivery_address(order.getDelivery_address())
                    .setDelivery_city(order.getDelivery_city())
                    .setDelivery_email(order.getDelivery_email())
                    .setDelivery_phone(order.getDelivery_phone())
                    .setDelivery_postal_code(order.getDelivery_postal_code())
                    .setTotal_price(order.getTotal_price())
                    .setQuantity(order.getQuantity())
                    .setCustomer_id(order.getCustomer_id())
                    .setProduct_id(order.getProduct_id())
                    .build();

            // Save the new order to the repository
            return repo.save(newOrder);
        } else {
           throw new IllegalArgumentException("Out of Stock"); // Product is not available
        }
    }


    //GETTING ALL THE  ORDERS.
    public List<OrderDto> showAll()
    {
        List<Order> orders = repo.findAll();
        return orders.stream().map(this :: MapTo).toList();
    }

    private OrderDto MapTo(Order order) {
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
            orderDto.setOrder_status(order.getOrder_status());
            return orderDto;
    }


    //GETTING ORDERS BY CUSTOMER_ID.
    public Order getById(int customerId)
    {
        List<Order> orders = repo.findAll();
        orders.stream().map(this :: MapTo).forEach(order -> order.setCustomer_id(customerId));
        return orders.get(0);
    }

    //GET ORDERS BY ORDER_ID.
    public List<Order> getByOrderId(int order_id)
    {
        Optional<Order> orders = repo.findById(String.valueOf(order_id));
        return orders.stream().toList();
    }
}
