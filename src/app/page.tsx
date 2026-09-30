'use client';

import { useState } from 'react';

const BlueprintSVG = () => (
  <svg viewBox="0 0 280 220" className="w-full h-full">
    <rect x="10" y="10" width="260" height="200" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4,2"/>
    <rect x="30" y="30" width="100" height="140" fill="none" stroke="#f59e0b" strokeWidth="1.5"/>
    <circle cx="80" cy="70" r="20" fill="none" stroke="#f59e0b" strokeWidth="1"/>
    <line x1="80" y1="50" x2="80" y2="90" stroke="#f59e0b" strokeWidth="1"/>
    <line x1="60" y1="70" x2="100" y2="70" stroke="#f59e0b" strokeWidth="1"/>
    <rect x="150" y="30" width="100" height="140" fill="none" stroke="#f59e0b" strokeWidth="1"/>
    <line x1="150" y1="90" x2="250" y2="90" stroke="#f59e0b" strokeWidth="1"/>
    <circle cx="200" cy="130" r="15" fill="none" stroke="#f59e0b" strokeWidth="1"/>
    <text x="80" y="185" fill="#f59e0b" fontSize="10" textAnchor="middle">GROUP HEAD</text>
    <text x="200" y="185" fill="#f59e0b" fontSize="10" textAnchor="middle">BOILER ASSEMBLY</text>
  </svg>
);

const GlobalMaisonBar = ({ onCartOpen }: { onCartOpen: () => void }) => (
  <div className="border-b border-accent/30 bg-light sticky top-0 z-40">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-sm font-mono tracking-wider">
        <span className="text-primary font-bold">OLYX</span>
        <span className="text-accent mx-2">//</span>
        <span className="text-primary">MAISONS</span>
      </div>
      <button onClick={onCartOpen} className="text-primary hover:text-accent transition font-mono text-sm">
        CART
      </button>
    </div>
  </div>
);

const CartDrawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <>
    {isOpen && <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose} />}
    <div
      className={`fixed right-0 top-0 h-screen w-96 bg-light border-l border-accent/30 transform transition z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl text-primary font-mono">CART</h2>
          <button onClick={onClose} className="text-primary text-2xl">×</button>
        </div>
        <div className="text-dark">Empty cart.</div>
      </div>
    </div>
  </>
);

export default function VeloxHome() {
  const [cartOpen, setCartOpen] = useState(false);
  const [pidTemp, setPidTemp] = useState(92);
  const [shotTime, setShotTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [boilerType, setBoilerType] = useState('dual');

  const simulatePull = () => {
    setIsRunning(true);
    setShotTime(0);
    const interval = setInterval(() => {
      setShotTime(t => {
        if (t >= 28) {
          setIsRunning(false);
          clearInterval(interval);
          return t;
        }
        return t + 0.1;
      });
    }, 50);
  };

  const specs = [
    { label: 'Boiler Volume', value: '4L dual' },
    { label: 'PID Range', value: '90-104°C' },
    { label: 'Pump Pressure', value: '9 bar rotary' },
    { label: 'Power', value: '2400W' },
    { label: 'Weight', value: '22 kg' },
    { label: 'Dimensions', value: '32×24×42 cm' },
    { label: 'Group Head', value: 'Chrome E61' },
    { label: 'Certification', value: 'NSF/ANSI' }
  ];

  return (
    <main className="bg-light">
      <GlobalMaisonBar onCartOpen={() => setCartOpen(true)} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl text-primary font-mono font-bold mb-6">VELOX</h1>
          <h2 className="text-2xl text-accent mb-6">Dual-Boiler Lever Espresso</h2>
          <p className="text-dark/70 mb-8 leading-relaxed">
            Italian precision meets industrial steel. PID-controlled 9-bar rotary pump, dual E61 group heads, and temperature-stabilized ceramic chambers.
          </p>
          <div className="flex gap-6 items-center mb-12">
            <div>
              <div className="text-accent text-3xl font-bold">$3,450</div>
              <div className="text-sm text-dark/50">Rp 54.000.000 / €3,200</div>
            </div>
            <button
              onClick={() => setCartOpen(true)}
              className="px-8 py-3 bg-primary text-light font-mono font-bold hover:bg-accent hover:text-primary transition"
            >
              ADD TO CART
            </button>
          </div>

          <div className="bg-primary/10 border border-primary/30 p-6 rounded">
            <label className="block text-primary font-mono text-sm mb-3">PID Temperature: {pidTemp}°C</label>
            <input
              type="range"
              min="90"
              max="104"
              value={pidTemp}
              onChange={(e) => setPidTemp(parseInt(e.target.value))}
              className="w-full"
            />
          </div>
        </div>

        <div className="aspect-square bg-primary border border-accent/30 rounded p-8 flex items-center justify-center">
          <BlueprintSVG />
        </div>
      </section>

      <section className="bg-primary/5 border-y border-accent/20 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl text-primary font-mono font-bold mb-12">SHOT TIMER</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <button
                onClick={simulatePull}
                disabled={isRunning}
                className="w-full px-6 py-4 bg-accent text-primary font-mono font-bold hover:bg-accent/80 transition disabled:opacity-50"
              >
                {isRunning ? 'PULLING...' : 'PULL SHOT'}
              </button>
            </div>
            <div className="text-center">
              <div className="text-5xl text-accent font-mono font-bold">{shotTime.toFixed(1)}s</div>
              <div className="text-xs text-primary/50 font-mono mt-2">IDEAL: 25-28s</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl text-primary font-mono font-bold mb-12">SPECIFICATIONS</h2>
        <div className="grid grid-cols-4 gap-4">
          {specs.map((s, i) => (
            <div key={i} className="p-4 border border-accent/20 bg-light/50">
              <div className="text-xs font-mono text-accent mb-1">{s.label}</div>
              <div className="text-sm text-dark font-mono">{s.value}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-primary text-light border-t border-accent/30 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-xs font-mono">
          <p>VELOX / Industrial espresso engineering since 2024</p>
        </div>
      </footer>
    </main>
  );
}
