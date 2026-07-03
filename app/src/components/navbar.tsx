"use client";

import { theProtagonistsName } from "@/lib/constants";
import { forceCloseAllSummaryStyleDropdowns } from "@/lib/utils";
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
    href: "/about",
  },
  {
    id: "publications",
    label: "Publications",
    href: "/publications",
  },
  {
    id: "cv",
    label: "CV",
    href: "/cv",
  },
  // {
  //   id: "test",
  //   label: "Test & Debug",
  //   href: "/testanddebug",
  // },
];

export const NavigationBar: React.FunctionComponent<INavbarProps> = (props) => {
  const pathname = usePathname();
  const currentPathIsActivePath = (path: Url) => pathname === path;

  return (
    <div className="navbar">
      <div className="navbar-start">
        <details className="dropdown">
          <summary
            role="button"
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
                <Link
                  role="button"
                  tabIndex={0}
                  href={pageItem.href}
                  onNavigate={forceCloseAllSummaryStyleDropdowns}
                  // onClick={(e) => {e.preventDefault(); setActiveTab(tab); forceCloseAllSummaryStyleDropdowns();}}
                  className={
                    `btn btn-ghost ${currentPathIsActivePath(pageItem.href) ? "underline" : "font-normal"}` /* flex justify-start items-center */
                  }
                >
                  {pageItem.label}
                </Link>
              </li>
            ))}
            <li>
              {/* flex justify-start items-center */}
              <div className="sm:hidden justify-center">
                <ThemeSwap innersize={5} />
              </div>
            </li>
          </ul>
        </details>

        <div className="hidden sm:flex">
          <ThemeSwap innersize={5} />
        </div>
        <ThemeSwitchDropdown />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal">
          {navItems.map((pageItem) => (
            <li key={pageItem.id}>
              <Link
                href={pageItem.href}
                // onClick={(e) => {e.preventDefault(); setActiveTab(tab);}}
                className={`px-2 btn btn-ghost ${currentPathIsActivePath(pageItem.href) ? "underline" : "font-normal"}`}
              >
                {pageItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        <span
          role="button"
          tabIndex={0}
          className="btn btn-ghost text-xl"
          // onClick={
          // //   () => showAlert({
          // //      type: "info",
          // //      message: "This is an info message!",
          // //      autoDismissSeconds: 3
          // // })
          //   () => setActiveTab(null)
          // }
        >
          <Link href="/">{theProtagonistsName}</Link>
        </span>
        {/* <div className="px-2 font-semibold text-xl">{theProtagonistsName}</div> */}
      </div>
    </div>
  );
};
