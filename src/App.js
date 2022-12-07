import React, { useState,useEffect } from "react";
import AddItem from "./components/AddItem/AddItem";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SearchItem from "./components/SearchItem/SearchItem";

function App() {
  const API_URL = 'http://localhost:3500/items';
  const [items, setItems] = useState([]); // if we dont have items we have an ampty array
  const [newItem , setNewItem] = useState('');
  const [search , setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading , setIsLoading] = useState(true);

  useEffect( () => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if(!response.ok) throw Error('Did not receive expected Data');
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } 
      catch (err){
        setFetchError(err.message);
      }finally{
        setIsLoading(false)
      }
    }
    
    setTimeout(() => {
      fetchItems();
    }, 2000)
  }, []) 

  // ------------------------------------------------------------------------
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
     
      <SearchItem
        seach={search}
        setSearch={setSearch}
      />
    
    <main>
    {isLoading && <p style={{
        fontSize:'20px',
        fontWeight:'bold',
        display:'flex',
        justifyContent:'center'}}>loading Items...</p>}
       {fetchError && <p style={{
        color:'red',
        display:'flex',
        justifyContent:'center'}}>{`Error: ${fetchError}`}</p>}
      {!fetchError && !isLoading && <Content
          items={items.filter(
            item => ((item.item).toLowerCase()).includes(
            search.toLowerCase()
          ))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
      />}
    </main>
     
      <Footer 
        length={items.length} />
    </div>
  );
}
export default App;
