pragma solidity >=0.4.21 <0.7.0;

contract SocialNetwork {
    string public name;
    uint public postCount = 0;
    mapping(uint => Post) public posts;

    struct Post {
        uint id;
        string content;
        uint tipAmount;
        address payable author;
    }

    event PostCreated(
        uint id,
        string content,
        uint tipAmount,
        address payable author
    );

    event PostTipped(
        uint id,
        string content,
        uint tipAmount,
        address payable author
    );

    constructor() public {
        name = "Dapp University Social Network";
    }

    function createPost(string memory _content) public {
        // Require valid content
        require(bytes(_content).length > 0);
        // Increment the post count
        postCount ++;
        // Create the post
        posts[postCount] = Post(postCount, _content, 0, msg.sender);
        // Trigger event
        emit PostCreated(postCount, _content, 0, msg.sender);
    }

    function tipPost(uint _id) public payable{
        // Make sure the id is valid
    require( _id > 0 && _id <= postCount );
        
        //fetch the post
        Post memory _post = posts[_id];
        //fetch the author
        address payable _author = _post.author;
        //pay the author by sending Ether (send the cryptocurrency)
        address(_author).transfer(msg.value);
        //increment the tip amount
        _post.tipAmount = _post.tipAmount + msg.value;
        //update the post
        posts[_id] = _post;
        //trigger an event 
        emit PostTipped(_id, _post.content, _post.tipAmount, _author);    
    }
}