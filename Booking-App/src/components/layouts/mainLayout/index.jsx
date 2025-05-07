import { navLinks } from '@/components/layouts/mainLayout/config';
import clsx from 'clsx';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '@/components/Footer';
import logo from '@/assets/logo.png'

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 px-6 py-4 shadow-md">
        <nav className="flex items-center justify-between max-w-5xl mx-auto">
          <div className="flex flex-row items-center">
            <NavLink to="/"><img src={logo} alt="HomePage" className="w-12 inline-block pl-1"/> 
            </NavLink>
          </div>
          <ul className="flex gap-6">
            {navLinks.map(({ name, to }) => (
              <li key={name}>
                <NavLink
                  to={to}
                  end
                  className={({ isActive }) =>
                    clsx(
                      'text-blue-400 hover:text-yellow-400 transition-colors',
                      isActive && 'text-yellow-400',
                    )
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="px-6 py-10 max-w-5xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
