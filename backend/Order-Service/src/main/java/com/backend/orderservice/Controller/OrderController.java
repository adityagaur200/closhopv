package com.backend.orderservice.Controller;

import com.backend.orderservice.DTO.OrderDto;
import com.backend.orderservice.Model.Order;
import com.backend.orderservice.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/order")
@CrossOrigin
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/add")
    public ResponseEntity<Order> addOrder(@RequestBody OrderDto order) {
        Order savedOrder = orderService.addOrder(order);
        return ResponseEntity.ok(savedOrder);
    }

    // GET ALL ORDERS.
    @GetMapping
    public List<OrderDto> showAll() {
        return orderService.showAll();
    }

   // GET ORDERS BY CUSTOMER ID.
    @GetMapping("/customer/{customer_id}")
    public List<OrderDto> getByCustomerId(@PathVariable int customer_id) {
        return orderService.getById(customer_id);
    }

    // GET ORDER BY ORDER ID.
    @GetMapping("/{order_id}")
    public Optional<Order> getByOrderId(@PathVariable int order_id) {
        return orderService.getByOrderId(order_id);
    }
}
