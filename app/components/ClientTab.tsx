'use client'

import { useRouter } from "next/navigation";
import { ListClientType } from "../types/ListClient.Type";


const ClientTab = ({parcels,name,id}: ListClientType ) => {

  const router = useRouter()

  return (
    <tr className="py-5 hover:bg-gray-300 cursor-pointer"
    onClick={()=>{router.push(`clients/${id}`)}}
    >
      <td className="py-5 border text-center  p-4">{name}</td>
      <td className="py-5 border text-center  p-4">{
      parcels.length === 0 ? 'no tiene parcelas asignadas':
      parcels}</td>
    </tr>
  );
};

export default ClientTab;
