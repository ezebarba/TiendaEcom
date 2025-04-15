import React from "react";

const Payment = () => {
  // Aquí implementas la integración de MercadoPago o Mobbex según corresponda
  const handlePayment = () => {
    // Lógica de pago con MercadoPago o Mobbex
  };

  return (
    <button onClick={handlePayment}>Pagar con MercadoPago</button>
  );
};

export default Payment;
