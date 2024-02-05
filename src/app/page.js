

const getPersonData = async () => {
  const res = await fetch("http://localhost:3001/api/blog");
  return res.json();
};

export default async function Home() {

  const data = await getPersonData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>This is the Home page </h1>
     
    </main>
  );
}
