import React, { useEffect, useState } from 'react';
import { editRequest, deleteRequest, insertRequest } from '../api';

function ManagePages(props) {

  const [pageNameUpdate, setPageNameUpdate] = useState('')
  const [pageName, setPageName] = useState('')
  const [pageLink, setPageLink] = useState('')

  var editPages = <p className="mt-3 fs-6">No Pages in Database..</p>

  if (props.pageData.pages.length !== 0) {
    editPages = props.pageData.pages.map((val, key) => {
      return (
        <React.Fragment key={key}>
          <div className="nav-entry">
            <h2>{val.page_name}</h2>
            <p>{val.link}</p>
            <textarea id="tb-update-pagename" className="form-control" name='pageNameUpdate' value={pageNameUpdate} onChange={event => setPageNameUpdate(event.target.value)} placeholder='Update page name' ></textarea>

            <button className='btn btn-outline-warning btn-small my-2 me-2' onClick={async () => {
              let data = {}
              data.pageNameUpdate = pageNameUpdate
              const result = await editRequest(`/api/pages/update/${val.id}`, data)
              if (result.status != 200) alert("Edit request failed.")
              else if (result != null) props.setChildChange(Math.floor(Math.random() * 1000000)) /*temporary solution*/
              setPageNameUpdate('')
            }}>Edit</button>

            <button className='btn btn-outline-danger btn-small my-2 me-2' onClick={async () => {
              const result = await deleteRequest(`/api/pages/delete/${val.id}`)
              if (result.status != 200) alert("Delete request failed.")
              else if (result != null) props.setChildChange(Math.floor(Math.random() * 1000000)) /*temporary solution*/
            }}>Delete</button>
          </div>
        </React.Fragment>
      )
    })
  }

  return (
    <div className={props.className}>
      <h1 className="text-center">Manage Pages</h1>
      {editPages}

      <h3>Add Page</h3>
      <textarea id="tb-page-name" className="form-control" name='setPageName' placeholder='Enter Page Name' value={pageName} onChange={event => setPageName(event.target.value)}></textarea>
      <br></br>
      <textarea id="tb-page-link" className="form-control" name='setPageLink' placeholder='Enter Page Link' value={pageLink} onChange={event => setPageLink(event.target.value)} ></textarea>
      <button className='btn btn-outline-success btn-small my-2 me-2' onClick={async () => {
        let data = {}
        data.setPageName = pageName
        data.setPageLink = pageLink
        const result = await insertRequest('/api/pages/insert', data)
        if (result.status != 200) alert("Insert request failed.")
        else if (result != null) props.setChildChange(Math.floor(Math.random() * 1000000)) /*temporary solution*/
        setPageName('')
        setPageLink('')
      }}>Add</button> <br /><br />
    </div>
  )
}
export default ManagePages;

