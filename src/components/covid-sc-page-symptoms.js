import { LitElement, html, css } from 'lit-element';

// TODO: move these dependencies out of here
// UNUSED // import { google } from '@google/maps';

import './covid-sc-map.js';
import '@material/mwc-button';
import { IronFlex, IronFlexAlignment } from './flex-styles.js';
import './covid-sc-data-card.js';

export class CovidScPageSymptoms extends LitElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    // redundant placeholder
  }

  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
    };
  }

  static get styles() {
    return [
      IronFlex,
      IronFlexAlignment,
      css`
        :host {
        }

        .app-footer {
          font-size: calc(12px + 0.5vmin);
          align-items: center;
        }

        .app-footer a {
          margin-left: 5px;
        }

        .action-button {
          width: 200px;
        }

        .action-button {
          margin: 8px;
          min-width: 288px;
          flex-grow: 1;
          /* height: 48px; */ /* CANT CHANGE HEIGHT YET https://github.com/material-components/material-components-web-components/issues/81 */
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
        }

        .module-title {
          margin: 10px 8px 4px 8px;
          text-align: left;
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
        }

        iframe#orbita-chat-iframe {
          position: fixed;
          bottom: 0;
          width: auto;
          border: none;
          right: 0;
        }
      `,
    ];
  }

  render() {
    return html`
      test
      <div class="layout vertical module-container">
        <div id="chatWindow"></div>
      </div>
    `;
  }

  firstUpdated() {
    this.initChat();
  }

  initChat() {
    const chatWindow = this.shadowRoot.getElementById('chatWindow');
    // console.log("init chat");
    const endpointTag = 'COVIDSC.COM';
    const chatLocation = 'https://engage.orbita.cloud/oeapi';
    const option = {
      // dockDefaultAction: 'open', // uncomment this line to open the bot by default
      domId: 'chatWindow',
      domObject: chatWindow,
      launchWord: 'open',
      name: 'Orbita',
      width: '520',
      height: '780',
      serverUrl: `${chatLocation}/bot/hub/${endpointTag}`,
      appSettingURL: `${chatLocation}/bot/hub/settings${endpointTag}`,
      theme: 'dock-float',
      oauthserverUrl: chatLocation,
      settings: {
        header: {
          logoUrl: '/chatbot/v2/assets/branding-mark.svg',
          headerText: 'COVID-19',
          subHeaderText: 'Chatbot powered by Orbita',
          speakerOnIconUrl: '/chatbot/v2/assets/volume-on.svg',
          speakerMuteIconUrl: '/chatbot/v2/assets/volume-muted.svg',
          closeIconUrl: '/chatbot/v2/assets/x-header.svg',
        },
        banner: {
          title: "''Click here'' - to read the Disclaimer",
          message:
            "<p>&nbsp;</p><p>&nbsp;</p><p><strong>Please Note:</strong> I use sources like the U.S. Center for Disease Control (CDC) and others to ensure I have the latest information for you, but I can’t guarantee the accuracy of this information.</p><p>&nbsp;</p><p>Also, I’m not a substitute for the judgment of a healthcare professional and not intended for use in the diagnosis or treatment of coronavirus (COVID-19) or any other diseases or conditions.</p><p>&nbsp;</p><p>If you suspect a life-threatening emergency, please call 911 or your local emergency response immediately.</p><p>&nbsp;</p><p><a target='_blank' href='https://orbita.ai/orbita-privacy-policy/'>Privacy Policy</a><p>&nbsp;</p>",
        },
        profile: {
          defaultAvatorUrl: '',
        },
        footer: {
          menuIconUrl: '/chatbot/v2/assets/plus-button.svg',
          menuIconDiabledUrl: '/chatbot/v2/assets/plus-btn-disabled.svg',
          micIconUrl: '/chatbot/v2/assets/mic.svg',
          micOnIconUrl: '/chatbot/v2/assets/mic-on.svg',
          sendButtonIconUrl: '/chatbot/v2/assets/button-circular-01.svg',
          sendButtonDisabledIconUrl: '/chatbot/v2/assets/send-circular-01-disabled.svg',
        },
        botAvatarUrl: '/chatbot/v2/assets/orbita-icon.svg',
        animationAvatarImageUrl: '/chatbot/v2/assets/avatar_loading.gif',
        animationImageUrl: '/chatbot/v2/assets/msg_loading.gif',
        theme: {
          dockFloat: {
            buttonSrc: 'https://assets-engage.orbita.cloud/img/chatbutton.png',
            buttonTitle: 'Hi There!',
          },
        },
      },
    };
    if (window.OrbitaChatBotPlugin) {
      window.OrbitaChatBotPlugin.initPlugin(option);
    } else {
      // console.log("not found");
    }
  }
}

customElements.define('covid-sc-page-symptoms', CovidScPageSymptoms);
