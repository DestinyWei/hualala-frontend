import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import '@rainbow-me/rainbowkit/styles.css';
import { BrowserRouter } from 'react-router-dom'
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  sepolia
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [sepolia],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'd013779029521adc43fc8719a5221ce8',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RainbowKitProvider>
    </WagmiConfig>

  </React.StrictMode>
);


