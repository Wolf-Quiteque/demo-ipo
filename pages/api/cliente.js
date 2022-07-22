export async function Getuser(body) {
  const res = await fetch(
    "https://emi-usuario-api-wolf-quiteque.vercel.app/api/ipo/usuario/post/usuario",
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
