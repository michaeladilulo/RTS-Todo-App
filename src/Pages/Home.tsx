import ListForm from "../Components/ListForm/ListForm";
import ListCard from "../Components/ListCard/ListCard";
import { useEffect, useState, useCallback } from "react";
import axios from 'axios';
import { List } from '../Types/Types';

function Home() {
  const [list, setList] = useState<any | null>(null)
  
  const renderLists = useCallback((renderingList: any) => {
    setList([...list, renderingList])
  }, [list])

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await axios.get<List[]>('http://localhost:3000/list');
        setList(response.data);
      } catch (error) {
        console.error('Error Fetching Items:', error)
      }
    };

    fetchLists();
  }, [])

  return (
    <>
    <ListForm renderingLists={renderLists}/>
    <div className='list-card-container'>
    {/* Array of Objects */}
    {list && Array.isArray(list) && list.length > 0 ? (
      list.map(x => (
        <div className='list-card' key={x.id}>
          <ListCard createdBy={x.createdBy} completionGoal={x.completionGoal} title={x.title} completedOn={x.completedOn} id={x.id} completed={x.completed}/>
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