"use client";

import { theProtagonistsName } from "@/lib/constants";
import {
  closeDetailsSummaryDropdown,
  registerCloseCurrentDetailsSummaryDropdown,
} from "@/lib/utils";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwap } from "./next-theme-swap";
import { ThemeSwitchDropdown } from "./next-theme-switch-dropdown";

interface INavbarProps {}

const navItems = [
  {
    id: "about",
    label: "About",
    hrefs: ["/", "/about"],
  },
  {
    id: "publications",
    label: "Publications",
    hrefs: ["/publications"],
  },
  {
    id: "cv",
    label: "CV",
    hrefs: ["/cv"],
  },
  // {
  //   id: "test",
  //   label: "Test & Debug",
  //   href: "/private/testanddebug",
  // },
  // {
  //   id: "home",
  //   label: "Home",
  //   href: "/private/home",
  // },
];

export const NavigationBar: React.FunctionComponent<INavbarProps> = (props) => {
  const pathname = usePathname();
  const currentPathIsActivePath = (paths: Array<Url>) =>
    paths.some((p) => pathname === p);

  return (
    <div className="navbar">
      <div className="navbar-start">
        {/* MOBILE VERSION */}
        <details className="dropdown">
          <summary
            role="button"
            onClick={registerCloseCurrentDetailsSummaryDropdown}
            className="btn btn-ghost lg:hidden [list-style:none] appearance-none [&::-webkit-details-marker]:hidden content-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </summary>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems.map((pageItem) => (
              <li key={pageItem.id}>
                {currentPathIsActivePath(pageItem.hrefs) ? 
                  <Link 
                    role="button"
                    tabIndex={0}
                    className="btn btn-ghost underline"
                    href={pageItem.hrefs[0]} 
                    onClick={closeDetailsSummaryDropdown} 
                    children={<h2>{pageItem.label}</h2>} 
                  />
                  
                :
                  <Link 
                    role="button"
                    tabIndex={0}
                    className="btn btn-ghost font-normal"
                    href={pageItem.hrefs[0]} 
                    onClick={closeDetailsSummaryDropdown} 
                    children={<div>{pageItem.label}</div>} 
                  />
                }
              </li>
            ))}
          </ul>
        </details>
        {/*   */}
        <ThemeSwitchDropdown />
        <ThemeSwap innersize={5} />
      </div>
      {/* DESKTOP VERSION */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal">
          {navItems.map((pageItem) => (
            <li key={pageItem.id}>
              {currentPathIsActivePath(pageItem.hrefs) ? 
                <Link className="px-2 btn btn-ghost underline" href={pageItem.hrefs[0]} children={<h2>{pageItem.label}</h2>} />
              :
                <Link className="px-2 btn btn-ghost font-normal" href={pageItem.hrefs[0]} children={<div>{pageItem.label}</div>} />
              }
            </li>
          ))}
        </ul>
      </div>
      {/*   */}
      <div className="navbar-end">
        <Link href="/" role="button" tabIndex={0} className="btn btn-ghost text-xl font-normal">
          <h1>{theProtagonistsName}</h1>
        </Link>
      </div>
    </div>
  );
};
