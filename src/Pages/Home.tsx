import ListForm from "../Components/ListForm/ListForm";
import ListCard from "../Components/ListCard/ListCard";
import { useEffect, useState, useCallback } from "react";
import axios from 'axios';
import { List } from '../Types/Types';

function Home() {
  const [incompleteList, setIncompleteList] = useState<any | null>(null);
  const [filteredList, setFilteredList] = useState<any | null>(null);
  

  const renderLists = useCallback(
    (listItem: any, requestType: 'POST' | 'DELETE') => {
      setFilteredList((list: any[]) => 
        requestType === 'POST' 
          ? [...list, listItem]
          : list.filter((item) => item.id !== listItem.id)
      );
    },
    []
  );

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await axios.get<List[]>('http://localhost:3000/list');
        setFilteredList(response.data)
        const filteredList = response.data.filter(item => item.completed !== true);
        setFilteredList(filteredList);
      } catch (error) {
        console.error('Error Fetching Items:', error)
      }
    };

    fetchLists();
  }, [filteredList])

  return (
    <>
    <ListForm renderingLists={renderLists}/>
    <div className='list-card-container'>
    {/* Array of Objects */}
    {filteredList && Array.isArray(filteredList) && filteredList.length > 0 ? (
      filteredList.map(x => (
        <div className='list-card' key={x.id}>
          <ListCard createdBy={x.createdBy} completionGoal={x.completionGoal} title={x.title} completedOn={x.completedOn} id={x.id} completed={x.completed} renderingLists={renderLists} />
        </div>
      ))
    ) : (
      <div>No Data To Display</div>
    )}
    </div>
    </>
  )
}

export default Home