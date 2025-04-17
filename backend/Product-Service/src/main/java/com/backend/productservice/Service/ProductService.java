package com.backend.productservice.Service;
import com.backend.productservice.DTO.ProductDto;
import com.backend.productservice.Model.Product;
import com.backend.productservice.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private  final ProductRepository productRepo;

    public ProductService(ProductRepository productRepo) {
        this.productRepo = productRepo;
    }

    //CREATE ADD PRODUCT FEATURE CODE.
    public Product create(ProductDto productDto) {
        Product newProduct = Product.builder()
                .setProduct_name(productDto.getProduct_name())
                .setProduct_price(productDto.getProduct_price())
                .setProduct_description(productDto.getProduct_description())
                .setProduct_image(productDto.getProduct_image())  // Now accepts String
                .setProduct_quantity(productDto.getProduct_quantity())
                .setProduct_sku(productDto.getProduct_sku())
                .build();

        return productRepo.save(newProduct);
    }

    // GET ALL PRODUCT FEATURE CODE.
    public List<ProductDto> getAll()
    {
        List<Product> products = productRepo.findAll();
        return products.stream().map(this::mapTOList).toList();
    }

    // MAPPING ALL PRODUCTS DETAILS TO LIST.
    private ProductDto mapTOList(Product product)
    {
        ProductDto productDto = new ProductDto();
        productDto.setProduct_name(product.getProduct_name());
        productDto.setProduct_description(product.getProduct_description());
        productDto.setProduct_price(product.getProduct_price());
        productDto.setProduct_image(product.getProduct_image());
        productDto.setProduct_price(product.getProduct_price());
        productDto.setProduct_sku(product.getProduct_sku());
        return productDto;
    }

    //TO GET THE PRODUCT BY ID.
    public List<ProductDto> getbyId(int id) {
        // Assuming the repo returns an Optional<Product> for findById
        Optional<Product> productOptional = productRepo.findById(id);

        // If product is found, map it to DTO and return in a list, otherwise return an empty list
        return productOptional.map(product -> {
            ProductDto productDto = mapTOList(product);
            return List.of(productDto);
        }).orElseGet(ArrayList::new);
    }


    //TO UPDATE PRODUCT.
    public ProductDto updateProduct(int id, ProductDto productDto) {
        Product product = productRepo.findById(id).get();
        product.setProduct_name(productDto.getProduct_name());
        product.setProduct_description(productDto.getProduct_description());
        product.setProduct_price(productDto.getProduct_price());
        product.setProduct_image(productDto.getProduct_image());
        product.setProduct_quantity(productDto.getProduct_quantity());
        product.setProduct_sku(productDto.getProduct_sku());
        productRepo.save(product);
        return productDto;
    }
    //TO FIND BY NAME.
    public List<ProductDto> getByName(String product_name)
    {
        List<Product> product = Collections.singletonList(productRepo.findByproduct_name(product_name));
        return product.stream().map(this::mapTOList).toList();
    }

    //TO FIND BY SKU_CODE.
    public List<ProductDto> getBySku(String product_sku)
    {
        List<Product> productSku = productRepo.findByproduct_sku(product_sku);
        return productSku.stream().map(this::mapTOList).toList();
    }
}