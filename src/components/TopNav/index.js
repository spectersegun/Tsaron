import React, { useState } from "react";
import { TopNavContainer } from "./styles";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FcViewDetails } from "react-icons/fc";
import { TbSearch } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";

export default function TopNav() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <TopNavContainer>
      <nav className='navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row'>
        <div className='text-center navbar-brand-wrapper d-flex align-items-center justify-content-center'>
          <a className='navbar-brand brand-logo mr-5' href='index.html'>
            LoveLetter
          </a>
          <a className='navbar-brand brand-logo-mini' href='index.html'>
            <img src='/images/logo-mini.svg' alt='logo' />
          </a>
        </div>
        <div className='navbar-menu-wrapper d-flex align-items-center justify-content-end'>
          <button
            className='navbar-toggler navbar-toggler align-self-center'
            type='button'
            data-toggle='minimize'
          >
            <AiOutlineMenuUnfold />
            {/* <FcViewDetails /> */}
          </button>

          <ul className='navbar-nav mr-lg-2'>
            <li className='nav-item nav-search d-none d-lg-block'>
              <div className='input-group'>
                <div
                  className='input-group-prepend hover-cursor'
                  id='navbar-search-icon'
                >
                  <span className='input-group-text' id='search'>
                    <TbSearch style={{ width: "18px", height: "18px" }} />
                  </span>
                </div>
                <input
                  type='text'
                  className='form-control'
                  id='navbar-search-input'
                  placeholder='Search now'
                  aria-label='search'
                  aria-describedby='search'
                />
              </div>
            </li>
          </ul>

          <ul className='navbar-nav navbar-nav-right'>
            <li className='nav-item dropdown'>
              <a
                className='nav-link count-indicator dropdown-toggle'
                id='notificationDropdown'
                href='#'
                data-toggle='dropdown'
              >
                {/* <MdOutlineNotificationsNone
                  style={{ width: "24px", height: "24px" }}
                /> */}
                <i className='icon-bell mx-0'></i>
                <span className='count'></span>
              </a>
              <div
                className='dropdown-menu dropdown-menu-right navbar-dropdown preview-list'
                aria-labelledby='notificationDropdown'
              >
                <p className='mb-0 font-weight-normal float-left dropdown-header'>
                  Notifications
                </p>
                <a className='dropdown-item preview-item'>
                  <div className='preview-thumbnail'>
                    <div className='preview-icon bg-success'>
                      <i className='ti-info-alt mx-0'></i>
                    </div>
                  </div>
                  <div className='preview-item-content'>
                    <h6 className='preview-subject font-weight-normal'>
                      Application Error
                    </h6>
                    <p className='font-weight-light small-text mb-0 text-muted'>
                      Just now
                    </p>
                  </div>
                </a>
                <a className='dropdown-item preview-item'>
                  <div className='preview-thumbnail'>
                    <div className='preview-icon bg-warning'>
                      <i className='ti-settings mx-0'></i>
                    </div>
                  </div>
                  <div className='preview-item-content'>
                    <h6 className='preview-subject font-weight-normal'>
                      Settings
                    </h6>
                    <p className='font-weight-light small-text mb-0 text-muted'>
                      Private message
                    </p>
                  </div>
                </a>
                <a className='dropdown-item preview-item'>
                  <div className='preview-thumbnail'>
                    <div className='preview-icon bg-info'>
                      <i className='ti-user mx-0'></i>
                    </div>
                  </div>
                  <div className='preview-item-content'>
                    <h6 className='preview-subject font-weight-normal'>
                      New user registration
                    </h6>
                    <p className='font-weight-light small-text mb-0 text-muted'>
                      2 days ago
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className='nav-item nav-profile dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                data-toggle='dropdown'
                id='profileDropdown'
              >
                <img src='/images/faces/face28.jpg' alt='profile' />
              </a>
              <div
                className='dropdown-menu dropdown-menu-right navbar-dropdown'
                aria-labelledby='profileDropdown'
              >
                <a className='dropdown-item'>
                  <i className='ti-settings text-primary'></i>
                  Settings
                </a>
                <a className='dropdown-item'>
                  <i className='ti-power-off text-primary'></i>
                  Logout
                </a>
              </div>
            </li>
            <li className='nav-item nav-settings d-none d-lg-flex'>
              <a className='nav-link' href='#'>
                <i className='icon-ellipsis'></i>
              </a>
            </li>
          </ul>
          <button
            className='navbar-toggler navbar-toggler-right d-lg-none align-self-center'
            type='button'
            data-toggle='offcanvas'
            onClick={() => setShowMobileNav((prevState) => !prevState)}
          >
            <AiOutlineMenuUnfold />
          </button>
        </div>
      </nav>

      {/* <nav
        class={
          showMobileNav
            ? "sidebar sidebar-offcanvas active"
            : "sidebar sidebar-offcanvas"
        }
        id='sidebar'
      >
        <ul class='nav'>
          <li class='nav-item'>
            <a class='nav-link' href='index.html'>
              <i class='icon-grid menu-icon'></i>
              <span class='menu-title'>Dashboard</span>
            </a>
          </li>
          <li class='nav-item'>
            <a
              class='nav-link'
              data-toggle='collapse'
              href='#ui-basic'
              aria-expanded='false'
              aria-controls='ui-basic'
            >
              <i class='icon-layout menu-icon'></i>
              <span class='menu-title'>UI Elements</span>
              <i class='menu-arrow'></i>
            </a>
            <div class='collapse' id='ui-basic'>
              <ul class='nav flex-column sub-menu'>
                <li class='nav-item'>
                  {" "}
                  <a class='nav-link' href='pages/ui-features/buttons.html'>
                    Buttons
                  </a>
                </li>
                <li class='nav-item'>
                  {" "}
                  <a class='nav-link' href='pages/ui-features/dropdowns.html'>
                    Dropdowns
                  </a>
                </li>
                <li class='nav-item'>
                  {" "}
                  <a class='nav-link' href='pages/ui-features/typography.html'>
                    Typography
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class='nav-item'>
            <a
              class='nav-link'
              data-toggle='collapse'
              href='#form-elements'
              aria-expanded='false'
              aria-controls='form-elements'
            >
              <i class='icon-columns menu-icon'></i>
              <span class='menu-title'>Form elements</span>
              <i class='menu-arrow'></i>
            </a>
            <div class='collapse' id='form-elements'>
              <ul class='nav flex-column sub-menu'>
                <li class='nav-item'>
                  <a class='nav-link' href='pages/forms/basic_elements.html'>
                    Basic Elements
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class='nav-item'>
            <a
              class='nav-link'
              data-toggle='collapse'
              href='#charts'
              aria-expanded='false'
              aria-controls='charts'
            >
              <i class='icon-bar-graph menu-icon'></i>
              <span class='menu-title'>Charts</span>
              <i class='menu-arrow'></i>
            </a>
            <div class='collapse' id='charts'>
              <ul class='nav flex-column sub-menu'>
                <li class='nav-item'>
                  {" "}
                  <a class='nav-link' href='pages/charts/chartjs.html'>
                    ChartJs
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class='nav-item'>
            <a
              class='nav-link'
              data-toggle='collapse'
              href='#tables'
              aria-expanded='false'
              aria-controls='tables'
            >
              <i class='icon-grid-2 menu-icon'></i>
              <span class='menu-title'>Tables</span>
              <i class='menu-arrow'></i>
            </a>
            <div class='collapse' id='tables'>
              <ul class='nav flex-column sub-menu'>
                <li class='nav-item'>
                  {" "}
                  <a class='nav-link' href='pages/tables/basic-table.html'>
                    Basic table
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class='nav-item'>
            <a
              class='nav-link'
              data-toggle='collapse'
              href='#icons'
              aria-expanded='false'
              aria-controls='icons'
            >
              <i class='icon-contract menu-icon'></i>
              <span class='menu-title'>Icons</span>
              <i class='menu-arrow'></i>
            </a>
            <div class='collapse' id='icons'>
              <ul class='nav flex-column sub-menu'>
                <li class='nav-item'>
                  {" "}
                  <a class='nav-link' href='pages/icons/mdi.html'>
                    Mdi icons
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class='nav-item'>
            <a
              class='nav-link'
              data-toggle='collapse'
              href='#auth'
              aria-expanded='false'
              aria-controls='auth'
            >
              <i class='icon-head menu-icon'></i>
              <span class='menu-title'>User Pages</span>
              <i class='menu-arrow'></i>
            </a>
            <div class='collapse' id='auth'>
              <ul class='nav flex-column sub-menu'>
                <li class='nav-item'>
                  {" "}
                  <a class='nav-link' href='pages/samples/login.html'>
                    {" "}
                    Login{" "}
                  </a>
                </li>
                <li class='nav-item'>
                  {" "}
                  <a class='nav-link' href='pages/samples/register.html'>
                    {" "}
                    Register{" "}
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class='nav-item'>
            <a
              class='nav-link'
              data-toggle='collapse'
              href='#error'
              aria-expanded='false'
              aria-controls='error'
            >
              <i class='icon-ban menu-icon'></i>
              <span class='menu-title'>Error pages</span>
              <i class='menu-arrow'></i>
            </a>
            <div class='collapse' id='error'>
              <ul class='nav flex-column sub-menu'>
                <li class='nav-item'>
                  {" "}
                  <a class='nav-link' href='pages/samples/error-404.html'>
                    {" "}
                    404{" "}
                  </a>
                </li>
                <li class='nav-item'>
                  {" "}
                  <a class='nav-link' href='pages/samples/error-500.html'>
                    {" "}
                    500{" "}
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='pages/documentation/documentation.html'>
              <i class='icon-paper menu-icon'></i>
              <span class='menu-title'>Documentation</span>
            </a>
          </li>
        </ul>
      </nav> */}
    </TopNavContainer>
  );
}
