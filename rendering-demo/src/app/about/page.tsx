import { cookies } from "next/headers";

export default async function AboutPage() {
  const cookieStore = await cookies()
  const  theme = cookieStore.get('theme')
  console.log(theme)
  console.log("about page rendered on the server");
  return (
    <>
      <div>
        <h1>About page</h1>
      </div>
    </>
  );
}
