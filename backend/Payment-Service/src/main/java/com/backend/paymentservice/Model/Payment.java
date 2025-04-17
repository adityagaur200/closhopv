package com.backend.paymentservice.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor

public class Payment {

        private String id;
        private String orderId;
        private String paymentId;
        private String status;
        private int amount;
        private String currency;

        // Constructors, getters, setters
        public Payment(String orderId, String paymentId, String status, int amount, String currency) {
            this.orderId = orderId;
            this.paymentId = paymentId;
            this.status = status;
            this.amount = amount;
            this.currency = currency;
        }
}
