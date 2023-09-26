import './globals.css';
import { Montserrat } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import NavigationBar from './components/navigation-bar';
import CurrentSectionContextProvider from './context/current-section-context';

// Define font settings for Montserrat
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

// Metadata for the site
export const metadata = {
  title: `Riva ｜ Personal Portfolio`,
  description: `Hi, I am a full stack software engineer :)`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <CurrentSectionContextProvider>
        <body
          className={`${montserrat.className} 
                     bg-zinc-50 
                     text-zinc-600 
                     w-screen 
                     overflow-x-hidden 
                     `}
        >
          {children}

          {/* Background color changes when window size changes */}
          <div className={`bg-sky-500 fixed top-[-5rem] left-[-5rem] h-[20rem] w-[20rem] rounded-full blur-[18rem] sm:blur-[12rem] opacity-[1] sm:h-[30rem] sm:w-[20rem] sm:top-[8rem] -z-10`}></div>
          <div className={`bg-yellow-300 fixed top-[20rem] left-[-5rem] h-[20rem] w-[20rem] rounded-full blur-[20rem] sm:blur-[15rem] opacity-4 sm:h-[30rem] sm:w-[20rem] sm:top-[25rem] sm:left-[-5rem] -z-10`}></div>
          

          <NavigationBar />
          
          {/* Toast notifications */}
          <Toaster
            position="top-right"
            reverseOrder={true}
          />
        </body>
      </CurrentSectionContextProvider>
    </html>
  );
}
