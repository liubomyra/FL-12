import React from 'react';
import './courses-list.css';

import CoursesListItem from './courses-list-item';

function CoursesList({ items, editItem, removeItem }) {
  return (
    <ul className='course-list'>
      {items.map(item => {
        const { id, ...itemProps } = item;
        return (
          <li key={id}>
            <CoursesListItem
              {...itemProps}
              id={id}
              removeItem={removeItem}
              editItem={editItem}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default CoursesList;
