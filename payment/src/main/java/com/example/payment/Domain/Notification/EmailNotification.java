package com.example.payment.Domain.Notification;

public class EmailNotification implements Notification {
    @Override
    public void send(String message) {
        System.out.println("Enviando correo: " + message);
    }
}
