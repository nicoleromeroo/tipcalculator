package com.example.tipcalculator.service;
import org.springframework.stereotype.Service;

@Service
public class TipCalculatorService {
    // This class will handle the logic for calculating tips
    // and interacting with the user interface.
    
    public double calculateTip(double amount, double tipPercentage) {
        return amount * (tipPercentage / 100);
    }

    public double calculateTotal(double amount, double tip) {
        return amount + tip;
    }
}
