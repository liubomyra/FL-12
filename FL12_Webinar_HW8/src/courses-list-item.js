import React from 'react';
import deleteIcon from './delete.svg';
import editIcon from './edit.svg';

class CoursesListItem extends React.Component {
  state = {
    controlsExpanded: false
  };

  toggleControls() {
    this.setState({ controlsExpanded: !this.state.controlsExpanded });
  }

  render() {
    const {
      id,
      date,
      title,
      description,
      duration,
      removeItem,
      editItem
    } = this.props;

    return (
      <div className='course-list-item' data-id={id}>
        <span className='course-date'>{date}</span>
        <span className='course-title'>{title}</span>
        <span className='course-description'>{description}</span>
        <span className='course-duration'>{duration}</span>
        <span className='course-controls'>
          <button onClick={() => this.toggleControls()}>...</button>
          {this.state.controlsExpanded && (
            <span className='controlsWrap'>
              <button onClick={() => removeItem(id)}>
                <img src={deleteIcon} alt='delete' />
              </button>
              <button onClick={() => editItem(id)}>
                {' '}
                <img src={editIcon} alt='edit' />
              </button>
            </span>
          )}
        </span>
      </div>
    );
  }
}

export default CoursesListItem;
