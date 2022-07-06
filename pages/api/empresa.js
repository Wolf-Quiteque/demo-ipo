export async function FiltrarEmpresa(body) {
  const res = await fetch(
    "https://emi-empresa-api-wolf-quiteque.vercel.app/api/empresa/post/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  const data = await res.json();
  return data;
}
