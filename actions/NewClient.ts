"use server";

export const newClient = async (formData: FormData) => {
  const name = formData.get("name");

  
  const res = await fetch(`${process.env.URL}/clients`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      parcels: [],
    }),
  });
  const dataClient = await res.json();
  
    
if (!res.ok){
  return JSON.stringify('nada')
}
return dataClient

}
