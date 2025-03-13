
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [academicDropdownOpen, setAcademicDropdownOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAcademicDropdown = (e: React.MouseEvent) => {
    if (isMobile) {
      e.preventDefault();
      setAcademicDropdownOpen(!academicDropdownOpen);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    setAcademicDropdownOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-college-blue flex items-center justify-center">
                <span className="text-white font-serif font-bold text-xl">E</span>
              </div>
              <span className="ml-3 text-xl font-serif font-bold text-college-blue max-w-[180px] sm:max-w-none truncate">Evergreen University</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-college-blue transition-colors font-medium">Home</Link>
            
            <div className="relative group">
              <button 
                onClick={toggleAcademicDropdown}
                className="text-gray-700 hover:text-college-blue transition-colors font-medium flex items-center"
              >
                Academics <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className={`absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg ${academicDropdownOpen ? 'block' : 'hidden'} group-hover:block`}>
                <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Undergraduate</Link>
                <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Graduate</Link>
                <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Departments</Link>
                <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Research</Link>
              </div>
            </div>
            
            <Link to="#" className="text-gray-700 hover:text-college-blue transition-colors font-medium">Campus Life</Link>
            <Link to="#" className="text-gray-700 hover:text-college-blue transition-colors font-medium">Admission</Link>
            <Link to="#" className="text-gray-700 hover:text-college-blue transition-colors font-medium">About</Link>
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:block">
            <Button className="bg-college-blue hover:bg-college-light-blue text-white">Apply Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-college-blue focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link to="/" onClick={closeMenu} className="text-gray-700 hover:text-college-blue py-2 font-medium">Home</Link>
              
              <button 
                onClick={toggleAcademicDropdown}
                className="text-gray-700 hover:text-college-blue py-2 font-medium flex items-center justify-between"
              >
                Academics <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${academicDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {academicDropdownOpen && (
                <div className="pl-4 flex flex-col space-y-2 border-l-2 border-gray-200 animate-fade-in">
                  <Link to="#" onClick={closeMenu} className="text-gray-600 hover:text-college-blue py-1">Undergraduate</Link>
                  <Link to="#" onClick={closeMenu} className="text-gray-600 hover:text-college-blue py-1">Graduate</Link>
                  <Link to="#" onClick={closeMenu} className="text-gray-600 hover:text-college-blue py-1">Departments</Link>
                  <Link to="#" onClick={closeMenu} className="text-gray-600 hover:text-college-blue py-1">Research</Link>
                </div>
              )}
              
              <Link to="#" onClick={closeMenu} className="text-gray-700 hover:text-college-blue py-2 font-medium">Campus Life</Link>
              <Link to="#" onClick={closeMenu} className="text-gray-700 hover:text-college-blue py-2 font-medium">Admission</Link>
              <Link to="#" onClick={closeMenu} className="text-gray-700 hover:text-college-blue py-2 font-medium">About</Link>
              
              <Button className="bg-college-blue hover:bg-college-light-blue text-white w-full mt-4">Apply Now</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
