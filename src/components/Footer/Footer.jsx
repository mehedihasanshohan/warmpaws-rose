import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer
      data-aos="zoom-in-up"
      className="footer sm:footer-horizontal bg-blue-100 p-10
                 bg-linear-to-r from-teal-600 via-teal-700 to-teal-600"
    >
  <nav className='text-white'>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav className='text-white'>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav className='text-white'>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <Link to='/'>
        <FaFacebook className='w-6 h-6'></FaFacebook>
      </Link>
      <Link to='/'>
        <FaGithub className='w-6 h-6'></FaGithub>
      </Link>
      <Link to='/'>
        <FaLinkedin className='w-6 h-6'></FaLinkedin>
      </Link>
    </div>
  </nav>
</footer>
  )
}

export default Footer