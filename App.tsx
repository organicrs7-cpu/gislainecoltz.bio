import React from 'react';
import { MapPin, Phone, Instagram, Youtube, Mail, GraduationCap } from 'lucide-react';
import { VisualLinkCard } from './components/VisualLinkCard';
import { SimpleLinkButton } from './components/SimpleLinkButton';
import { BrandIcon } from './components/BrandIcon';

// Brand Colors from Manual
const COLORS = {
  primaryLight: '#eaddd5',
  primaryDark: '#9d6a6b',
  secondaryPeach: '#cea29b',
  secondaryLight: '#f6f5f2',
  accent: '#d8d4c9',
};

const App: React.FC = () => {

  const handleNavigation = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden selection:bg-[#cea29b] selection:text-[#f6f5f2] font-['Poppins']">
      {/* Background - Modern Mesh Gradient */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-[#f6f5f2]">
        {/* Top Right - Peach */}
        <div className="absolute top-[-10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-[#cea29b]/20 blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />

        {/* Top Left - Primary Light */}
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-[#eaddd5]/50 blur-[120px]" />

        {/* Bottom Left - Accent */}
        <div className="absolute bottom-[-10%] left-[-5%] h-[500px] w-[500px] rounded-full bg-[#d8d4c9]/40 blur-[120px]" />

        {/* Center Right - Primary Dark (subtle) */}
        <div className="absolute top-[40%] right-[-10%] h-[400px] w-[400px] rounded-full bg-[#9d6a6b]/5 blur-[150px]" />

        {/* Noise overlay for texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      </div>

      <div className="max-w-md mx-auto min-h-screen pb-20 bg-[#f6f5f2]/60 backdrop-blur-xl shadow-2xl border-x border-[#eaddd5]/40">

        {/* Hero Section - Large Image with Title */}
        <header className="relative overflow-hidden">
          {/* Hero Image Container */}
          <div className="relative w-full h-[450px] overflow-hidden">
            {/* Gradient Overlay for smooth fade at bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f6f5f2]/80 z-10"></div>

            {/* Main Hero Image */}
            <img
              src="/images/gislaine-perfil.png"
              alt="Gislaine Coltz"
              className="w-full h-full object-cover object-top"
              style={{
                objectPosition: 'center 15%',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)'
              }}
            />
          </div>

          {/* Title Section */}
          <div className="relative -mt-12 pb-8 px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-[0.15em] text-[#5a5a5a] mb-6 uppercase">
              LINKS IMPORTANTES
            </h1>

            {/* Decorative Line */}
            <div className="w-full h-[2px] bg-[#9d6a6b]/80 mx-auto"></div>
          </div>
        </header>

        {/* Main Links Container */}
        <main className="px-5 space-y-6">

          {/* Card 3: Cursos Presenciais */}
          <VisualLinkCard
            type="course"
            title="Cursos Presenciais"
            buttonText="Acesse Agora"
            theme="dark"
            imageUrl="https://picsum.photos/id/447/400/400"
            onClick={() => handleNavigation('#presenciais')}
          />

          {/* Card 4: Drenagem Online (Requested) */}
          <VisualLinkCard
            type="course"
            title="Curso de Drenagem"
            subtitle="Método Exclusivo"
            buttonText="Começar Agora"
            theme="peach"
            imageUrl="https://picsum.photos/id/338/400/400"
            onClick={() => handleNavigation('#drenagem')}
          />

          {/* Card 5: Agendar Atendimento */}
          <VisualLinkCard
            type="booking"
            title="Agendar Atendimento"
            subtitle="Clínica Estética"
            buttonText="Entre em Contato"
            theme="light"
            imageUrl="https://picsum.photos/id/106/400/400"
            onClick={() => handleNavigation('#agendar')}
          />

          {/* Secondary Links Section */}
          <div className="pt-8 space-y-4">
            <div className="flex items-center gap-2 justify-center mb-2">
              <span className="h-px w-8 bg-[#cea29b]"></span>
              <h3 className="text-center text-[#9d6a6b] text-xs font-bold tracking-[0.2em] uppercase">
                Outros Canais
              </h3>
              <span className="h-px w-8 bg-[#cea29b]"></span>
            </div>

            <SimpleLinkButton
              label="Mentoria Vip"
              icon={<GraduationCap size={20} />}
              brandColor={COLORS.secondaryPeach}
              onClick={() => handleNavigation('#mentoria')}
            />

            <SimpleLinkButton
              label="Canal no YouTube"
              icon={<Youtube size={20} />}
              brandColor={COLORS.primaryDark}
              onClick={() => handleNavigation('https://www.youtube.com/@gislainecoltz')}
            />
          </div>

        </main>

        {/* Footer */}
        <footer className="mt-16 pt-10 pb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#eaddd5]/40 to-transparent pointer-events-none"></div>

          <div className="flex flex-col items-center justify-center gap-4 text-sm text-[#9d6a6b] relative z-10">

            <a href="tel:+5551999863352" className="flex items-center gap-2 hover:text-[#cea29b] transition-colors bg-[#f6f5f2]/50 px-4 py-2 rounded-full shadow-sm">
              <Phone size={16} className="text-[#9d6a6b]" />
              <span className="font-medium">(51) 99986-3352</span>
            </a>

            <div className="flex items-start gap-2 max-w-[280px] text-center justify-center hover:text-[#cea29b] transition-colors cursor-pointer mt-2">
              <MapPin size={16} className="text-[#9d6a6b] mt-0.5 shrink-0" />
              <span>Av. Benjamin Constant, 852 - sala 504<br />Centro, Lajeado - RS</span>
            </div>

            <div className="mt-8 opacity-30 hover:opacity-100 transition-opacity duration-500">
              <BrandIcon color={COLORS.primaryDark} className="w-16 h-16" />
            </div>

            <p className="text-[10px] text-[#9d6a6b] opacity-60 mt-4 tracking-widest uppercase">
              © 2024 Gislaine Coltz
            </p>

          </div>
        </footer>

      </div>
    </div>
  );
};

export default App;