import React from "react";
import { useRouter } from "next/router";

//components
import FooterNav from "../FooterNav";
import SidebarNav from "../SidebarNav";
import TopNav from "../TopNav";
import { LayoutContainer } from "./styles";

export default function PageLayout({ children, routeName }) {
  const path = useRouter().pathname;

  return (
    <LayoutContainer className='max-layout'>
      <div className='d-flex'>
        <SidebarNav />
        <div>
          <TopNav routeName={routeName} />
          <FooterNav />
          {children}
        </div>
      </div>
    </LayoutContainer>
  );
}
