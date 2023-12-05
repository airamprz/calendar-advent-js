import Cards from "./Cards";

export default function Calendar() {
  return (
    <div className="mt-8">
      <h1 className="text-2xl text-yellow-200 mb-4 mt-16">Calendario</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Cards />
      </div>
      <div className="border mt-8 p-4">
        <h2 className="text-xl text-yellow-200 mb-4">Instrucciones</h2>
        <p>
          Cada día se desbloqueará un nuevo reto. Para desbloquear el reto del
          día siguiente, debes resolver el reto del día anterior.
        </p>
      </div>
    </div>
  );
}