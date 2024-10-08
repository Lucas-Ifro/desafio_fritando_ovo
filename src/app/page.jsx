import Cabecalho from "@/components/Cabecalho";
import CardList from "@/components/CardList";
import Rodape from "@/components/Rodape";
import Contador from "@/components/contador";
import Form from "@/components/Form";

export default function Home() {
  return (
    <div>
      <Cabecalho />
      {/* <Contador />
      <Form /> */}
      <CardList />
      <Rodape />
    </div>
  );
}