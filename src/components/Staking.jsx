import { Avatar ,Button} from 'antd'
import {MoneyCollectOutlined , ArrowUpOutlined} from '@ant-design/icons'
import React from 'react'

const Staking = () => {
    return (
        
        <div>
            <p style={{
            marginLeft:'350px',
            fontSize: '2.25rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            width:'780px',
        }}>lenting computing power obtaining  
        <span style={{
            color:'#eb3223',
            fontSize: '2.25rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            width:'780px',
        }}> 100% </span>
        <span style={{
            fontSize: '2.25rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            width:'780px',
        }}> APY </span>
        </p>
        
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', marginLeft: '150px' }}>
            
            <div className="appBody">
                <div className="swapContainer">

                    <p style={{fontSize:'28px', letterSpacing:'3px', fontWeight:'600'}}>Staking</p>
                    <Avatar src="https://logowik.com/content/uploads/images/ethereum3649.jpg" size='large' style={{marginTop:'25px'}}></Avatar>
                    <p style={{fontSize:'25px', marginTop:'5px' }}>My Staking<p style={{fontSize:'20px', color:'#65da79'}}>1000$</p></p>
                    <Button type="primary" shape="round" icon={<MoneyCollectOutlined />} size='large' style={{marginTop:'30px'}}>
            Staking
          </Button>
                </div>
            </div>
            <div className="appBody">
                <div className="swapContainer">

                <p style={{fontSize:'28px', letterSpacing:'3px', fontWeight:'600'}}>Withdraw</p>
                    <Avatar src="https://logowik.com/content/uploads/images/ethereum3649.jpg" size='large' style={{marginTop:'25px'}}></Avatar>
                    <p style={{fontSize:'25px', marginTop:'5px' }}>My Reward<p style={{fontSize:'20px', color:'#eb3223'}}>1000$</p></p>
                    <Button type="primary" shape="round" icon={<ArrowUpOutlined />} size='large' style={{marginTop:'30px'}}>
            Withdraw
          </Button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Staking

