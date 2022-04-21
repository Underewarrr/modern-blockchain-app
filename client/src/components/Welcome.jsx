import React, { useContext } from 'react';
import { AiFillPayCircle  } from "react-icons/ai";  // this is a custom icon
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";  // this is a custom icon
import { TransactionContext } from "../context/TransactionContext";
import { Loader } from './';


const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";  // this is a custom class that is used to create a border between the navbar items

const Input = ( {placeholder, name, type, value, handleChange} ) => (   // this is a custom class that is used to create a border between the navbar items
    <input 
    placeholder={ placeholder }   
    type={ type }
    step="0.0001"
    value={ value }
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white boder-none text-sm white-glassmorphism"
    />
);

const Welcome = () => {
    const { connectWallet, currentAccount } = useContext(TransactionContext);
   
    console.log(connectWallet)

    const handleSubmit = () => {

    }
    return (
    <div className="flex w-full justify-center items-center">  {/* this is a custom class that is used to create a border between the navbar items */}
        <div className="flex mf:flex-row flex-col items-start justify-between md:p-50 py-12 px-4">  {/* this is a custom class that is used to create a border between the navbar items */}
            <div className="flex flex-1 justify-start flex-col mf:mr-10">   {/* this is a custom class that is used to create a border between the navbar items */}
                <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">  {/* this is a custom class that is used to create a border between the navbar items */}
                    Send Crypto <br /> across the world
                </h1>
                <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                    Explorer the crypto world with the world's most popular crypto exchange. Easily on Krypt.
                </p>

                <button
                type="button"
                onClick={ connectWallet }
                className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 roundedd-full cursor-pointer hover:bg-[#2546bd]"
                >
                    
                <p className="text-white text-base font-semibold">Connect Wallet</p>
                </button>
                <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                    <div className={`rounded-tl-2xl ${ companyCommonStyles }`}>  {/* this is a custom class that is used to create a border between the navbar items */}
                        Reliability
                    </div>
                    <div className={ companyCommonStyles }>Security</div>  {/* this is a custom class that is used to create a border between the navbar items */}
                    <div className={`rounded-tr-2xl ${ companyCommonStyles }`}>  {/* this is a custom class that is used to create a border between the navbar items */}
                        Ethereum
                    </div>
                    <div className={`rounded-bl-2xl ${ companyCommonStyles }`}>  {/* this is a custom class that is used to create a border between the navbar items */}
                        Web 3.0
                    </div>
                    <div className={ companyCommonStyles }>Low fees</div>  {/* this is a custom class that is used to create a border between the navbar items */}
                    <div className={`rounded-br-2xl ${ companyCommonStyles }`}>  {/* this is a custom class that is used to create a border between the navbar items */}
                        Blockchain
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
                <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
                    <div className="flex justify-between flex-col w-full h-full">
                        <div className="flex justify-between items-start">
                            <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                <SiEthereum fontSize={ 21 } color="#fff" />
                            </div>
                            <BsInfoCircle fontSize={ 17 } color="#fff" />
                        </div> 
                        <div>
                            <p className="text-white font-light text-sm">
                                Address
                            </p>
                            <p className="text-white font-semibold text-lg mt-1">
                                Ethereum
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                    <Input 
                     placeholder="Address To"
                     name="addressTo"
                     handleChange={ () => { } }
                     type="text"
                     />
                      <Input 
                     placeholder="Amount (ETH)"
                     name="amount"
                     handleChange={ () => { } }
                     type="number"
                     />
                      <Input 
                     placeholder="Keyword (Gif)"
                     name="Keyword"
                     handleChange={ () => { } }
                     type="text"
                     />
                      <Input 
                     placeholder="Enter Message"
                     name="message"
                     handleChange={ () => { } }
                     type="text"
                     />
                     <div 
                     className="h-[1px] w-full bg-gray-400 my-2"
                     />
                     {true ? (  
                        <Loader />  
                     ) : (
                         <button
                         type="button"
                         onClick={ connectWallet }
                         className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer hover:bg-[#3d4f7c] bg-transparent"
                         >
                        Send Now         
                         </button>  

                     )}
                </div>

            </div>
        </div>
    </div>
        );
   }
   
   export default Welcome;