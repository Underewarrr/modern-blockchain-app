import React, { useContext } from 'react';

import { TransactionContext } from '../context/TransactionContext';


import dummyData from '../utils/dummyData';

const Transactions = () => {
    const { currentAccount } = useContext(TransactionContext);
        
    return (
        <div className='flex w-full justify-center items-center 2xl:py-20 gradient-bg-transactions'>
        <div className='flex flex-col md:p-12 py-12 px-4'></div>
        {currentAccount ? (
            <h3 className='text-white text-3xl text-center my-2'>
                Latest Transaction
            </h3>
           )   : ( 
            <h3 className='text-white text-3xl text-center my-2'>
            Conect account to see last transaction
             </h3>
            )    }

        </div>
    );
   }
   
   export default Transactions;