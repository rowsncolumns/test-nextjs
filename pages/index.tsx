import { Inter } from "next/font/google";
import { Spreadsheet } from "./spreadsheet";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Spreadsheet />
    </main>
  );
}
