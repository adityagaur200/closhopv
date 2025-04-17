package com.backend.productservice.Controller;

import com.backend.productservice.DTO.ProductDto;
import com.backend.productservice.Model.Product;
import com.backend.productservice.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/product")
@RestController
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductService productService;  // ✅ Use camelCase for naming convention

    // ✅ CREATE PRODUCT API
    @PostMapping("/create")
    public ResponseEntity<Product> createProduct(@Validated @RequestBody ProductDto product) {
        Product createdProduct = productService.create(product);
        return ResponseEntity.ok(createdProduct);
    }

    // ✅ GET ALL PRODUCTS API
    @GetMapping("/get")
    public ResponseEntity<List<ProductDto>> getAllProducts() {
        List<ProductDto> products = productService.getAll();

        if (products.isEmpty()) {
            return ResponseEntity.noContent().build();  // Return 204 if no products
        }
        return ResponseEntity.ok(products);  // Return 200 with the list
    }

    // ✅ GET PRODUCT BY ID
    @GetMapping("/search/id/{id}")
    public ResponseEntity<List<ProductDto>> getById(@PathVariable int id) {
        List<ProductDto> productDto = productService.getbyId(id);

        if (productDto.isEmpty()) {
            return ResponseEntity.notFound().build();  // Return 404 if not found
        }
        return ResponseEntity.ok(productDto);
    }

    // ✅ UPDATE PRODUCT
    @PutMapping("/update/{id}")
    public ResponseEntity<ProductDto> updateProduct(@PathVariable int id, @RequestBody ProductDto productDto) {
        ProductDto updatedProduct = productService.updateProduct(id, productDto);

        if (updatedProduct == null) {
            return ResponseEntity.notFound().build();  // Return 404 if not found
        }

        return ResponseEntity.ok(updatedProduct);  // Return 200 OK
    }

    // ✅ GET PRODUCT BY NAME
    @GetMapping("/search/name/{product_name}")
    public ResponseEntity<List<ProductDto>> getByProductName(@PathVariable String product_name) {
        List<ProductDto> productDto = productService.getByName(product_name);

        if (productDto.isEmpty()) {
            return ResponseEntity.notFound().build();  // Return 404 if no products found
        }

        return ResponseEntity.ok(productDto);
    }

    // ✅ GET PRODUCT BY SKU_CODE
    @GetMapping("/search/sku/{product_sku}")
    public ResponseEntity<List<ProductDto>> getBySkuCode(@PathVariable String product_sku) {
        List<ProductDto> productDto = productService.getBySku(product_sku);

        if (productDto.isEmpty()) {
            return ResponseEntity.notFound().build();  // Return 404 if no products found
        }

        return ResponseEntity.ok(productDto);
    }
}
