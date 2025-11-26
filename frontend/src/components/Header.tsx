import { BrainCircuit } from "lucide-react";

const Header: React.FC<{ onReset: () => void }> = ({ onReset }) => (
  <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-blue-600 p-2 rounded-lg">
          <BrainCircuit className="text-white w-6 h-6" />
        </div>
        <h1 className="text-xl font-bold text-gray-900">Resumelytics</h1>
      </div>
      <button 
        onClick={onReset}
        className="text-sm font-medium text-gray-500 hover:text-blue-600 transition cursor-pointer"
      >
        Review CV Mới
      </button>
    </div>
  </header>
);

export default Header;