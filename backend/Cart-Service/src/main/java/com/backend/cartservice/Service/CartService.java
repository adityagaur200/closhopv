package com.backend.cartservice.Service;

import com.backend.cartservice.DTO.CartDto;
import com.backend.cartservice.Model.Cart;
import com.backend.cartservice.Repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;

    //CREATING ADD CART
    public Cart addToCart(CartDto cartDto)
    {

        Cart cart = Cart.builder()
                .setProduct_name(cartDto.getProduct_name())
                .setProduct_image(cartDto.getProduct_image())
                .setProduct_price(cartDto.getProduct_price())
                .setProduct_quantity(cartDto.getProduct_quantity())
                .build();
        return cartRepository.save(cart);
    }

    //CREATE FIND ALL CART ITEMS
    public List<CartDto> getAll()
    {
        List<Cart> allresponses = cartRepository.findAll();
        return allresponses.stream().map(this :: MapTo).toList();
    }

    //MAP TO LIST.
    private CartDto MapTo(Cart cart)
    {
        CartDto cartDto = new CartDto();
        cartDto.setProduct_name(cart.getProduct_name());
        cartDto.setProduct_image(cart.getProduct_image());
        cartDto.setProduct_price(cart.getProduct_price());
        cartDto.setProduct_quantity(cart.getProduct_quantity());
        return cartDto;
    }

    //FIND ALL CART ITEMS BY CUSTOMER ID.
    public List<CartDto> getById(int customerId) {
        List<Cart> responseByid = cartRepository.findByCustomerId(customerId);
        return responseByid.stream().map(this :: MapTo).toList();
    }
}
