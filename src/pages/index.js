
import { Inter } from 'next/font/google';
import HomePage from "@/components/Home/home";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});


export default function Home() {
  return (
    <>
     <div className={inter.className}>
      <HomePage></HomePage>
      </div>
    </>
  );
}