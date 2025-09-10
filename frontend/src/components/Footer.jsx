import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaUserCircle } from "react-icons/fa";


const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
      {/* Brand/Logo */}
      <div>
        <h1 className="text-2xl font-bold mb-2">Library Manager</h1>
        <p className="text-gray-400">Empowering smart libraries since 2025</p>
      </div>
      {/* Contact Info */}
      <div>
        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
        <p>Phone: +1 555-123-4567</p>
        <p>Email: support@librarymanager.com</p>
        <p>Address: 456 Main St, Mumbai</p>
      </div>
      {/* Social Links */}
      <div>
        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-blue-400" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-400" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-400" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-700" />
          </a>
        </div>
      </div>
      {/* Services/Links */}
      <div>
        <h3 className="text-xl font-bold mb-4">Services</h3>
        <ul>
          <li><a href="/books" className="hover:underline">Book Catalog</a></li>
          <li><a href="/members" className="hover:underline">Membership</a></li>
          <li><a href="/reports" className="hover:underline">Reports</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-400 text-sm">
      © {new Date().getFullYear()} Library Manager. All rights reserved.
    </div>
  </footer>
);

export default Footer;
