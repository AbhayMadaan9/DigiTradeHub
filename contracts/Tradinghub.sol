// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract Tradinghub {
    struct Product {
        string prod_owner_acc;
        string name;
        string ipfsAddress; // IPFS address of the product information
        uint256 price;
        string product_type;
        string desc;
        string img_hash;
        bool approved;
        bool sold;
    }

    struct User {
        bool isRegistered;
        string username;
        uint256[] userProducts;
    }

    struct Purchase {
        string buyer;
        address seller;
        uint256 timestamp;
        uint256 productId;
    }

    event NewPurchase(
        string buyer,
        address seller,
        uint256 timestamp,
        uint256 productId
    );

    event ProductApproval(uint256 productId, bool approved);

    uint256 public product_id;
    uint256 public purchaseIdCounter;
    mapping(uint256 => Product) public products;
    mapping(uint256 => Purchase) public purchases;
    mapping(string => User) public users;

    address payable private owner;

    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "Only the owner can perform this operation."
        );
        _;
    }

    modifier notRegisteredUser(string memory acc) {
        require(!users[acc].isRegistered, "User is already registered.");
        _;
    }
    modifier onlyRegistered(string memory acc) {
        require(users[acc].isRegistered, "User is not registered.");
        _;
    }

    constructor() payable {
        owner = payable(msg.sender);
    }

    function registerUser(
        string memory _acc,
        string memory _username
    ) public notRegisteredUser(_acc) {
        users[_acc] = User(true, _username, new uint256[](0));
    }

  function checkuser(string memory _acc) public view returns (string memory) {
    if (users[_acc].isRegistered) {
        return users[_acc].username;
    } else {
        return "";
    }
}

     // Helper function to convert uint256 to string
    function toString(uint256 value) internal pure returns (string memory) {
        if (value == 0) {
            return "0";
        }
        uint256 tempValue = value;
        uint256 length;
        while (tempValue != 0) {
            length++;
            tempValue /= 10;
        }
        bytes memory buffer = new bytes(length);
        while (value != 0) {
            length -= 1;
            buffer[length] = bytes1(uint8(48 + uint8(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }

    function addProduct(
        string memory _acc,
        string memory _name,
        string memory _ipfsAddress,
        uint256 _price,
        string memory _desc,
        string memory _img_hash,
        string memory _type
    ) public onlyRegistered(_acc) {
        product_id++;
        products[product_id] = Product(
            _acc,
            _name,
            _ipfsAddress,
            _price,
            _type,
            _desc,
            _img_hash,
            false,
            false
        );
        users[_acc].userProducts.push(product_id);
    }

    function list_user_products(
        string memory _acc
    ) public view returns (uint256[] memory) {
        uint256[] memory allProducts = new uint256[](product_id);
        uint256 count = 0;
        for (uint256 i = 1; i <= product_id; i++) {
            if (
                keccak256(abi.encodePacked(products[i].prod_owner_acc)) ==
                keccak256(abi.encodePacked(_acc)) &&
                bytes(products[i].name).length > 0
            ) {
                allProducts[count] = i;
                count++;
            }
        }

        return allProducts;
    }

    function listUnapprovedProducts()
        public
        view
        onlyOwner
        returns (uint256[] memory)
    {
        uint256[] memory unapprovedProducts = new uint256[](product_id);
        uint256 count = 0;

        for (uint256 i = 1; i <= product_id; i++) {
            if (!products[i].approved && !products[i].sold) {
                unapprovedProducts[count] = i;
                count++;
            }
        }

        // Resize the array to remove any unused elements
        assembly {
            mstore(unapprovedProducts, count)
        }

        return unapprovedProducts;
    }

    function listAllProducts() public view returns (uint256[] memory) {
        uint256[] memory allProducts = new uint256[](product_id);
        uint256 count = 0;
        for (uint256 i = 1; i <= product_id; i++) {
            if (products[i].approved) {
                allProducts[count] = i;
                count++;
            }
        }

        return allProducts;
    }

    function approveProduct(uint256 _productId) public onlyOwner {
        require(_productId <= product_id, "Invalid product ID.");
        Product storage product = products[_productId];
        require(!product.approved, "Product is already approved.");
        product.approved = true;
        emit ProductApproval(_productId, true);
    }

    function getUserProductCount(
        string memory acc
    ) public view returns (uint256) {
        return users[acc].userProducts.length;
    }

    function getUserProduct(
        uint256 _index,
        string memory acc
    ) public view returns (string memory, string memory, uint256, bool) {
        require(
            _index < users[acc].userProducts.length,
            "Product index out of bounds."
        );
        uint256 productId = users[acc].userProducts[_index];
        Product storage product = products[productId];
        return (
            product.name,
            product.ipfsAddress,
            product.price,
            product.approved
        );
    }

    function stringToAddress(
        string memory _addressString
    ) public pure returns (address) {
        bytes memory tempBytes = bytes(_addressString);
        bytes20 convertedBytes;

        // Check that the string has the correct length (40 characters without "0x")
        require(tempBytes.length == 40, "Invalid address string length");

        // Convert the string to bytes20
        assembly {
            convertedBytes := mload(add(tempBytes, 0x20))
        }

        // Convert bytes20 to address
        address addr;
        assembly {
            addr := mload(add(convertedBytes, 20))
        }

        return addr;
    }

    function purchase(uint256 _productId, address _seller) external payable {
        require(_productId <= product_id, "Invalid product ID.");
        Product storage product = products[_productId];
        require(product.approved, "Product is not approved.");
        require(
            msg.value >= product.price * 1 ether,
            "Insufficient funds to make the purchase"
        );

        // Calculate the amounts to be distributed
        uint256 totalPrice = product.price * 1 ether;
        uint256 ownerCut = (totalPrice * 10) / 100; // 10% goes to the owner
        uint256 sellerCut = totalPrice - ownerCut; // Remaining goes to the seller

        // Transfer funds
        owner.transfer(ownerCut);
        payable(_seller).transfer(sellerCut);
        products[product_id].sold = true;
        // Create a purchase record
        Purchase memory newPurchasee = Purchase(
            products[_productId].prod_owner_acc,
            _seller,
            block.timestamp,
            _productId
        );

        purchases[purchaseIdCounter] = newPurchasee;
        purchaseIdCounter++;
        // emit NewPurchase(products[_productId].prod_owner_acc, _seller, block.timestamp, _productId);
    }

    function getTotalProductCount() public view returns (uint256) {
        return product_id;
    }

    function get_product_filehash(uint256 _id) public view returns (string memory) {
    return products[_id].ipfsAddress;
}


    function get_total_purchases()
        public
        view
        returns (uint256[] memory)
    {
        uint256[] memory all_purchases = new uint256[](purchaseIdCounter);
        uint256 count = 0;
        for (uint256 i = 1; i <= purchaseIdCounter; i++) {
            //&& bytes(products[i].name).length > 0
            if (products[i].approved && products[i].sold) {
                all_purchases[count] = i;
                count++;
            }
        }

        return all_purchases;
    }

    function get_purchase_info(uint256 _pid)
        public
        view
        returns (string memory, address, string memory, string memory)
    {
 require(_pid <= purchaseIdCounter, "Invalid Purchase ID.");
        Purchase storage purchace = purchases[_pid];
        return (
            purchace.buyer,
            purchace.seller,
            toString(purchace.timestamp),
            toString(purchace.productId)
        );
    }

   
    function getProductDetails(
        uint256 _productId
    )
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        require(_productId <= product_id, "Invalid product ID.");
        Product storage product = products[_productId];
        return (
            product.prod_owner_acc,
            product.name,
            toString(product.price),
            product.product_type,
            product.desc,
            product.img_hash
        );
    }
}
