package com.backend.cartservice.Controller;

import com.backend.cartservice.DTO.CartDto;
import com.backend.cartservice.Model.Cart;
import com.backend.cartservice.Service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@CrossOrigin
public class CartController
{
    @Autowired
    private CartService cartService;

    @PostMapping("/add-to-cart")
    public Cart addToCart(@RequestBody CartDto cartDto)
    {
        return cartService.addToCart(cartDto);
    }

    @GetMapping("/AllCart")
    public List<CartDto> getAllCart(){
        return cartService.getAll();
    }

    @GetMapping("/cart/{customer_id}")
    public List<CartDto> getByCustomer(@PathVariable int customer_id)
    {
        return cartService.getById(customer_id);
    }
}
