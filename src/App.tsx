import { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { ReadyToWork } from './components/ReadyToWork';
import { InkCursor } from './components/InkCursor';
import { ContactToggle } from './components/ContactToggle';
import { ContactSidebar } from './components/ContactSidebar';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div style={{ backgroundColor: '#1a1a1a', minHeight: '100vh', color: 'white', fontFamily: 'var(--font-body)' }}>
      <InkCursor />
      <ContactToggle isOpen={isSidebarOpen} toggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      <ContactSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <Hero />
      <About />
      <ReadyToWork onOpenContact={() => setIsSidebarOpen(true)} />
    </div>
  );
}





export default App;
