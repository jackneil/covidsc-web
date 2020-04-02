import { LitElement, html, css } from 'lit-element';

// TODO: move these dependencies out of here
// UNUSED // import { google } from '@google/maps';

import './covid-sc-map.js';
import '@material/mwc-button';
import '@material/mwc-icon-button';
import { IronFlex, IronFlexAlignment } from './flex-styles.js';
import './covid-sc-data-card.js';

export class CovidScPageResources extends LitElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    // redundant placeholder
  }

  static get properties() {
    return {};
  }

  static get styles() {
    return [
      IronFlex,
      IronFlexAlignment,
      css`
        :host {
          background-color: var(--Background-Color-White);
        }

        .module-container {
          font-family: Roboto;
          font-size: 16px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: var(--Primary-Text-Color);
          margin: 4px 8px 4px 8px;
        }

        .module-title {
          margin: 10px 8px 4px 8px;
          text-align: left;
          height: 24px;
          font-family: Roboto;
          font-size: 16px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: var(--Primary-Text-Color);
        }

        .module-content {
          margin: 4px 8px 4px 8px;
        }

        .module-footer {
          height: 24px;
          font-family: Roboto;
          font-size: 12px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: right;
          color: var(--Primary-Text-Color);
          margin: 0px 8px 4px 8px;
        }

        .action-button {
          /* width: 200px; */
        }

        .action-button {
          margin: 8px;
          width: 100%;
          min-width: 288px;
          /* flex-grow: 1; */
          /* height: 48px; */ /* CANT CHANGE HEIGHT YET https://github.com/material-components/material-components-web-components/issues/81 */
        }

        .min-margin > covid-sc-data-card:nth-of-type(1) {
          margin-right: 8px;
        }
        .min-margin > covid-sc-data-card:nth-of-type(2) {
          margin-left: 8px;
        }

        .min-margin {
          min-width: 288px;
        }

        covid-sc-data-card {
          min-width: 136px;
          max-width: 188px;
          height: 94px;
          flex-grow: 1;
        }

        covid-sc-data-card[ghost] {
          max-width: 188px;
          height: 0px;
          flex-grow: 1;
        }

        .buttonlink {
          text-decoration: none;
          color: inherit;
        }

        mwc-button {
          --mdc-theme-primary: var(--Primary-Action-Color);
          --mdc-theme-on-primary: var(--Background-Color-White);
        }

        .footer {
          width: 100%;
          height: 41px;
          background-color: var(--Primary-Text-Color);
          font-family: Roboto;
          font-size: 12px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: center;
          color: var(--Background-Color-Dark);
        }
        .footer > div > a {
          color: var(--Background-Color-White);
        }

        .nav-header {
          width: 100%;
          height: 48px;
          background-color: #616161;
          font-family: Roboto;
          font-size: 16px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: var(--Background-Color-White);
        }

        a.colored {
          width: 288px;
          height: 24px;
          font-family: Roboto;
          font-size: 16px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: var(--Primary-Action-Color);
          text-decoration: none;
        }

        h1 {
          height: 24px;
          font-family: Roboto;
          font-size: 16px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: var(--Primary-Text-Color);
        }

        h2 {
          font-family: Roboto;
          font-size: 16px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: var(--Primary-Action-Color);
        }

        p.hint {
          width: 604px;
          font-family: Roboto;
          font-size: 12px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: var(--Secondary-Text-Color);
          margin-top: 2px;
          width: 100%;
        }

        @media only screen and (min-width: 628px) {
          .action-button {
            /* width: 200px; */
          }

          .action-button {
            margin: 8px;
            min-width: 288px;
            flex-grow: 1;
            /* height: 48px; */ /* CANT CHANGE HEIGHT YET https://github.com/material-components/material-components-web-components/issues/81 */
          }

          covid-sc-data-card {
            min-width: 136px;
            max-width: 188px;
            height: 94px;
            flex-grow: 1;
          }

          covid-sc-data-card[ghost] {
            max-width: 188px;
            height: 0px;
            flex-grow: 1;
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <div style="min-height:calc( 100% );" class="layout vertical">
        <div class="nav-header layout horizontal start">
          <div>
            <a href="/" class="buttonlink"><mwc-icon-button icon="arrow_back"></mwc-icon-button></a>
            <!-- Kelsey's alternative icon -->
            <!-- <mwc-icon-button>
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
                  <defs>
                      <path id="prefix__a" d="M15.433 7H4.142l2.979 3.137c.417.427.417 1.116 0 1.543-.417.426-1.091.426-1.508 0L1 6.775C.583 6.348.583 5.659 1 5.232L5.613.32c.417-.427 1.09-.427 1.508 0 .417.426.417 1.116 0 1.542L4.14 5h11.292c.572 0 1.068.5 1.067 1-.001.501-.479 1-1.067 1z"/>
                  </defs>
                  <g fill="none" fill-rule="evenodd" transform="translate(4 6)">
                      <mask id="prefix__b" fill="#fff">
                          <use xlink:href="#prefix__a"/>
                      </mask>
                      <g fill="#FFF" mask="url(#prefix__b)">
                          <path d="M0 0H24V24H0z" transform="translate(-4 -6)"/>
                      </g>
                  </g>
              </svg>
            </mwc-icon-button> -->
          </div>
          <div class="layout horizontal self-center">
            Find Resources
          </div>
        </div>
        <div class="layout vertical self-stretch">
          <div class="layout vertical module-container">
            <div class="module-title">
              Learn more about COVID-19
            </div>
            <div class="module-content">
              <a
                class="colored"
                target="_blank"
                href="https://www.scdhec.gov/infectious-diseases/viruses/coronavirus-disease-2019-covid-19?referrer=covidsc"
                ><b>SC DHEC</b></a
              >
              <p class="hint">
                Learn more about COVID-19 and how to prevent the spread of infectious diseases.
              </p>
            </div>
            <div class="module-content">
              <a
                class="colored"
                target="_blank"
                href="https://emcrit.org/ibcc/covid19/?referrer=covidsc"
                ><b>IBCC</b></a
              >
              <p class="hint">
                In-depth information about the COVID-19 virus from the Internet Book of Critical
                Care (IBCC)
              </p>
            </div>
          </div>

          <div class="layout vertical module-container">
            <div class="module-title">
              Employees
            </div>
            <div class="module-content">
              <a
                class="colored"
                target="_blank"
                href="https://dew.sc.gov/covid-hub?referrer=covidsc"
                ><b>COVID-19 Resource Hub</b></a
              >
              <p class="hint">
                Learn about your rights as an employee and how you can get financial aid during this
                time.
              </p>
            </div>
          </div>
          <div class="layout vertical module-container">
            <div class="module-title">
              Small Businesses
            </div>
            <div class="module-content">
              <a
                class="colored"
                target="_blank"
                href="https://scsbdc.ecenterdirect.com/signup?referrer=covidsc"
                ><b>SC SBDC</b></a
              >
              <p class="hint"></p>
            </div>
          </div>
        </div>
        <div class="layout flex"></div>
        <div class="footer layout vertical center-justified">
          <div>
            Powered by
            <a target="_blank" href="https://www.hank.ai/?referrer=covidsc" class="buttonlink"
              >Hank.ai</a
            >
            and
            <a target="_blank" href="https://www.krum.io/?referrer=covidsc" class="buttonlink"
              >Krumware</a
            >
          </div>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    // this.getData();
    this.counts = {};
  }
}

customElements.define('covid-sc-page-resources', CovidScPageResources);
