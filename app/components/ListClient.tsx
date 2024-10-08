import { ListClientType } from "../types/ListClient.Type";
import ClientTab from "./ClientTab";

const ListClient = async ({ clients }: { clients: ListClientType[] }) => {
  return (
    <div className="max-w-screen-xl relative overflow-hidden shadow-md rounded-lg">
      <table className="table-fixed w-full text-left">
        <thead
          className="uppercase bg-[#6b7280] text-[#e5e7eb]"
          style={{ backgroundColor: "#6b7280", color: "#e5e7eb" }}
        >
          <tr>
            <td className="py-3 border text-center  p-4">Cliente</td>
            <td className="py-3 border text-center  p-4">Descripcion</td>
          </tr>
        </thead>
        <tbody
          className="bg-[#FFFFFF] text-[#6b7280]"
          style={{ backgroundColor: "#FFFFFF", color: "#6b7280" }}
        >
          {clients &&
            clients.map((client) => (
              <ClientTab
                parcels={client.parcels}
                name={client.name}
                id={client.id}
                key={client.id}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListClient;
