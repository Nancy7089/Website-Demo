import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Bell, User } from "lucide-react";
import Logo from "../../assets/book-donation.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-md border-b border-accent sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2 sm:gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={Logo}
              alt="Seva Sahayog Logo"
              className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
            />
            <span className="text-xl sm:text-2xl font-bold text-primary">
              Seva Sahayog
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-secondary hover:text-primary transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              to="/donation"
              className="text-secondary hover:text-primary transition-colors duration-200 font-medium"
            >
              Donate
            </Link>
            <Link
              to="/recipient"
              className="text-secondary hover:text-primary transition-colors duration-200 font-medium"
            >
              For Organizations
            </Link>
            <Link
              to="/contact"
              className="text-secondary hover:text-primary transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Right Section: Notifications + Profile + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Notifications Bell - Hidden on mobile for space */}
            <button className="hidden sm:block p-2 text-secondary hover:text-primary transition-colors duration-200">
              <Bell className="w-6 h-6" />
            </button>

            {/* User Profile */}
            <button className="hidden sm:block p-2 text-secondary hover:text-primary transition-colors duration-200">
              <User className="w-6 h-6" />
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-secondary hover:text-primary transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-accent shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col space-y-1 py-4">
              <Link
                to="/"
                className="text-secondary hover:text-primary hover:bg-accent transition-all duration-200 font-medium px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/donation"
                className="text-secondary hover:text-primary hover:bg-accent transition-all duration-200 font-medium px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Donate
              </Link>
              <Link
                to="/recipient"
                className="text-secondary hover:text-primary hover:bg-accent transition-all duration-200 font-medium px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                For Organizations
              </Link>
              <Link
                to="/contact"
                className="text-secondary hover:text-primary hover:bg-accent transition-all duration-200 font-medium px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile-only actions */}
              <div className="flex gap-4 pt-3 mt-3 border-t border-accent">
                <button className="flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-200">
                  <Bell className="w-5 h-5" />
                  <span className="text-sm font-medium">Notifications</span>
                </button>
                <button className="flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-200">
                  <User className="w-5 h-5" />
                  <span className="text-sm font-medium">Profile</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
