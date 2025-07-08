package com.example.tipcalculator.controller;

import com.example.tipcalculator.model.TipRequest;
import com.example.tipcalculator.model.TipResponse;
import com.example.tipcalculator.service.TipCalculatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

// TipController.java
// This controller handles requests for calculating tips and total amounts.
// It uses the TipCalculatorService to perform the calculations based on user input.
// It listens for POST requests at the "/calculate-tip" endpoint and expects a JSON body with the amount and tip percentage.
// The response will include the calculated tip and total amount.


@RestController
@RequestMapping("/calculate-tip")
public class TipController {

    @Autowired
    private TipCalculatorService tipService;

    @PostMapping
    public TipResponse calculate(@RequestBody TipRequest request) {
        double tip = tipService.calculateTip(request.getAmount(), request.getTipPercentage());
        double total = tipService.calculateTotal(request.getAmount(), tip);
        return new TipResponse(tip, total);
    }
}
