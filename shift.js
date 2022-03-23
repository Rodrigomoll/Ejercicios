function rotLeft(arr, rotacion) {
    const rotarArray = arr.concat();
    for (let i = 0; i < rotacion; i++) {
      const frontItem = rotarArray.shift();//Utilizamos el metodo shift para recorrer espacios en nuestro arra
      rotarArray.push(frontItem);
    }
    return rotarArray;
  }
  
  const numRotation = 2;
  const sampleArray = [1, 2, 3, 4, 5];
    
  console.log(rotLeft(sampleArray, numRotation));

