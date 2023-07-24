export const useGetDate = () => {
  const a = new Date();
  const mes = a.getMonth();
  let month = "";
    if (mes===0) {
        month='Enero'
    }else if(mes===1){
        month='Febrero'
    }else if(mes===2){
        month='Marzo'
    }else if(mes===3){
        month='Mayo'
    }else if(mes===4){
        month='Junio'
    }else if(mes===5){
        month='Julio'
    }else if(mes===6){
        month='Agosto'
    }else if(mes===7){
        month='Setiembre'
    }else if(mes===8){
        month='Octubre'
    }else if(mes===9){
        month='Noviembre'
    }else if(mes===10){
        month='Diciembre'
    }

  return `${a.getDate()} ${month}, ${a.getFullYear()} - [${a.getHours()}:${a.getMinutes()}] `;
};
