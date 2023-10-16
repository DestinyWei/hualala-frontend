import './App.css';
import { useState, useEffect } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import ABI from './abi.json'
import logo from './style/favicon.ico'
import { Route, useNavigate ,Routes} from 'react-router-dom';
import { Radio, } from 'antd';
import Loan from './components/Loan'
import Swap from './components/Swap'
import Pool from './components/Pool'
import Liquidity from './components/Liquidity';
import Staking from './components/Staking';
import { useContractRead, useWalletClient, useAccount } from 'wagmi';
function App() {
  const isConnected = useAccount()
  const navigate = useNavigate();
  const [placement, SetPlacement] = useState('topLeft');
  const placementChange = (e) => {
    SetPlacement(e.target.value);
    switch (e.target.value) {
      case 'liquidity':
        navigate('/liquidity');
        break;
      case 'loan':
        navigate('/loan');
        break;
      case 'pool':
        navigate('/pool');
        break;
      case 'swap':
        navigate('/swap');
        break;
      case 'staking':
        navigate('/staking');
        break;
    }
  };



  return (
    <div className="App">
      <div className="appNav">
        <div style={{ marginTop: '18px', display: 'flex' }}>
          <img src={logo} alt='logo' style={{ width: '40px', marginLeft: '15px' }} />
          <div className='tittle' style={{ marginRight: '30px' }}>HuaLaLa</div>
          <Radio.Group value={placement} onChange={placementChange} className={isConnected ? 'connectedSelectors' : 'unconnectedSlectors'} size='large'>
            <Radio.Button value="liquidity" className='selecter' >Liquidity</Radio.Button>
            <Radio.Button value="pool" className='selecter'>Pool</Radio.Button>
            <Radio.Button value="swap" className='selecter'>Swap</Radio.Button>
            <Radio.Button value="loan" className='selecter'>Loan</Radio.Button>
            <Radio.Button value="staking" className='selecter'>Staking</Radio.Button>
          </Radio.Group>

          <ConnectButton chainStatus='icon' 
        showBalance={false} // 隐藏余额
        accountStatus='address'/>
        </div>
      </div>
      <Routes>
        <Route path='/swap' Component={Swap}></Route>
        <Route path='/pool' Component={Pool}></Route>
        <Route path='/Loan' Component={Loan}></Route>
        <Route path='/liquidity' Component={Liquidity}></Route>
        <Route path='/staking' Component={Staking}></Route>
      </Routes>

    </div>

  );
}

export default App