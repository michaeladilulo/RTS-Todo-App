import React, { FC, useEffect, useState, useCallback } from 'react';
import ListCard from '../ListCard/ListCard';
import axios from 'axios';

interface ListItem {
  id: string;
  createdBy: string;
  completionGoal: null;
  title: string;
  completedOn: string | null;
  completed?: boolean;
}

const ListContainer: FC = () => {
  const [list, setList] = useState<ListItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/list');
        setList(response.data);
      } catch (error) {
        console.error('Error fetching list data:', error);
      }
    };

    fetchData();
  }, []);

  const renderLists = useCallback((deletedItemId: string) => {
    setList((prevList) => prevList.filter((item) => item.id !== deletedItemId));
  }, []);

  return (
    <div>
      {list.map((listItem) => (
        <ListCard
          key={listItem.id}
          id={listItem.id}
          createdBy={listItem.createdBy}
          completionGoal={listItem.completionGoal}
          title={listItem.title}
          completedOn={listItem.completedOn}
          completed={listItem.completed}
          renderingLists={renderLists}
        />
      ))}
    </div>
  );
};

export default ListContainer;