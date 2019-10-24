pragma solidity 0.4.24;

import './OperatableMultiController.sol';
// import './SafeMath.sol';
// import "./BasicToken.sol";

contract AirDrop is Operatable{
    // event LogSendedToReceiver(address, uint);
    // event LogSendedBasicTokenToReceiver(address, uint);

    // function balanceIn(address token) public view onlyController returns(uint) {
    //     return BasicToken(token).balanceOf(this);
    // }
    //
    // function multiSendBaseToken(address[] dests, uint value) public onlyController{
    //     for(uint i=0; i<dests.length; i++) {
    //        dests[i].transfer(value);
    //        emit LogSendedBasicTokenToReceiver(dests[i], value);
    //     }
    // }
    //
    // function multiSend(address tokenAddr, address[] dests, uint[] values) public onlyController{
    //     require(dests.length == values.length);
    //     for(uint i=0; i<dests.length; i++) {
    //        BasicToken(tokenAddr).transfer(dests[i], values[i]);
    //        emit LogSendedToReceiver(dests[i], values[i]);
    //     }
    // }

    function multiSendETZ(address[] dests, uint[] values) public onlyController{
        require(dests.length == values.length);
        for(uint i=0; i<dests.length; i++) {
           dests[i].transfer(values[i]);
           // emit LogSendedToReceiver(dests[i], values[i]);
        }
    }
}


/* contract AirDrop is Operatable{
    event LogSendedToReceiver(address, uint);

    function balanceIn(address token) public view onlyController returns(uint) {
        return BasicToken(token).balanceOf(this);
    }

    function multiSend(address tokenAddr, address[] dests, uint[] values) public onlyController{
        require(dests.length == values.length);
        for(uint i=0; i<dests.length; i++) {
           BasicToken(tokenAddr).transfer(dests[i], values[i]);
           emit LogSendedToReceiver(dests[i], values[i]);
        }
    }
} */
