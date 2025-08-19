import Header from './Header';
import Footer from './Footer';
import { Livvic } from 'next/font/google'


const livvic = Livvic({
  subsets: ['latin'],
  weight: ['400', '700'], // escolha os pesos que você quer
  variable: '--font-livvic',
  display: 'swap',
})

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Adiciona padding-top para não cobrir o conteúdo com o header fixo */}
      <main className="pt-20 flex-1" >
        {children}
      </main>
      <Footer /> {/* O Footer agora será exibido após o conteúdo principal */}
    </div>
  );
};

export default Layout;
