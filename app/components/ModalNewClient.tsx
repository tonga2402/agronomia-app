'use client'
import { newClient } from "@/actions/NewClient";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction, useState } from "react";
import { toast } from "sonner";

type ModalNewClientProps = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const ModalNewClient = ({ setShowModal }: ModalNewClientProps) => {
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter();
  return (
    <div className="relative z-10">
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <form
                action={async (formData) => {
                  setLoading(true)
                  const res = await newClient(formData);
                  if (res.status === 400) {

                    toast.error('Verificar datos ingresados', { duration: 5000 })
                    setLoading(false)
                  }
                  else if (res.status === 500) {
                    toast.warning('Intente nuevamente mas tarde', { duration: 5000 })
                    setLoading(false)

                  } else {

                    toast.success('Cliente Creado', { duration: 2000 })
                    setTimeout(() => {

                      router.push("/clients");
                      setShowModal(false);
                      router.refresh();
                    }, 3000)
                    setLoading(false)
                  }
                }

                }
                className="flex flex-col"
              >
                <div className="pb-2">
                  <label
                    className="block mb-2 text-sm font-medium text-[#111827]"
                  >
                    Cliente
                  </label>
                  <div className="relative text-gray-400">
                    <input
                      required
                      type="text"
                      name="name"
                      id="cliente"
                      minLength={5}
                      maxLength={30}
                      className="mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
                      placeholder="nombre"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-[#FFFFFF] bg-[#0f6e75] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6"
                >
                  Ingresar
                </button>
              </form>
              <div className="bg-gray-50 sm:flex sm:flex-row-reverse ">
                <button 
                  disabled={loading ?? false}
                  type="button"
                  className={`mt-3 inline-flex w-full justify-center rounded-md ${loading ? 'bg-gray-400' : 'bg-white'} px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto`}
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalNewClient;
