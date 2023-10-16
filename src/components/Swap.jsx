import React from 'react'
import { useState } from 'react';
import { GearFill } from 'react-bootstrap-icons';
import ConfigModal from './ConfigModal';
import ShowPayInput from './ShowPayInput';
import ShowGetInput from './ShowGetInput';
import { Button} from 'antd'
const Swap = props => {
  const [showModal, setShowModal] = useState(undefined)
  const [getCrypto, setGetCrypto] = useState('BNB')
  const [payCrypto, setPayCrypto] = useState('USDT')
  const [showGetInput, setShowGetInput] = useState(false)
  const [payAmount , setPayAmount] = useState(null)
  const [getAmount , setGetAmount] = useState(null)
  const [showPayInput, setShowPayInput] = useState(false)
  const [slippageAmount, setSlippageAmount] = useState(2)
  return (
    <div className="appBody">
      <div className="swapContainer">
        <div className="swapHeader">
          <span className="swapText">Swap</span>
          <span className="gearContainer" onClick={() => setShowModal(true)}>
            <GearFill />
          </span>
          {showModal && (
            <ConfigModal
              onClose={() => setShowModal(false)}
              setSlippageAmount={setSlippageAmount}
              slippageAmount={slippageAmount} />
          )}
        </div>



        <div className="swapBody">
          <div style={{marginTop:'30px'}}>
          <div className="row currencyInput">
            <span style={{ padding: '0', fontSize: '30px', color: 'grey' ,letterSpacing:'2px',fontStyle: 'italic'}}>pay</span>
            <div className="col-md-6 numberContainer">
              <input style={{ borderRadius: '10px' ,borderWidth:'1px'}} value={payAmount}/>
              <Button  shape='round' style={{ marginLeft: '110px',  }} size='large' type='primary' onClick={() => { setShowPayInput(true) }}>
                {payCrypto}
              </Button>
            </div>
          </div>
          </div>
          <div style={{marginTop:'50px'}}>
          <div className="row currencyInput ">
          <span style={{ padding: '0', fontSize: '30px', color: 'grey' ,letterSpacing:'2px' ,fontStyle: 'italic'}}>get</span>
            <div className="col-md-6 numberContainer">
              <input style={{ borderRadius: '10px' ,borderWidth:'1px'}} value={getAmount}/>
              <Button  style={{ marginLeft: '110px', }} size='large' shape='round' type='primary' onClick={() => { setShowGetInput(true) }}>
                {getCrypto}
              </Button>
            </div>
          </div>
          </div>
        </div>

      </div>

      {showPayInput && (
        <ShowPayInput
          onClose={() => { setShowPayInput(false) }}
          setPayCrypto={setPayCrypto}
        />
      )}

      {showGetInput && (
        <ShowGetInput
          onClose={() => { setShowGetInput(false) }}
          setGetCrypto={setGetCrypto}
        />
      )}

    </div>
  )
}

export default Swap