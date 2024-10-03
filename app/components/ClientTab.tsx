import React from "react";

type ClientType = {
    parcels: [];
    name: string;
}

const ClientTab = ({parcels,name}: ClientType ) => {
  return (
    <tr className="py-5 hover:bg-gray-300 cursor-pointer">
      <td className="py-5 border text-center  p-4">{name}</td>
      <td className="py-5 border text-center  p-4">{
      parcels.length === 0 ? 'no tiene parcelas asignadas':
      parcels}</td>
    </tr>
  );
};

export default ClientTab;
