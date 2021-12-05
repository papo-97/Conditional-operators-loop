function fibonacci(Number) {
    if (Number <= 1) return 0 ;
  
    return fibonacci(Number - 1) + fibonacci(Number - 2);
  }