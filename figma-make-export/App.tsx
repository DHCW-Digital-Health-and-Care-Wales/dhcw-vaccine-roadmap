import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { ChevronUp, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import logoImage from 'figma:asset/867d4f4f8993384a3357933779e38593579f4469.png';

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('working-on');

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);

      // Determine active section
      const sections = ['working-on', 'progress'];
      const scrollPosition = window.scrollY + 200; // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#325083] text-white h-[140px] px-6 fixed w-full top-0 z-50 shadow-md flex items-center">
        <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
          <a href="#" onClick={scrollToTop} className="flex items-center space-x-3 cursor-pointer group">
            <img 
              src={logoImage} 
              alt="DHCW Logo" 
              className="h-[120px] object-contain transition-transform group-hover:scale-105"
            />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#working-on" className={`px-3 py-2 rounded transition-colors cursor-pointer ${activeSection === 'working-on' ? 'bg-white text-[#325083]' : 'hover:bg-white hover:text-[#325083]'}`}>What We're Working On</a>
            <a href="#progress" className={`px-3 py-2 rounded transition-colors cursor-pointer ${activeSection === 'progress' ? 'bg-white text-[#325083]' : 'hover:bg-white hover:text-[#325083]'}`}>Our Progress</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-[#005AA8]/20 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <div className="flex flex-col space-y-3">
              <a 
                href="#working-on" 
                onClick={handleNavClick}
                className="hover:text-[#005AA8] hover:bg-[#005AA8]/10 transition-colors cursor-pointer py-2 px-4 rounded"
              >
                What We're Working On
              </a>
              <a 
                href="#progress" 
                onClick={handleNavClick}
                className="hover:text-[#005AA8] hover:bg-[#005AA8]/10 transition-colors cursor-pointer py-2 px-4 rounded"
              >
                Our Progress
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* What We're Working On Section */}
      <section id="working-on" className="pt-[156px] pb-16 px-6 bg-[#F0F4F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B365D] mb-8">What we're working on</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-[#D8DDE0]">
              <p className="text-[#212B32] leading-relaxed text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p className="text-[#212B32] leading-relaxed mt-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="bg-gray-200 rounded-lg overflow-hidden h-64 md:h-auto">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762768767074-e491f1eebdfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaGVhbHRoJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njc2ODM3NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Digital Health Technology"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Progress Section */}
      <section id="progress" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B365D] mb-4">Our progress</h2>
          <div className="bg-[#F0F4F5] p-8 rounded-lg border border-[#D8DDE0]">
            <p className="text-[#212B32] leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-[#212B32] leading-relaxed mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-[#212B32] leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>

          {/* Progress Bar with Milestones */}
          <div className="mt-12 bg-white p-8 rounded-lg border border-[#D8DDE0] shadow-md">
            <h3 className="text-xl font-bold text-[#1B365D] mb-8 text-center">Implementation Timeline</h3>
            <div className="relative pt-12 pb-8">
              {/* Progress Bar Background */}
              <div className="absolute top-16 left-0 w-full h-2 bg-gray-200 rounded-full">
                {/* Progress Bar Fill */}
                <div 
                  className="h-full bg-[#005AA8] rounded-full transition-all duration-1000" 
                  style={{ width: '85%' }}
                ></div>
              </div>

              {/* Milestones */}
              <div className="relative flex justify-between">
                {/* Milestone 1 */}
                <div className="flex flex-col items-center group relative" style={{ width: '20%' }}>
                  <div className="relative z-10 w-6 h-6 bg-[#005AA8] rounded-full border-4 border-white shadow-lg cursor-pointer group-hover:scale-125 transition-transform"></div>
                  <div className="mt-6 text-center">
                    <div className="text-sm font-bold text-[#1B365D]">Q1 2024</div>
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 hidden group-hover:block bg-[#1B365D] text-white text-sm rounded-lg p-3 shadow-xl w-48 z-20">
                    <div className="font-bold mb-1">Project Initiation</div>
                    <p className="text-xs">Started digital infrastructure planning and stakeholder engagement across all health boards.</p>
                    <div className="absolute top-full left-1/2 -translate-x-1/2" style={{ borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderTop: '8px solid #1B365D' }}></div>
                  </div>
                </div>

                {/* Milestone 2 */}
                <div className="flex flex-col items-center group relative" style={{ width: '20%' }}>
                  <div className="relative z-10 w-6 h-6 bg-[#005AA8] rounded-full border-4 border-white shadow-lg cursor-pointer group-hover:scale-125 transition-transform"></div>
                  <div className="mt-6 text-center">
                    <div className="text-sm font-bold text-[#1B365D]">Q2 2024</div>
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 hidden group-hover:block bg-[#1B365D] text-white text-sm rounded-lg p-3 shadow-xl w-48 z-20">
                    <div className="font-bold mb-1">System Integration</div>
                    <p className="text-xs">Completed integration of 50+ healthcare systems and began pilot programs in 3 health boards.</p>
                    <div className="absolute top-full left-1/2 -translate-x-1/2" style={{ borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderTop: '8px solid #1B365D' }}></div>
                  </div>
                </div>

                {/* Milestone 3 */}
                <div className="flex flex-col items-center group relative" style={{ width: '20%' }}>
                  <div className="relative z-10 w-6 h-6 bg-[#005AA8] rounded-full border-4 border-white shadow-lg cursor-pointer group-hover:scale-125 transition-transform"></div>
                  <div className="mt-6 text-center">
                    <div className="text-sm font-bold text-[#1B365D]">Q3 2024</div>
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 hidden group-hover:block bg-[#1B365D] text-white text-sm rounded-lg p-3 shadow-xl w-48 z-20">
                    <div className="font-bold mb-1">Training & Rollout</div>
                    <p className="text-xs">Trained 10,000+ healthcare professionals and expanded system access to 5 health boards.</p>
                    <div className="absolute top-full left-1/2 -translate-x-1/2" style={{ borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderTop: '8px solid #1B365D' }}></div>
                  </div>
                </div>

                {/* Milestone 4 */}
                <div className="flex flex-col items-center group relative" style={{ width: '20%' }}>
                  <div className="relative z-10 w-6 h-6 bg-[#005AA8] rounded-full border-4 border-white shadow-lg cursor-pointer group-hover:scale-125 transition-transform"></div>
                  <div className="mt-6 text-center">
                    <div className="text-sm font-bold text-[#1B365D]">Q4 2024</div>
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 hidden group-hover:block bg-[#1B365D] text-white text-sm rounded-lg p-3 shadow-xl w-48 z-20">
                    <div className="font-bold mb-1">Full Deployment</div>
                    <p className="text-xs">Achieved 85% rollout completion with all 7 health boards now connected to the unified platform.</p>
                    <div className="absolute top-full left-1/2 -translate-x-1/2" style={{ borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderTop: '8px solid #1B365D' }}></div>
                  </div>
                </div>

                {/* Milestone 5 */}
                <div className="flex flex-col items-center group relative" style={{ width: '20%' }}>
                  <div className="relative z-10 w-6 h-6 bg-gray-300 rounded-full border-4 border-white shadow-lg cursor-pointer group-hover:scale-125 transition-transform"></div>
                  <div className="mt-6 text-center">
                    <div className="text-sm font-bold text-gray-500">Q2 2025</div>
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 hidden group-hover:block bg-[#1B365D] text-white text-sm rounded-lg p-3 shadow-xl w-48 z-20">
                    <div className="font-bold mb-1">Future Enhancement</div>
                    <p className="text-xs">Planned completion of advanced analytics, AI integration, and full telemedicine capabilities.</p>
                    <div className="absolute top-full left-1/2 -translate-x-1/2" style={{ borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderTop: '8px solid #1B365D' }}></div>
                  </div>
                </div>
              </div>

              {/* Progress Percentage */}
              <div className="mt-8 text-center">
                <span className="text-3xl font-bold text-[#005AA8]">85%</span>
                <span className="text-[#212B32] ml-2">Complete</span>
              </div>
            </div>
          </div>

          {/* Outcomes Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-12 text-center">Outcomes</h3>
            
            {/* Outcome 1 */}
            <div className="mb-16">
              <h4 className="text-xl font-bold text-[#1B365D] mb-4">Outcome 1</h4>
              <div className="bg-[#F0F4F5] p-6 rounded-lg border border-[#D8DDE0] mb-8">
                <p className="text-[#212B32] leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg border border-[#D8DDE0] overflow-hidden">
                  <div className="bg-[#1B365D] text-white px-4 py-3">
                    <h3 className="font-bold">Recently completed</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-[#212B32] leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-[#D8DDE0] overflow-hidden">
                  <div className="bg-[#1B365D] text-white px-4 py-3">
                    <h3 className="font-bold">Working on next</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-[#212B32] leading-relaxed">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-[#D8DDE0] overflow-hidden">
                  <div className="bg-[#1B365D] text-white px-4 py-3">
                    <h3 className="font-bold">Working on later</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-[#212B32] leading-relaxed">
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Outcome 2 */}
            <div>
              <h4 className="text-xl font-bold text-[#1B365D] mb-4">Outcome 2</h4>
              <div className="bg-[#F0F4F5] p-6 rounded-lg border border-[#D8DDE0] mb-8">
                <p className="text-[#212B32] leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg border border-[#D8DDE0] overflow-hidden">
                  <div className="bg-[#1B365D] text-white px-4 py-3">
                    <h3 className="font-bold">Recently completed</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-[#212B32] leading-relaxed">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-[#D8DDE0] overflow-hidden">
                  <div className="bg-[#1B365D] text-white px-4 py-3">
                    <h3 className="font-bold">Working on next</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-[#212B32] leading-relaxed">
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-[#D8DDE0] overflow-hidden">
                  <div className="bg-[#1B365D] text-white px-4 py-3">
                    <h3 className="font-bold">Working on later</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-[#212B32] leading-relaxed">
                      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#325083] text-white py-8 px-6 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <img 
            src={logoImage} 
            alt="DHCW Logo" 
            className="h-[80px] object-contain mx-auto mb-4"
          />
          <p className="text-gray-300">© 2026 DHCW. All rights reserved.</p>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#1B365D] hover:bg-[#4C6272] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer z-50 focus:outline-none focus:ring-4 focus:ring-[#FFEB3B]"
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}