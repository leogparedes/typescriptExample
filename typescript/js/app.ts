const calculaEdad = (year: number, month: number, day: number) => {
    const añoHoy = 2025;
    const mesHoy = 3; // marzo
    const diaHoy = 26;
  
    let edad: number = añoHoy - year;
  
    
    if (month > mesHoy || (month === mesHoy && day > diaHoy)) {
      edad--;
    }
    return edad;
  };
  
  const edad: number = calculaEdad(2003, 11, 9);  
  console.log(`Hoy en marzo de 2025 tienes ${edad} años`);
  