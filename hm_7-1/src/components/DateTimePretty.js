import React from 'react'


function DateTimePretty(Component) {
    return function(props) {
        console.log(props)
        const time = new Date(props.date).getTime();
        const timeNow = new Date().getTime();
        const min = (timeNow - time) / (1000 * 60 );
        let date;
    
        if(min<60){
            date = `Прошло ${min.toFixed()} минут`
        }else if(min<60 * 24){
            date = `Прошло ${(min/60).toFixed()} часов`
        }else {
            date = `Прошло ${(min/(60 * 24)).toFixed()} дней`
        }
     
         
      return (
        <Component date={date} />
      )
    }
}



export default DateTimePretty
