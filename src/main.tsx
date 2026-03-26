import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ConnectivityProvider } from "./context/ConnectivityContext";
import { StorageProvider } from "./context/StorageContext";
import { TransactionQueueProvider } from "./context/TransactionQueueContext";
import { ThemeProvider } from "./context/ThemeContext";
import { TutorialProvider } from "./context/TutorialContext";
import { PWAProvider } from "./context/PWAContext";
import { LocalizationProvider } from "./context/LocalizationContext";
import { SecurityProvider } from "./context/SecurityContext";
import { PreferenceProvider } from "./context/PreferenceContext";
import "./styles/index.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { installFetchLogger } from './services/logger/middleware';

installFetchLogger();
import { ConnectivityProvider } from './context/ConnectivityContext';
import { StorageProvider } from './context/StorageContext';
import { TransactionQueueProvider } from './context/TransactionQueueContext';
import { ThemeProvider } from './context/ThemeContext';
import { I18nProvider } from './context/I18nContext';
import { TutorialProvider } from './context/TutorialContext';
import { PWAProvider } from './context/PWAContext';
import { SecurityProvider } from './context/SecurityContext';
import { AdminProvider } from './context/AdminContext';
import { GatewayProvider } from './context/GatewayContext';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LocalizationProvider>
      <ThemeProvider>
        <PreferenceProvider>
          <TutorialProvider>
            <PWAProvider>
              <SecurityProvider>
                <ConnectivityProvider>
                  <StorageProvider>
                    <TransactionQueueProvider>
                      <App />
                    </TransactionQueueProvider>
                  </StorageProvider>
                </ConnectivityProvider>
              </SecurityProvider>
            </PWAProvider>
          </TutorialProvider>
        </PreferenceProvider>
      </ThemeProvider>
    </LocalizationProvider>
    <ThemeProvider>
      <I18nProvider>
        <TutorialProvider>
        <PWAProvider>
          <SecurityProvider>
            <ConnectivityProvider>
              <StorageProvider>
                <AdminProvider>
                  <GatewayProvider>
                    <TransactionQueueProvider>
                      <App />
                    </TransactionQueueProvider>
                  </GatewayProvider>
                </AdminProvider>
              </StorageProvider>
            </ConnectivityProvider>
          </SecurityProvider>
        </PWAProvider>
        </TutorialProvider>
      </I18nProvider>
    </ThemeProvider>
  </React.StrictMode>
);

