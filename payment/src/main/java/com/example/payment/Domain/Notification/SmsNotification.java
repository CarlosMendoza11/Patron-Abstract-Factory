package com.example.payment.Domain.Notification;

public class SmsNotification implements Notification {
    @Override
    public void send(String message) {
        System.out.println("Enviando SMS: " + message);
    }
}
