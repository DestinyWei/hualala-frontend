import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Avatar, Divider, List, Skeleton, Tooltip, Button , Modal} from 'antd';
import { useContractRead, useWalletClient, useAccount } from 'wagmi'
const App = () => {
    const [loading, setLoading] = useState(false);
    const [Data, setData] = useState([]);
    let inputAmount;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const items = [
        {
            tokenOneName:'BNB',
            tokenTwoName:'WETH',
            tokenOneAdd:'0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
            tokenTowAdd:'0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            tokenOneUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGB5DpNqCnrJ6cHzz9koE84g7DxCry0SV8yEc85iIe&s",
            tokenTwoUrl:"https://logowik.com/content/uploads/images/ethereum3649.jpg"
        },
        {
            tokenOneName:'BNB',
            tokenTwoName:'WBTC',
            tokenOneAdd:'0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
            tokenTowAdd:'0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
            tokenOneUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGB5DpNqCnrJ6cHzz9koE84g7DxCry0SV8yEc85iIe&s",
            tokenTwoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMapVIGMafH11VBnFpGehtTuU2GHYN5OOzLEOB24&s"
        },
        {
            tokenOneName:'WETH',
            tokenTwoName:'BTC',
            tokenOneAdd:'0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
            tokenTowAdd:'0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
            tokenOneUrl:"https://logowik.com/content/uploads/images/ethereum3649.jpg",
            tokenTwoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMapVIGMafH11VBnFpGehtTuU2GHYN5OOzLEOB24&s"
        }
    ]
    const showModal = () => {
        setIsModalOpen(true);
    };
    const calculateOutputAmount = (e)=>{
        inputAmount = e.target.value
        
    }
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const loadMoreData = () => {
        if (loading) {
            return;
        }
        setLoading(true);
        fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
            .then((res) => res.json())
            .then((body) => {
                setData([...Data, ...body.results]);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    };
    useEffect(() => {
        loadMoreData();
    }, []);
    return (
        <div
            id="scrollableDiv"
            style={{
                height: 400,
                overflow: 'auto',
                padding: '0 16px',
                marginTop: '30px',
                width: '1000px',
                marginLeft: '220px'
            }}
        >
            <InfiniteScroll
                dataLength={Data.length}
                next={loadMoreData}
                hasMore={Data.length < 50}
                loader={
                    <Skeleton
                        avatar
                        paragraph={{
                            rows: 1,
                        }}
                        active
                    />
                }
                endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                scrollableTarget="scrollableDiv"
            >
                <List

                    size='small'
                    split='false'
                    dataSource={items}
                    renderItem={(item) => (
                        <List.Item key={item.id}>
                            <List.Item.Meta
                                avatar={
                                    <Avatar.Group>
                                        <Tooltip title="ETH" placement="top">
                                            <Avatar style={{ backgroundColor: '#87d068' }} src={item.tokenOneUrl} />
                                        </Tooltip>
                                        <Tooltip title="BNB" placement="top">
                                            <Avatar style={{ backgroundColor: '#87d068' }} src={item.tokenTwoUrl} />
                                        </Tooltip>
                                    </Avatar.Group>
                                }
                            />
                            <span style={{ marginRight: '700px' }}>{item.tokenOneName}/{item.tokenTwoName}</span>
                            <Button type="primary" shape="round" onClick={showModal}>
                                Add Liquidity
                            </Button>
                            
                        </List.Item>
                        
                    )}
                />
                <Modal title="Add Liquidity" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText='Add'>
                                <div>
                                    <span style={{display:'block' }}>
                                        BNB
                                    </span>
                                    <input style={{borderRadius:'8px' , borderWidth:'1px'}} onChange={calculateOutputAmount} ></input>
                                </div>
                                <div>
                                    <span style={{display:'block', borderWidth:'1px'}}>
                                        WETH
                                    </span>
                                    <input style={{borderRadius:'8px', borderWidth:'1px'}}></input>
                                </div>
                            </Modal>
            </InfiniteScroll>

        </div>
    );
};
export default App;