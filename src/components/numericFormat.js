import { NumericFormat } from 'react-number-format';


export default function formatNumberFunc(vale) {
  return (
    <NumericFormat value={vale} thousandSeparator={true} displayType="text" suffix=" đ"/>
  )
}