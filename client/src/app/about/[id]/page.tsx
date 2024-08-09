import PokeInfo from "src/components/pokemon/pokeInfo/PokeInfo";

export function generateStaticParams() {
  return Array.from({ length: 386 }, (_, i) => {
    return { id: (i + 1).toString() };
  });
}

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return <PokeInfo id={id} />;
}
