import FooterNav from "@/src/components/FooterNav";
import TopNav from "@/src/components/TopNav";
import React from "react";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import SidebarNav from "@/src/components/SidebarNav";
import { Dropdown, Space, Button, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { BsChevronDown } from "react-icons/bs";

export default function HomeLayout() {
  const timeItems = [
    {
      key: "1",
      label: <span>1st menu item</span>,
    },
    {
      key: "2",
      label: <a>2nd menu item</a>,
    },
    {
      key: "3",
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.luohanacademy.com'
        >
          3rd menu item
        </a>
      ),
    },
  ];
  const menu = (
    <Menu className='py-2'>
      <Menu.Item key='1'>
        <Link href='#'>January - March</Link>
      </Menu.Item>
      <Menu.Item key='2'>
        <Link href='#'>April - June</Link>
      </Menu.Item>
      <Menu.Item key='3'>
        <Link href='#'>July - September</Link>
      </Menu.Item>
      <Menu.Item key='4'>
        <Link href='#'>October - December</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className='container-scroller'>
      <TopNav />
      <div className='container-fluid page-body-wrapper'>
        <div className='theme-setting-wrapper'>
          <div id='theme-settings' className='settings-panel'>
            <i className='settings-close ti-close'></i>
            <p className='settings-heading'>SIDEBAR SKINS</p>
            <div
              className='sidebar-bg-options selected'
              id='sidebar-light-theme'
            >
              <div className='img-ss rounded-circle bg-light border mr-3'></div>
              Light
            </div>
            <div className='sidebar-bg-options' id='sidebar-dark-theme'>
              <div className='img-ss rounded-circle bg-dark border mr-3'></div>
              Dark
            </div>
            <p className='settings-heading mt-2'>HEADER SKINS</p>
            <div className='color-tiles mx-0 px-4'>
              <div className='tiles success'></div>
              <div className='tiles warning'></div>
              <div className='tiles danger'></div>
              <div className='tiles info'></div>
              <div className='tiles dark'></div>
              <div className='tiles default'></div>
            </div>
          </div>
        </div>
        <div id='right-sidebar' className='settings-panel'>
          <i className='settings-close ti-close'></i>
          <ul
            className='nav nav-tabs border-top'
            id='setting-panel'
            role='tablist'
          >
            <li className='nav-item'>
              <a
                className='nav-link active'
                id='todo-tab'
                data-toggle='tab'
                href='#todo-section'
                role='tab'
                aria-controls='todo-section'
                aria-expanded='true'
              >
                TO DO LIST
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                id='chats-tab'
                data-toggle='tab'
                href='#chats-section'
                role='tab'
                aria-controls='chats-section'
              >
                CHATS
              </a>
            </li>
          </ul>
          <div className='tab-content' id='setting-content'>
            <div
              className='tab-pane fade show active scroll-wrapper'
              id='todo-section'
              role='tabpanel'
              aria-labelledby='todo-section'
            >
              <div className='add-items d-flex px-3 mb-0'>
                <form className='form w-100'>
                  <div className='form-group d-flex'>
                    <input
                      type='text'
                      className='form-control todo-list-input'
                      placeholder='Add To-do'
                    />
                    <button
                      type='submit'
                      className='add btn btn-primary todo-list-add-btn'
                      id='add-task'
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
              <div className='list-wrapper px-3'>
                <ul className='d-flex flex-column-reverse todo-list'>
                  <li>
                    <div className='form-check'>
                      <label className='form-check-label'>
                        <input className='checkbox' type='checkbox' />
                        Team review meeting at 3.00 PM
                      </label>
                    </div>
                    <i className='remove ti-close'></i>
                  </li>
                  <li>
                    <div className='form-check'>
                      <label className='form-check-label'>
                        <input className='checkbox' type='checkbox' />
                        Prepare for presentation
                      </label>
                    </div>
                    <i className='remove ti-close'></i>
                  </li>
                  <li>
                    <div className='form-check'>
                      <label className='form-check-label'>
                        <input className='checkbox' type='checkbox' />
                        Resolve all the low priority tickets due today
                      </label>
                    </div>
                    <i className='remove ti-close'></i>
                  </li>
                  <li className='completed'>
                    <div className='form-check'>
                      <label className='form-check-label'>
                        <input className='checkbox' type='checkbox' checked />
                        Schedule meeting for next week
                      </label>
                    </div>
                    <i className='remove ti-close'></i>
                  </li>
                  <li className='completed'>
                    <div className='form-check'>
                      <label className='form-check-label'>
                        <input className='checkbox' type='checkbox' checked />
                        Project review
                      </label>
                    </div>
                    <i className='remove ti-close'></i>
                  </li>
                </ul>
              </div>
              <h4 className='px-3 text-muted mt-5 font-weight-light mb-0'>
                Events
              </h4>
              <div className='events pt-4 px-3'>
                <div className='wrapper d-flex mb-2'>
                  <i className='ti-control-record text-primary mr-2'></i>
                  <span>Feb 11 2018</span>
                </div>
                <p className='mb-0 font-weight-thin text-gray'>
                  Creating component page build a js
                </p>
                <p className='text-gray mb-0'>The total number of sessions</p>
              </div>
              <div className='events pt-4 px-3'>
                <div className='wrapper d-flex mb-2'>
                  <i className='ti-control-record text-primary mr-2'></i>
                  <span>Feb 7 2018</span>
                </div>
                <p className='mb-0 font-weight-thin text-gray'>
                  Meeting with Alisa
                </p>
                <p className='text-gray mb-0 '>Call Sarah Graves</p>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='chats-section'
              role='tabpanel'
              aria-labelledby='chats-section'
            >
              <div className='d-flex align-items-center justify-content-between border-bottom'>
                <p className='settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0'>
                  Friends
                </p>
                <small className='settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 font-weight-normal'>
                  See All
                </small>
              </div>
              <ul className='chat-list'>
                <li className='list active'>
                  <div className='profile'>
                    <img src='/images/faces/face1.jpg' alt='image' />
                    <span className='online'></span>
                  </div>
                  <div className='info'>
                    <p>Thomas Douglas</p>
                    <p>Available</p>
                  </div>
                  <small className='text-muted my-auto'>19 min</small>
                </li>
                <li className='list'>
                  <div className='profile'>
                    <img src='/images/faces/face2.jpg' alt='image' />
                    <span className='offline'></span>
                  </div>
                  <div className='info'>
                    <div className='wrapper d-flex'>
                      <p>Catherine</p>
                    </div>
                    <p>Away</p>
                  </div>
                  <div className='badge badge-success badge-pill my-auto mx-2'>
                    4
                  </div>
                  <small className='text-muted my-auto'>23 min</small>
                </li>
                <li className='list'>
                  <div className='profile'>
                    <img src='/images/faces/face3.jpg' alt='image' />
                    <span className='online'></span>
                  </div>
                  <div className='info'>
                    <p>Daniel Russell</p>
                    <p>Available</p>
                  </div>
                  <small className='text-muted my-auto'>14 min</small>
                </li>
                <li className='list'>
                  <div className='profile'>
                    <img src='/images/faces/face4.jpg' alt='image' />
                    <span className='offline'></span>
                  </div>
                  <div className='info'>
                    <p>James Richardson</p>
                    <p>Away</p>
                  </div>
                  <small className='text-muted my-auto'>2 min</small>
                </li>
                <li className='list'>
                  <div className='profile'>
                    <img src='/images/faces/face5.jpg' alt='image' />
                    <span className='online'></span>
                  </div>
                  <div className='info'>
                    <p>Madeline Kennedy</p>
                    <p>Available</p>
                  </div>
                  <small className='text-muted my-auto'>5 min</small>
                </li>
                <li className='list'>
                  <div className='profile'>
                    <img src='/images/faces/face6.jpg' alt='image' />
                    <span className='online'></span>
                  </div>
                  <div className='info'>
                    <p>Sarah Graves</p>
                    <p>Available</p>
                  </div>
                  <small className='text-muted my-auto'>47 min</small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <SidebarNav />
        <div className='main-panel'>
          <div className='content-wrapper'>
            <div className='row'>
              <div className='col-md-12 grid-margin'>
                <div className='row'>
                  <div className='col-12 col-xl-8 mb-4 mb-xl-0'>
                    <h3 className='font-weight-bold'>Welcome Jimi fashina</h3>
                    <h6 className='font-weight-normal mb-0'>
                      All systems are running smoothly! You have{" "}
                      <span className='text-primary'>3 unread alerts!</span>
                    </h6>
                  </div>

                  <div className='col-12 col-xl-4'>
                    <div className='justify-content-end d-flex'>
                      <Dropdown overlay={menu}>
                        <button
                          className='btn btn-sm btn-light bg-white '
                          type='button'
                          id='dropdownMenuDate2'
                          data-toggle='dropdown'
                          aria-haspopup='true'
                          aria-expanded='true'
                        >
                          Today (10 Jan 2021){" "}
                          <BsChevronDown style={{ marginLeft: "0.3rem" }} />
                        </button>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6 grid-margin stretch-card'>
                <div className='card tale-bg'>
                  <div className='card-people mt-auto'>
                    <img
                      src='/images/dashboard/crash-concept-illustration-1a.jpg'
                      alt='people'
                    />
                    <div className='weather-info'>
                      <div className='d-flex'>
                        <div>
                          <h2 className='mb-0 font-weight-normal'>
                            <i className='icon-sun mr-2'></i>31<sup>C</sup>
                          </h2>
                        </div>
                        <div className='ml-2'>
                          <h4 className='location font-weight-normal'>
                            Nigeria
                          </h4>
                          <h6 className='font-weight-normal'>Lagos</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 grid-margin transparent'>
                <div className='row'>
                  <div className='col-md-6 mb-4 stretch-card transparent'>
                    <div className='card card-tale'>
                      <div className='card-body'>
                        <p className='mb-4'>Triggers</p>
                        <p className='fs-30 mb-2'>6</p>
                        <p>Today</p>
                      </div>
                    </div>
                  </div>

                  <div className='col-md-6 mb-4 stretch-card transparent'>
                    <div className='card  card-light-danger'>
                      <div className='card-body'>
                        <p className='mb-4'>Claims Subrogation</p>
                        <p className='fs-30 mb-2'>2</p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6 mb-4 mb-lg-0 stretch-card transparent'>
                    <div className='card  card-dark-blue'>
                      <div className='card-body'>
                        <p className='mb-4'>Customers</p>
                        <p className='fs-30 mb-2'>12</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6 stretch-card transparent'>
                    <div className='card card-light-blue '>
                      <div className='card-body'>
                        <p className='mb-4'>Classifications</p>
                        <p className='fs-30 mb-2'>3</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FooterNav />
        </div>
      </div>
    </div>
  );
}
