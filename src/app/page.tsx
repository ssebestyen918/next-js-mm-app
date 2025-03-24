import ButtonAppBar from "./components/Menu";
import AccordionUsage from "./components/Rounds";

export default function Home() {
  return (
    <div>
      <ButtonAppBar></ButtonAppBar>
      <main className="w-full p-5">
        <AccordionUsage></AccordionUsage>
      </main>
    </div>
  );
}
