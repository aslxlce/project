import { seed } from "@/lib/seed";

export default async function Home() {
  // Seed the admin user
  await seed();
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to SchooLama</h1>
      <p className="text-gray-600 mb-4">Please sign in to continue</p>
      <p className="text-sm text-gray-500">
        Admin credentials:<br/>
        Username: admin<br/>
        Password: qwerty
      </p>
    </main>
  );
}