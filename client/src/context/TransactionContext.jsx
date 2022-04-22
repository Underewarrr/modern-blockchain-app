/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext(); // create a context

const { ethereum } = window; // get the ethereum provider

// fetch ETH contract instance

const getEthereumContract = () => { // get the ethereum contract instance
  const provider = new ethers.providers.Web3Provider(ethereum); // create a provider
  const signer = provider.getSigner(); // get the signer
  const transactionContract = new
  ethers.Contract(contractAddress, contractABI, signer); // create a contract instance

  return transactionContract;
};

export function TransactionProvider({ children }) { // provider component
  const [currentAccount, setCurrentAccount] = useState(''); // create a state

  const [formData, setFormData] = useState({
    addressTo: '', amount: '', keyword: '', message: '',
  }); // create a state

  const [isLoading, setIsLoading] = useState(false); // create a state
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount')); // create a state get from local storage transaction count

  const handleChange = (e, name) => {
    setFormData((prevState) => ({
      ...prevState, [name]: e.target.value,
    }));
  };

  async function CheckIfWalletIsConnected() {
    try {
      if (!ethereum) { return alert('Please Install MetaMask'); }
      const accounts = await ethereum.request({ method: 'eth_accounts' }); // get the accounts
      if (accounts.length) {
        setCurrentAccount(accounts[0]); // set the current account

        // getAllTransactions();  // get all the transactions
        console.log(accounts);
      } else {
        console.log('No accounts found');
      }
    } catch (error) {
      console.log(error);
      throw new Error('No ETH Object');
    }
  }
  // function for conecect accountwith MetaMask
  const connectWallet = async () => { // connect the user's wallet
    try {
      if (!ethereum) return alert('Please Install MetaMask'); // check if the user has installed metamask
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' }); // get the user's accounts
      setCurrentAccount(accounts[0]); // set the current account
    } catch (error) {
      console.log(error);
      throw new Error('No ETH Object');
    }
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert('Please Install MetaMask'); // check if the user has installed metamask

      // get the data from the Context
      const {
        addressTo, amount, keyword, message,
      } = formData;
      const transactionContract = getEthereumContract(); // get the contract instance

      const parsedAmount = ethers.utils.parseEther(amount); // parse the amount
      await ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
          from: currentAccount,
          to: addressTo,
          gas: '0x5208', // 21000 GWEI
          value: parsedAmount, // 0.00001 ETH converted to Hexadecimal Number
        }],
      }); // get the user's accounts

      const transactionHash = await transactionContract
        .addToBlockchain(
          addressTo,
          parsedAmount,
          message,
          keyword,
        ); // add the transaction to the blockchain

      setIsLoading(true); // set the loading state to true
      console.log(`Loading - ${transactionHash.hash}`); // log the transaction hash
      await transactionHash.wait(); // wait for the transaction to be mined
      setIsLoading(false); // set the loading state to false
      console.log(`Sucess - ${transactionHash.hash}`); // log the transaction hash

      // eslint-disable-next-line max-len
      const transactionCount = await transactionContract.getTransactionCount(); // get the transaction count

      setTransactionCount(transactionCount.toNumber()); // set the transaction count with toNumber()
    } catch (error) {
      console.log(error);

      throw new Error('No ETH Object');
    }
  };

  useEffect(() => { // check if the user has connected their wallet
    CheckIfWalletIsConnected(); // check if the user has connected their wallet
  }, []);

  return (
    <TransactionContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction,
      }}
    >
      { children }
    </TransactionContext.Provider>
  );
}
