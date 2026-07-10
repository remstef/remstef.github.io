"use client";

import CardElement from "@/components/card-element";
import {
  MarkdownConfiguredExplicit,
  MarkdownConfiguredProseArticle,
} from "@/components/markdown-configured";
import { MarkdownLoader } from "@/components/markdown-loader";
import ResponsiveCardsContainer from "@/components/responsive-cards-container";
// import { ThemeSwap } from "@/components/theme-swap";
import { ThemeSwap } from "@/components/next-theme-swap";
// import { ThemeSwitchDropdown } from "@/components/theme-switch-dropdown";
import { ThemeSwitchDropdown } from "@/components/next-theme-switch-dropdown";
import { useAlerts } from "@/context/alerts-state";
import { useUserAgent } from "@/context/user-agent-detector";
import Link from "next/link";
import { useEffect } from "react";

export default function TestAndDebugContent() {

  // [userAgent, detectedAsFirefoxMobile] = useUserAgent();
  const { userAgent } = useUserAgent();
  const { listOfActiveAlerts, showAlert, removeAlert } = useAlerts();

  // showAlert(
  //       "warning",
  //       `Your on: ${userAgent?.userAgentString}`,
  //       30,
  //     );

  useEffect(()=>{
    if(userAgent){
      showAlert(
        "info",
        `Your on: ${userAgent?.userAgentString}`,
        30,
      );

      showAlert(
        "info",
        `${userAgent?.detectedAsFirefoxMobile ? "Firefox mobile detected" : "Firefox mobile not detected"}`,
        30,
      );
    } 
  }, [ userAgent ] );

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
        <MarkdownConfiguredExplicit>
          {`### hello World

1. t1
2.  t2
3. t3

<h1>Hello Html</h1>
<ul>Test</ul>

`}
        </MarkdownConfiguredExplicit>
      </CardElement>
      <CardElement title={<span>Bar Foo</span>}>
        <MarkdownConfiguredProseArticle>
          {`### hello World

1. t1
2.  t2
3. t3

<h1>Hello Html</h1>
<ul>Test</ul>

`}
        </MarkdownConfiguredProseArticle>
      </CardElement>
      <CardElement title={<span>BarBar</span>}>
        <MarkdownLoader
          filename={`${process.env.NEXT_PUBLIC_BASE_PATH}/somemarkdown.md`}
        />
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