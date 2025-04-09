package com.example.payment.Domain.Notification;

public class NotificationFactory {

    public static Notification createNotification(String channel) {
        switch (channel.toUpperCase()) {
            case "EMAIL":
                return new EmailNotification();
            case "SMS":
                return new SmsNotification();
            default:
                throw new IllegalArgumentException("Canal no soportado");
        }
    }
}
