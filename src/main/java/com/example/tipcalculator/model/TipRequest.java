package com.example.tipcalculator.model;

public class TipRequest {
    private double amount;
    private double tipPercentage;

    public TipRequest() {
        // Default constructor 
        // for deserialization purposes
        this.amount = 0.0;
    }

    public TipRequest(double amount, double tipPercentage) {
        this.amount = amount;
        this.tipPercentage = tipPercentage;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public double getTipPercentage() {
        return tipPercentage;
    }

    public void setTipPercentage(double tipPercentage) {
        this.tipPercentage = tipPercentage;
    }
}
