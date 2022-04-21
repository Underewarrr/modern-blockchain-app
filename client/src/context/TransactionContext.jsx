import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress} from '../utils/constants';  

export const TransactionContext = React.createContext();  // create a context

const { ethereum } = window;  // get the ethereum provider

// fetch ETH contract instance

const getEthereumContract = () => {  // get the ethereum contract instance
    const provider = new ethers.providers.Web3Provider(ethereum);  // create a provider
    const signer = provider.getSigner();  // get the signer
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);  // create a contract instance

    console.log({
        provider,
        signer,
        transactionContract,
    });
}


export const TransactionProvider = ({ children }) => {  // provider component

    const CheckIfWalletIsConnected = async () => {  // check if the user has connected their wallet
        if (!ethereum) return alert("Please Install MetaMask")

        const accounts = await ethereum.request({method: 'eth_accounts'});

        console.log(accounts);
    }

    useEffect(() => {  // check if the user has connected their wallet
        CheckIfWalletIsConnected();
    }, []);
    
    return (  
        <TransactionContext.Provider value={{value: 'teste'}}> 
         { children}  // pass the children to the provider
        </TransactionContext.Provider>
    )

}