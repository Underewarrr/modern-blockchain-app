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
    const [currentAccount, setCurrentAccount] = useState('');  // create a state
    
    
    const CheckIfWalletIsConnected = async () => {  // check if the user has connected their wallet
        try {
        if (!ethereum) return alert("Please Install MetaMask")
        const accounts = await ethereum.request({method: 'eth_accounts'});  // get the accounts
       
        if (accounts.length) {  
            setCurrentAccount(accounts[0]);  // set the current account

            // getAllTransactions();  // get all the transactions
       
        console.log(accounts);
    } else{
        console.log('No accounts found')
    }
        } catch (error) {
            console.log(error);

            throw new Error("No ETH Object");
        }
    }
    const connectWallet = async () => {  // connect the user's wallet
        try {
            if (!ethereum) return alert("Please Install MetaMask")  // check if the user has installed metamask
            const accounts = await ethereum.request({method: 'eth_requestAccounts'});  // get the user's accounts
            setCurrentAccount(accounts[0]);  // set the current account
        } catch (error) {
            console.log(error);

            throw new Error("No ETH Object");
        }
    }


    useEffect(() => {  // check if the user has connected their wallet
        CheckIfWalletIsConnected();  // check if the user has connected their wallet
    }, []);

    return (  
        <TransactionContext.Provider value={{ connectWallet }}> // pass the provider value conecct wallet for all components
         { children}  // pass the children to the provider
        </TransactionContext.Provider>
    )

}