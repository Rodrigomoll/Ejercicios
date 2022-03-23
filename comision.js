function comision(venta){
    let coms = 0;
    if(venta <= 150){  //Declaramos si nuestra venta es menor igual a 150 la comisión sera 0
      coms = 0;
    }
    if(venta >= 150 && venta <=400){ // Si la venta es mayor igual a 150 y menor igual a 400 la comisión es el 10%
      coms = venta/10;
    }
    if(venta>400){
      coms = (venta*9)/100 + 50//Si la venta es mayor a 400 tendremos la suma de 50 mas el 9%
    }
    return coms;
  }
  
  console.log(comision(500))

