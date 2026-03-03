import NeuralBackground from "@/components/NeuralBackground";

export default function Home() {
    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center p-8">
            <NeuralBackground />

            {/* Hero Section */}
            <div className="z-10 text-center max-w-4xl animate-fade-in">
                <header className="mb-12">
                    <h1 className="confera-title text-6xl md:text-8xl font-thin tracking-[0.3em] uppercase mb-4">
                        Confera
                    </h1>
                    <p className="text-gray-400 text-sm md:text-base tracking-[0.4em] uppercase font-light">
                        Connecting Business Globally.
                    </p>
                </header>

                {/* Central Glass Box */}
                <div className="glass p-12 rounded-[2rem] shadow-2xl relative overflow-hidden group hover:border-blue-500/20 transition-all duration-700">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <h2 className="text-xl md:text-2xl font-light tracking-widest text-white mb-6">
                        NEURAL INTELLIGENCE. HUMAN CONNECTION.
                    </h2>
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-8"></div>

                    <button className="px-12 py-4 bg-blue-600 hover:bg-blue-500 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] transform hover:scale-105 active:scale-95">
                        Priority Access
                    </button>
                </div>

                {/* Phone Mockups Section */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative glass rounded-[2.5rem] overflow-hidden aspect-[4/5] md:aspect-auto">
                            <img
                                src="/mockup1.png"
                                alt="Confera App Interface"
                                className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-[10px] font-bold tracking-widest uppercase text-blue-400">01. Neural Discovery</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative group md:mt-12">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-400 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative glass rounded-[2.5rem] overflow-hidden aspect-[4/5] md:aspect-auto">
                            <img
                                src="/mockup2.png"
                                alt="Confera Analytics Portal"
                                className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-[10px] font-bold tracking-widest uppercase text-purple-400">02. Partner Analytics</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="absolute bottom-8 text-[10px] text-gray-600 tracking-[0.3em] uppercase">
                © 2026 QuickShort LTD. All Rights Reserved.
            </footer>
        </main>
    );
}
