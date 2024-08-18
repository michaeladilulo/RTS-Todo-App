import React, { useEffect, useState } from 'react';
import ListCard from "../Components/ListCard/ListCard";
import axios from 'axios';
import { List } from '../Types/Types';

function CompletedLists() {
  const [filteredList, setFilteredList] = useState<List[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLists = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get<List[]>('http://localhost:3000/list');
        const completedList = response.data.filter(item => item.completed === true);
        setFilteredList(completedList);
      } catch (error) {
        console.error('Error Fetching Items:', error);
        setError('Error Fetching Items');
      } finally {
        setIsLoading(false);
      }
    };

    fetchLists();
  }, []); 

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className='list-card-container'>
        {filteredList.length > 0 ? (
          filteredList.map(x => (
            <div className='list-card' key={x.id}>
              <ListCard
                createdBy={x.createdBy}
                completionGoal={x.completionGoal || 'N/A'} 
                title={x.title}
                completedOn={x.completedOn}
                id={x.id}
                completed={x.completed} 
                renderingLists={function (listItem: any, requestType: 'POST' | 'DELETE'): void {
                  throw new Error('Function not implemented.');
                } }              />
            </div>
          ))
        ) : (
          <div>No Data To Display</div>
        )}
      </div>
    </>
  );
}

export default CompletedLists;
