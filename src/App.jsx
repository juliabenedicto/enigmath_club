import './index.css'

export default function App() {
  return (
    <div className="min-h-screen bg-purple-100 p-8 text-center">
      <h1 className="text-4xl font-bold text-purple-700 mb-4">EnigMath Club</h1>
      <p className="text-lg text-gray-700">Reptes matemàtics per aprendre a casa</p>
      <div className="mt-6 p-4 bg-white rounded shadow-md max-w-xl mx-auto">
        <h2 className="text-xl font-semibold text-purple-600 mb-2">🚗 Repte: Les matrícules</h2>
        <p className="text-left text-gray-800">Observa les matrícules dels vehicles i descobreix patrons matemàtics!</p>
      </div>
      <footer className="mt-10 text-sm text-gray-500">
        © 2025 Bmath - Innovamat Education, S.L.
      </footer>
    </div>
  );
}