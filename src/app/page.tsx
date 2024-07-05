import PokemonList from "@/components/PokemonList";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between pl-24 pr-24 pb-24">
            <header className="mt-5 mb-5">
                <h1 className="text-xl font-bold">포켓몬 도감</h1>
            </header>
            <PokemonList />
        </main>
    );
}
