package com.example.tipcalculator.model;

public class TipResponse {
    private double tip;
    private double total;

    public TipResponse(double tip, double total) {
        this.tip = tip;
        this.total = total;
    }

    public double getTip() {
        return tip;
    }

    public void setTip(double tip) {
        this.tip = tip;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }
}
