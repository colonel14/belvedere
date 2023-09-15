"use client";
import Image from "next/image";
import { useState } from "react";

import { ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";
import MobileMenuItem from "./MobileMenuItem";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navigation = [
    {
      title: "about us",

      sublinks: [
        [
          {
            title: "Primary Head’s Welcome",
            href: "/",
          },
          {
            title: "Our History",
            href: "/",
          },
          {
            title: "Vision & Mission",
            href: "/",
          },
          {
            title: "Values and Ethos",
            href: "/",
          },
        ],
      ],
    },
    {
      title: "Admissions",
      href: "/",
    },
    {
      title: "Life & Learning",
      href: "/",
      sublinks: [
        [
          {
            title: "Academic",
            href: "/",
            isTitle: true,
          },
          {
            title: "A Broad Curriculum",
            href: "/",
          },
          {
            title: "Early Years Foundation Stage",
            href: "/",
          },
          {
            title: "Academic",
            href: "/",
          },
          {
            title: "Primary Stage",
            href: "/",
          },
          {
            title: "Secondary School",
            href: "/",
          },
          {
            title: "Teaching Methodology",
            href: "/",
          },
        ],
        [
          {
            title: "Extra-curricular Activities",
            href: "/",
            isTitle: true,
          },
          {
            title: "Sports",
            href: "/",
          },
          {
            title: "Music",
            href: "/",
          },
          {
            title: "Drama",
            href: "/",
          },
          {
            title: "Art & Design",
            href: "/",
          },
          {
            title: "Trips",
            href: "/",
          },
        ],
      ],
    },
    {
      title: "News & Events",
      href: "/",
    },
    {
      title: "Careers",
      href: "/",
    },
    {
      title: "Portals",
      href: "/",
    },
  ];

  return (
    <nav className="app__navbar">
      <div className="container">
        <div className="app__navbar-inner">
          <div className="app__navbar-logo">
            <Image src="/logo.png" width={150} height={70} alt="logo" />
          </div>
          <ul className="app__navbar-links">
            {navigation.map((item, idx) => (
              <li className="app__navbar-link" key={idx}>
                <a>{item.title}</a>
                {item.sublinks && (
                  <div className="menu__sub">
                    {item.sublinks.map((column, index) => (
                      <div className="menu__column" key={index}>
                        <ul>
                          {column.map((sublink, subLinkIdx) => (
                            <li
                              key={subLinkIdx}
                              className={
                                sublink.isTitle ? "menu__column-title" : ""
                              }
                            >
                              <Link href={sublink.href}>{sublink.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}

            <ul className="app__navbar-bottom_menu">
              <li>
                <Link href="/">View our prospectus</Link>
              </li>
            </ul>
          </ul>
          <div className="app__navbar-smallscreen">
            <Menu
              onClick={() => setToggleMenu(true)}
              className="app__navbar-menuicon"
            />
            {toggleMenu && (
              <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                <X
                  onClick={() => setToggleMenu(false)}
                  className="ovarlay__close"
                />
                <ul className="app__navbar-smallscreen-links">
                  {navigation.map((item, idx) => (
                    <MobileMenuItem link={item} key={idx} />
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
