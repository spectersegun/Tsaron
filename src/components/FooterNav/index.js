import React from "react";
import { FooterContainer } from "./styles";

export default function FooterNav() {
  return (
    <FooterContainer>
      <footer className='footer'>
        <div className='d-sm-flex justify-content-center justify-content-sm-between'>
          <span className='text-muted text-center text-sm-left d-block d-sm-inline-block'>
            Copyright © 2023 All rights reserved.
          </span>
        </div>
        <div className='d-sm-flex justify-content-center justify-content-sm-between'>
          <span className='text-muted text-center text-sm-left d-block d-sm-inline-block'>
            Powered by{" "}
            <a href='#' target='_blank'>
              Tsaron Technologies Limited
            </a>
          </span>
        </div>
      </footer>
    </FooterContainer>
  );
}
