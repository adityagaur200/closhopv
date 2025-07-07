import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
<<<<<<< HEAD
export default function Home() {
  return (
    <Theme>
    <h1>
      hello
    </h1>
    </Theme>
  );
=======
import { redirect } from "next/navigation";
export default function Home() {
  redirect("/Home")
>>>>>>> origin/main
}
