import React from 'react';
import DataAndState from './DataAndState';

class ManageNavigation extends DataAndState {
  
  render() {

    let editNav = this.state.navigation.map((val, key) => {
      return (
        <React.Fragment key={key}>
          <div className="nav-entry">
            <h2>{val.nav_name}</h2>
            <p>{val.link}</p>
            <textarea id="tb-update-navname" className="form-control" name='navNameUpdate' onChange={this.stateUIValueChanges} placeholder='Update navname' ></textarea>
            <button className='btn btn-outline-warning btn-small my-2 me-2' onClick={() => { this.edit(`/api/navigation/update/${val.id}`) }}>Edit</button>
            <button className='btn btn-outline-danger btn-small my-2 me-2' onClick={() => { this.delete(`/api/navigation/delete/${val.id}`) }}>Delete</button>
          </div>
        </React.Fragment>
      )
    })

    return (
      <div className="component-ManageNavigation">
        <div className="create-nav-entry">
          <h1>Add Navigation</h1>
          <textarea id="tb-nav-name" className="form-control" name='setNavName' placeholder='Enter Nav Name' onChange={this.stateUIValueChanges}></textarea>
          <br></br>
          <textarea id="tb-nav-link" className="form-control" name='setNavLink' placeholder='Enter Nav Link' onChange={this.stateUIValueChanges} ></textarea>
          <button className='btn btn-outline-success btn-small my-2 me-2' onClick={() => { this.insert('/api/navigation/insert') }}>Submit</button> <br /><br />
        </div>
        <div className="edit-navigation">
          {editNav}
        </div>
      </div>
    )
  }

  
}
export default ManageNavigation;

