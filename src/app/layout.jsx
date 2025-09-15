// /src/app/layout.jsx
import './global.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Intra Analytics',
  description: 'AutoGen Reports – Turn your raw data into insights',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
