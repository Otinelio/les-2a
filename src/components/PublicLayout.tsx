import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

export default function PublicLayout() {
  return (
    <>
      <Navigation />
      {/* Add padding to account for fixed navigation */}
      <main style={{ paddingTop: '64px', minHeight: 'calc(100vh - 64px)' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
