package com.backend.orderservice.Controller;

import com.backend.orderservice.DTO.OrderDto;
import com.backend.orderservice.Model.Order;
import com.backend.orderservice.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping
@RestController
@CrossOrigin
public class OrderController
{
    @Autowired
    private OrderService orderService;

    //CREATE ORDER.
    @PostMapping("/order")
    public Order addOrder(@RequestBody OrderDto order)
    {
        return orderService.addOrder(order);
    }

    //GET ALL ORDERS.
    @GetMapping("/all")
    public List<OrderDto> showAll()
    {
        return orderService.showAll();
    }

    //ORDER BY CUSTOMER ID.
    @GetMapping("/order/{customer_id}")
    public Order getById(@PathVariable int customer_id)
    {
        return orderService.getById(customer_id);
    }

    //ORDER BY ORDER_ID
    @GetMapping("/order/{order_id}")
    public List<Order> getByOrderId(@PathVariable int order_id)
    {
        return orderService.getByOrderId(order_id);
    }
}
