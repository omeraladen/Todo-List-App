import React, { useState } from "react";
import AddItem from "./components/AddItem/AddItem";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem(
    'shopinglist'
  )));
  const [newItem , setNewItem] = useState('');
  
  // for saving the item that you cheaked in browser cash
  const setAndSaveNewItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shopinglist", JSON.stringify(newItems));
  }
  
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1: 1;
    const myNewItem = {id, checked:false , item};
    const listItems = [...items , myNewItem];
    setItems(listItems);
  }


  // Check id to maked it cheaked
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item);
      
    setAndSaveNewItems(listItems);
  };

  // Deleting Item by Using Trush Icon
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveNewItems(listItems);
  };

  // const randomItem = () => {
  //   const names = [1, 2, 3, 4, 5];
  //   const random = Math.floor(Math.random() * names.length);
  //   setItems(names[random]);
  // };
  
  const handleSubmit = (e) => {
    //  used to prevent refresh in forms
    e.preventDefault(); 
    if(!newItem) return;
   addItem(newItem)

    setNewItem('')
    
  }
  return (
    <div>
      <Header title="Todo List" />
     
      <AddItem
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />
    
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
     
      <Footer 
        length={items.length} />
    </div>
  );
}
export default App;
