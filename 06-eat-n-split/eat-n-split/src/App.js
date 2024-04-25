import React, { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleSelection(friend) {
    setSelectedFriend((current) =>
      current?.id === friend?.id ? null : friend
    );

    setShowAddFriend(false);
  }

  function handleShowAddFriend() {
    setShowAddFriend(!showAddFriend);
  }

  function handleAddNewFriend(newFriend) {
    setFriends((fs) => [...fs, newFriend]);
  }

  function handleSplitBill(value) {
    //console.log(value);
    setFriends((fs) =>
      fs.map((f) =>
        f.id === selectedFriend.id ? { ...f, balance: f.balance + value } : f
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && (
          <FormAddFriend handleAddNewFriend={handleAddNewFriend} />
        )}
        <Button onClick={handleShowAddFriend}>
          {!showAddFriend ? "Add Friend" : "Close"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          friend={selectedFriend}
          handleSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

function FriendsList({ friends, onSelection, selectedFriend }) {
  //const friends = initialFriends;

  return (
    <ul>
      {friends.map((f) => (
        <Friend
          friend={f}
          key={f.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = friend.id === selectedFriend?.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function FormAddFriend({ handleAddNewFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;
    const newFriend = {
      name,
      image: !image
        ? `https://i.pravatar.cc/48?u=${crypto.randomUUID()}`
        : image,
      balance: 0,
      id: crypto.randomUUID(),
    };

    // console.log(newFriend);

    handleAddNewFriend(newFriend);

    setName("");
    setImage("");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👭Friend name</label>
      <input
        type="text"
        placeholder="Name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>✔Image URL</label>
      <input
        type="text"
        placeholder="Image URL..."
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function FormSplitBill({ friend, handleSplitBill }) {
  const [bill, setBill] = useState(0);
  const [paidByUser, setPaidByUser] = useState(0);
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend = bill - paidByUser;

  /*
  1. set bill to 5, set paid by user to 3, then set bill to 1, paid by user still is 3, bug
  2. select other user, the values are not cleared
  */
  function handleBill(e) {
    let val = Number(e.target.value);

    if (val < 0) {
      val = 0;
    }

    setBill(val);
  }

  function handlePaidByUser(e) {
    let val = Number(e.target.value);

    if (val > bill) {
      val = bill;
    } else if (val < 0) {
      val = 0;
    }

    setPaidByUser(val);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    handleSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {friend.name}</h2>
      <label>💰Bill Value</label>
      <input type="number" value={bill} onChange={handleBill} />
      <label>👨‍💼Your expsnse</label>
      <input type="number" value={paidByUser} onChange={handlePaidByUser} />
      <label>👨 {friend.name}'s expsnse</label>
      <input type="number" disabled value={paidByFriend} />
      <label>🤑 Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
