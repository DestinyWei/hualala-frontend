
import React from 'react'
const crypto = {
    '0xB8c77482e45F1F44dE1745F52C74426C631bDD52': 'BNB',
    '0xdAC17F958D2ee523a2206206994597C13D831ec7': 'USDT',
    '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48': 'USDC',
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2': 'WETH',
    '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599': 'WBTC',
}
const ShowInput = props => {
    const channgInput=(e)=>{
        if(crypto[e.target.value]){
            console.log(crypto[e.target.value]);
            props.setPayCrypto(crypto[e.target.value])
        }
        
    }
    return (
        <div className="modaly" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-body" style={{height:'65px'}}>
                    <div>Address</div>
                    <input onChange={channgInput}></input>
                </div>
            </div>
        </div>
    )
}

export default ShowInput