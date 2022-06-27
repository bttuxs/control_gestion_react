import React from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = (props) => {
    const [startDate, setStartDate] = React.useState(props.date);
    const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
        <button
        type="button"
        className="w-full px-3 py-2 text-sm h-9 leading-tight text-gray-700 rounded outline outline-1 outline-gray-500" 
        onClick={onClick} 
        ref={ref}>
            {value}
        </button>
    ));
    function setData(date){
        setStartDate(date)
        props.onChange(date) 
    }
    return (
        <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={startDate}
        onChange={(date) => setData(date)}
        customInput={<ExampleCustomInput />}
        />
    );
}
export default CustomDatePicker;