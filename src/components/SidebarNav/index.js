import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SideNavContainer } from "./styles";
import { BsChevronRight } from "react-icons/bs";

export default function SidebarNav() {
  return (
    <>
      <SideNavContainer>
        <nav className='sidebar sidebar-offcanvas' id='sidebar'>
          <ul className='nav'>
            <li className='nav-item dash'>
              <Link href='/index.html' passHref>
                <span className='nav-link'>
                  <i className='icon-grid menu-icon'></i>
                  <span className='menu-title'>Dashboard</span>
                </span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='#ui-basic' passHref>
                <span
                  className='nav-link'
                  data-toggle='collapse'
                  aria-expanded='false'
                  aria-controls='ui-basic'
                >
                  <i className='icon-head menu-icon'></i>
                  <span className='menu-title'>Admins</span>
                  <BsChevronRight className='ms-auto' />
                </span>
              </Link>

              <div className='collapse' id='ui-basic'>
                <ul className='nav flex-column sub-menu'>
                  <li className='nav-item'>
                    {" "}
                    <a
                      className='nav-link'
                      href='pages/ui-features/buttons.html'
                    >
                      Buttons
                    </a>
                  </li>
                  <li className='nav-item'>
                    {" "}
                    <a
                      className='nav-link'
                      href='pages/ui-features/dropdowns.html'
                    >
                      Dropdowns
                    </a>
                  </li>
                  <li className='nav-item'>
                    {" "}
                    <a
                      className='nav-link'
                      href='pages/ui-features/typography.html'
                    >
                      Typography
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className='nav-item'>
              <Link href='#form-elements' passHref>
                <span
                  className='nav-link'
                  data-toggle='collapse'
                  aria-expanded='false'
                  aria-controls='form-elements'
                >
                  <i className='icon-head menu-icon'></i>
                  <span className='menu-title'>Customers</span>
                  <BsChevronRight className='ms-auto' />
                </span>
              </Link>

              <div className='collapse' id='form-elements'>
                <ul className='nav flex-column sub-menu'>
                  <li className='nav-item'>
                    <a
                      className='nav-link'
                      href='pages/forms/basic_elements.html'
                    >
                      Basic Elements
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className='nav-item'>
              <Link href='#charts'>
                <span
                  className='nav-link'
                  data-toggle='collapse'
                  aria-expanded='false'
                  aria-controls='charts'
                >
                  <i className='icon-head menu-icon'></i>
                  <span className='menu-title'> Triger Classification</span>
                  <BsChevronRight className='ms-auto' />
                </span>
              </Link>

              <div className='collapse' id='charts'>
                <ul className='nav flex-column sub-menu'>
                  <li className='nav-item'>
                    {" "}
                    <a className='nav-link' href='pages/charts/chartjs.html'>
                      ChartJs
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className='nav-item'>
              <Link href='#tables'>
                <span
                  className='nav-link'
                  data-toggle='collapse'
                  aria-expanded='false'
                  aria-controls='tables'
                >
                  <i className='icon-grid-2 menu-icon'></i>
                  <span className='menu-title'>Vehicles</span>
                  <BsChevronRight className='ms-auto' />
                </span>
              </Link>

              <div className='collapse' id='tables'>
                <ul className='nav flex-column sub-menu'>
                  <li className='nav-item'>
                    {" "}
                    <a
                      className='nav-link'
                      href='pages/tables/basic-table.html'
                    >
                      Basic table
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </SideNavContainer>
    </>
  );
}
