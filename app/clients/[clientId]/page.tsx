import ClientTab from '@/app/components/ClientTab';
import SelectMenu from '@/app/components/SelectMenu';
import { ListClientType } from '@/app/types/ListClient.Type';
import React from 'react'

type GetClientProps = {
    clientId: string
}

const getClient = async ({ clientId }: GetClientProps) => {
    const res = await fetch(`${process.env.URL}/clients/${clientId}`, { cache: "no-store" });
    const data: ListClientType = await res.json();
    return data;
};

const page = async ({
    searchParams,
}: {
    searchParams: { [key: string]: string }
}) => {
    const clientId = searchParams["c"]
    const clientDetail = await getClient({ clientId })
    return (
        <div className="flex mt-28 justify-center w-full ">
            <div className="max-w-screen-xl relative overflow-hidden shadow-md rounded-lg">
                <table className="table-fixed w-full text-left">
                    <thead
                        className="uppercase bg-[#6b7280] text-[#e5e7eb]"
                        style={{ backgroundColor: "#6b7280", color: "#e5e7eb" }}
                    >
                        <tr>
                            <td className="py-3 border text-center  p-4">Cliente</td>
                            <td className="py-3 border text-center  p-4">Parcelas</td>
                        </tr>
                    </thead>
                    <tbody
                        className="bg-[#FFFFFF] text-[#6b7280]"
                        style={{ backgroundColor: "#FFFFFF", color: "#6b7280" }}
                    >
                        <tr className="py-5">
                            <td className="py-5 border text-center p-4">{clientDetail.name}</td>
                            <select className="w-full py-5 text-center p-4 bg-[#FFFFFF] text-[#6b7280]" name="" id="">
                                <option value="">uno</option>
                                <option value="">dos</option>
                                <option value="">tres</option>
                                <option value="">cuatro</option>
                                <option value="">cinco</option>

                            </select>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default page