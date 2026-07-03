import CardElement from "@/components/card-element";
import { MarkdownConfigured } from "@/components/markdown-configured";
import { MarkdownLoader } from "@/components/markdown-loader";
import ResponsiveCardsContainer from "@/components/responsive-cards-container";
// import { ThemeSwap } from "@/components/theme-swap";
import { ThemeSwap } from "@/components/next-theme-swap";
// import { ThemeSwitchDropdown } from "@/components/theme-switch-dropdown";
import { ThemeSwitchDropdown } from "@/components/next-theme-switch-dropdown";
import "academicons/css/academicons.min.css";
import Link from "next/link";

export default function TestAndDebug() {
  return (
    <ResponsiveCardsContainer>
      <CardElement title={<span>Foo</span>}>
        <div>
          <span>Hello World</span>
          <ThemeSwitchDropdown />
          <ThemeSwap innersize={5} />
        </div>
      </CardElement>
      <CardElement title={<span>Bar</span>}>
        <MarkdownConfigured>
          {`### hello World

1. t1
2.  t2
3. t3

<h1>Hello Html</h1>
<ul>Test</ul>

`}
        </MarkdownConfigured>
      </CardElement>
      <CardElement title={<span>BarBar</span>}>
        <MarkdownLoader filename="/somemarkdown.md" />
      </CardElement>
      <CardElement title={<span>FooBarBar</span>}>
        <button>Show some alert</button>
      </CardElement>
      <CardElement>
        <Link
          key="about"
          href="./about"
          className="flex h-12 grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
        >
          <p className="block">About</p>
          <i className="ai ai-google-scholar-square"></i>
        </Link>
      </CardElement>
    </ResponsiveCardsContainer>
  );
}
