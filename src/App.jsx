import './index.css';

export default function App() {
  return (
    <div className="min-h-screen bg-white p-4 flex flex-col items-center justify-start gap-6">
      <header className="w-full flex justify-center items-center p-4 border-b">
        <img src="/logo_bmath.png" alt="Bmath logo" className="h-12" />
      </header>

      <main className="w-full max-w-xl text-center">
        <h1 className="text-3xl font-bold mb-4 text-purple-700">EnigMath Club</h1>
        <p className="text-md text-gray-700 mb-2">Reptes matemàtics per aprendre a casa</p>
        <p className="text-md text-gray-600 mb-4 italic">Motiva’t, diverteix-te i estima les matemàtiques</p>
        <div className="bg-purple-100 p-4 text-left rounded shadow-sm">
          <h2 className="text-xl font-semibold mb-2">🚗 Repte: Les matrícules</h2>
          <p>En el repte d’aquesta setmana sortirem al carrer per fixar-nos en les matrícules dels vehicles. Buscarem patrons, farem càlculs, trobarem simetries… però, sobretot, ens divertirem molt! 😁</p>
          <p className="mt-2 font-semibold">Què necessitarem?</p>
          <ul className="list-disc list-inside mb-2">
            <li>La fitxa 📄 (escollim la de l’últim curs que ha completat l’infant)</li>
            <li>Una carpeta llisa 📁 (o un suport que ens permeti escriure amb llibertat al carrer)</li>
            <li>Llapis i goma d’esborrar ✏️</li>
          </ul>
          <p>En aquest repte volem fomentar el treball competencial fent connexions extramatemàtiques. Per fer-ho trobarem la lògica que hi ha darrere de la matriculació dels vehicles i, posteriorment, buscarem matrícules que compleixin les condicions que us proposem. D’aquesta manera treballarem en profunditat el bloc de contingut de numeració i càlcul. Som-hi! 💪</p>
          <p className="mt-2 font-semibold">Condicions que poden complir les matrícules:</p>
          <ul className="list-disc list-inside">
            <li>Tots els nombres parells o imparells: 8426 DFT / 7731 LDC</li>
            <li>Que sumin entre 0 i 10: 3222 FTT (3+2+2+2=9)</li>
            <li>Que sumin més de 25: 7969 HDF (7+9+6+9=31)</li>
            <li>Dígits creixents o decreixents: 2389 CDT / 9431 DTP</li>
            <li>Establir una igualtat (sumes i restes): 4812 FGH → 4+8=12 / 1120 HDF → 1+1=2+0 / 0972 FFD → 0+9-7=2</li>
            <li>Establir una igualtat (multiplicació i divisió): 3927 GYG → 3×9=27 / 4212 HJJ → 4/2=1×2</li>
            <li>Dígits o nombres primers: 1137 CSK → 11 / 3 / 7 / 6119 LJJ → 61 / 19</li>
            <li>Capicua: 1221 CPF</li>
            <li>Després de la matrícula 1789 CLG: per ex. 6985 SDG</li>
            <li>Abans de la matrícula 0000 GBB: per ex. 9999 FZZ</li>
          </ul>
          <p className="mt-2">Observeu la matrícula del vostre cotxe, compleix alguna condició? Potser en compleix alguna altra?</p>
          <p className="mt-2">📩 Envieu evidències a <a href="mailto:hello@bmath.app" className="text-blue-600 underline">hello@bmath.app</a> per guanyar un premi si completeu els 4 reptes d’estiu!</p>
        </div>
      </main>

      <footer className="w-full max-w-xl mt-8 flex flex-col items-center gap-2 text-center">
        <a href="https://www.bmath.app/ca/" target="_blank" rel="noopener noreferrer" className="w-full">
          <button className="w-full bg-white border border-purple-500 text-purple-600 py-2 rounded hover:bg-purple-50 transition">
            Segueix resolent enigmes a Bmath 🕵️
          </button>
        </a>
        <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
          Vols que t'avisem quan estigui disponible el següent repte?
        </button>
        <p className="text-xs text-gray-400 mt-4">© 2025 Bmath - Innovamat Education, S.L.</p>
      </footer>
    </div>
  );
}