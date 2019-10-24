pragma solidity ^0.4.21;

import "./RBAC.sol";
import "./Ownable.sol";

contract Operatable is Ownable, RBAC{
    string public constant ROLE_CONTROllER = "controller";
    
    address internal currentController;
    
    modifier onlyController(){
        checkRole(msg.sender, ROLE_CONTROllER);
        _;
    }
    
    function removeController() public onlyOwner{
        removeRole(currentController, ROLE_CONTROllER);
    }
    
    function setController(address controller) public onlyOwner{
        require(currentController!=controller && controller!=address(0));
        if(currentController != address(0)){
            removeController();
        }
        addRole(controller, ROLE_CONTROllER);
    }
}