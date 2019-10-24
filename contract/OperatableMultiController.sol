pragma solidity ^0.4.21;

import "./RBAC.sol";
import "./Ownable.sol";

contract Operatable is Ownable, RBAC{
    string public constant ROLE_CONTROllER = "controller";

    modifier onlyController(){
        checkRole(msg.sender, ROLE_CONTROllER);
        _;
    }

    function removeController(address currentController) public onlyOwner{
        removeRole(currentController, ROLE_CONTROllER);
    }

    function setController(address controller) public onlyOwner{
        require(controller!=address(0));
        addRole(controller, ROLE_CONTROllER);
    }
}
