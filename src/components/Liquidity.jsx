import React from 'react'
import { Carousel, Avatar, Tooltip, Button } from 'antd';
import { MoneyCollectOutlined, ArrowUpOutlined } from '@ant-design/icons'
const Liquidity = () => {
    const contentStyle = {
        textAlign: 'center',
    };
    return (
        <div className="grid-halves h-screen-navbar">
            <div className="bg-teal border-right">
                <div className="colun-padding">
                    <div className="tablet-centered">
                        <p style={{
                            fontSize: '2.25rem', fontWeight: '700', textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                        }}>
                            <span style={{
                                fontSize: '2.25rem', fontWeight: '700', textTransform: 'uppercase',
                                letterSpacing: '0.1em', color: 'red'
                            }}> $123,456,789 </span>
                            of borrowing backed by
                        </p>
                        <p style={{
                            fontSize: '2.25rem',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            width: '780px',
                        }}>
                            <span style={{
                                fontSize: '2.25rem', fontWeight: '700', textTransform: 'uppercase',
                                letterSpacing: '0.1em', color: 'red'
                            }}> $123,456 </span>
                            of collateral across 8 markets

                        </p>
                        <p style={{
                            fontSize: '2rem',
                            letterSpacing: '0.1rem',
                            fontWeight: '700',
                            color: '#8bcff8'
                        }}
                        >Exlent Pair</p>
                        <Carousel autoplay dots={false}>
                            <div>
                                <Avatar.Group size='large'>
                                    <Tooltip title="ETH" placement="top">
                                        <Avatar style={{ backgroundColor: '#87d068' }} size='large' src="https://logowik.com/content/uploads/images/ethereum3649.jpg" />
                                    </Tooltip>
                                    <Tooltip title="BNB" placement="top">
                                        <Avatar style={{ backgroundColor: '#87d068' }} size='large' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGB5DpNqCnrJ6cHzz9koE84g7DxCry0SV8yEc85iIe&s" />
                                    </Tooltip>
                                </Avatar.Group>
                            </div>
                            <div>
                                <Avatar.Group>
                                    <Tooltip title="ETH" placement="top">
                                        <Avatar style={{ backgroundColor: '#87d068' }} size='large' src="https://logowik.com/content/uploads/images/ethereum3649.jpg" />
                                    </Tooltip>
                                    <Tooltip title="BNB" placement="top">
                                        <Avatar style={{ backgroundColor: '#87d068' }} size='large' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGB5DpNqCnrJ6cHzz9koE84g7DxCry0SV8yEc85iIe&s" />
                                    </Tooltip>
                                </Avatar.Group>
                            </div>
                            <div>
                                <Avatar.Group>
                                    <Tooltip title="ETH" placement="top">
                                        <Avatar style={{ backgroundColor: '#87d068' }} size='large' src="https://logowik.com/content/uploads/images/ethereum3649.jpg" />
                                    </Tooltip>
                                    <Tooltip title="BNB" placement="top">
                                        <Avatar style={{ backgroundColor: '#87d068' }} size='large' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGB5DpNqCnrJ6cHzz9koE84g7DxCry0SV8yEc85iIe&s" />
                                    </Tooltip>
                                </Avatar.Group>
                            </div>
                            <div>
                                <Avatar.Group>
                                    <Tooltip title="ETH" placement="top">
                                        <Avatar style={{ backgroundColor: '#87d068' }} size='large' src="https://logowik.com/content/uploads/images/ethereum3649.jpg" />
                                    </Tooltip>
                                    <Tooltip title="BNB" placement="top">
                                        <Avatar style={{ backgroundColor: '#87d068' }} size='large' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGB5DpNqCnrJ6cHzz9koE84g7DxCry0SV8yEc85iIe&s" />
                                    </Tooltip>
                                </Avatar.Group>
                            </div>
                        </Carousel>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', marginLeft: '150px' }}>


                        <button style={{backgroundColor:'#65db79', borderRadius:'30px' ,borderWidth:'1px' , marginTop:'80px' ,width:'300px' ,height:'180px' , }} >
                            <p style={{fontSize:'30px'}}>Long</p>
                        </button>



                        <button style={{backgroundColor:'#eb3223'  ,borderRadius:'30px' ,borderWidth:'1px' , marginTop:'80px' ,width:'300px' ,height:'180px' , }} >
                        <p style={{fontSize:'30px'}}>Short</p>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Liquidity