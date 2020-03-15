import React, { Component } from 'react';
import './App.css';
import SearchPanel from './search-panel';
import CoursesList from './courses-list';
import EditListItem from './edit-list-item';

const items = [
  {
    id: '10',
    date: '11 Feb 2020',
    title: 'CSS frameworks',
    description: 'Bootstrap, Material, Foundation',
    duration: '1h 30min'
  },
  {
    id: '11',
    date: '13 Feb 2020',
    title: 'Optimization',
    description: '',
    duration: '2h'
  },
  {
    id: '12',
    date: '15 Feb 2020',
    title: 'OOP',
    description: '',
    duration: '2h'
  },
  {
    id: '13',
    date: '18 Feb 2020',
    title: 'ES Next',
    description: '',
    duration: '2h'
  },
  {
    id: '14',
    date: '20 Feb 2020',
    title: 'AJAX',
    description: '',
    duration: '2h'
  },
  {
    id: '15',
    date: '25 Feb 2020',
    title: 'jQuery',
    description: '',
    duration: '2h'
  },
  {
    id: '16',
    date: '27 Feb 2020',
    title: 'Tools',
    description: '',
    duration: '2h'
  },
  {
    id: '17',
    date: '03 Mar 2020',
    title: 'React.js',
    description: '',
    duration: '2h'
  },
  {
    id: '18',
    date: '10 Mar 2020',
    title: 'React.js + Redux',
    description: '',
    duration: '2h'
  },
  {
    id: '19',
    date: '12 Mar 2020',
    title: 'Angular Part 1',
    description: '',
    duration: '2h'
  },
  {
    id: '20',
    date: '17 Mar 2020',
    title: 'Angular Part 2',
    description: '',
    duration: '2h'
  },
  {
    id: '21',
    date: '19 Mar 2020',
    title: 'JS Patterns',
    description: '',
    duration: '2h'
  },
  {
    id: '22',
    date: '24 Mar 2020',
    title: 'JS Modules',
    description: '',
    duration: '2h'
  },
  {
    id: '23',
    date: '26 Mar 2020',
    title: 'NodeJS / ExpressJS',
    description: '',
    duration: '2h'
  },
  {
    id: '24',
    date: '31 Mar 2020',
    title: 'Testing web application',
    description: '',
    duration: '2h'
  }
];

const formatDate = str => {
  const d = new Date(str);
  const dtf = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  });
  const [{ value: mo }, , { value: da }, , { value: ye }] = dtf.formatToParts(
    d
  );

  return `${da} ${mo} ${ye}`;
};
class App extends Component {
  state = {
    items: items,
    itemToEdit: null
  };

  removeItem = id => {
    const filteredList = this.state.items.filter(el => el.id !== id);
    this.setState({ items: filteredList });
  };
  editItem = id => {
    const itemToEdit = this.state.items.find(el => el.id === id);
    this.setState({ itemToEdit: itemToEdit });
  };
  openAddItem = () => {
    this.setState({ itemToEdit: {} });
  };
  closeEditing = item => {
    const items = this.state.items;
    if (item !== null) {
      item.date = formatDate(item.date);
      const elemIndex = this.state.items.findIndex(el => el.id === item.id);
      if (elemIndex !== -1) {
        items.splice(elemIndex, 1, item);
      } else {
        item.id =
          Math.max.apply(
            null,
            items.map(item => +item.id)
          ) + 1;
        items.push(item);
      }
    }
    this.setState({ items: items, itemToEdit: null });
  };
  filterList = term => {
    const filteredList = items.filter(
      el => el.title.toLowerCase().indexOf(term.toLowerCase()) !== -1
    );
    this.setState({ items: filteredList });
  };

  render() {
    const { itemToEdit, items } = this.state;

    return (
      <div className='App'>
        <header className='App-header'>LEARN</header>

        {itemToEdit ? (
          <EditListItem {...itemToEdit} closeEditing={this.closeEditing} />
        ) : (
          <>
            <div className='heading'>
              <SearchPanel onSearchChange={this.filterList}></SearchPanel>
              <button onClick={this.openAddItem}>Add course</button>
            </div>
            <CoursesList
              items={items}
              editItem={this.editItem}
              removeItem={this.removeItem}
            ></CoursesList>
          </>
        )}
      </div>
    );
  }
}
export default App;
