import InformationContact from "./InformationContact/InformationContact";
import Informationlink from "./InformationLink/InformationLink";


export default function Footer() {
  return (
    <div className="max-w-[1200px] h-[300px] grid grid-cols-3 pt-20 mx-auto ">
      <div><InformationContact/></div>
      <div className="col-span-2"><Informationlink/></div>
    </div>
  )
}