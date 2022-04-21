// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0; 

contract Transactions {
    uint256 transactionsCount;  // number of transactions
  
    event Transfer(  
        address from, 
        address receiver, 
        uint amount, 
        string message, 
        uint256 timestamp, 
        string keyword
        );

    struct TransferStruct {  // structure for storing transfer data
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct [] transactions; // array of transactions
            // memory means spesific data storage in the memory of that transaction
    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {  // function for adding new transaction to the blockchain
        // increment counter
        transactionsCount += 1;
        // create new transaction
        transactions.push(TransferStruct(  // push new transaction to the array
            msg.sender, 
            receiver, 
            amount, 
            message, 
            block.timestamp,
            keyword
            ));

            emit Transfer(
            msg.sender, 
            receiver, 
            amount, 
            message, 
            block.timestamp,
            keyword);
    }
    function getAllTransactions() public view returns (TransferStruct[] memory) {   // returns all transactions
        // return transactions;  
    }

    function getTransactionCount() public view returns (uint256) {
        // return transactionsCounter;
    }

}