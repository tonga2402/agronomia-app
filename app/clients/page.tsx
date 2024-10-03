import { Suspense } from "react";
import ListClient from "../components/ListClient";
import Search from "../components/Search";
import { ListClientType } from "../types/ListClient.Type";

const getClient = async () => {
  const res = await fetch(`${process.env.URL}/clients`, { cache: "no-store" });
  const data: ListClientType[] = await res.json();
  return data;
};

export default async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const clients = await getClient();
  const clientParams = searchParams["search"];
  const clientsFilter = clients.filter((client) =>
    client.name.includes(clientParams ?? "")
  );

  return (
    <div className="flex mt-28 justify-center w-full ">
      <div className="">
        <Search />
        <Suspense fallback={"...cargando"}>
          <ListClient clients={clientParams ? clientsFilter : clients} />
        </Suspense>
      </div>
    </div>
  );
}
