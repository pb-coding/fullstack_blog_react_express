import React, { useEffect, useState } from 'react';
import { fetchFromAPI, editRequest, deleteRequest, insertRequest } from '../api';

function ManagePages(props) {

  const [pageData, setPageData] = useState({ pages: [] })
  const [pageNameUpdate, setPageNameUpdate] = useState('')
  const [pageName, setPageName] = useState('')
  const [pageLink, setPageLink] = useState('')
  const [addButton, setAddButton] = useState('')

  useEffect(() => {

    fetchFromAPI(setPageData, "/api/pages/get", "pages")

  }, [addButton]);

  var editPages = <p className="mt-3 fs-6">No Pages in Database..</p>

  if (pageData.pages.length !== 0) {
    editPages = pageData.pages.map((val, key) => {
      console.log(val.page_name)
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
              else if (result != null) fetchFromAPI(setPageData, "/api/pages/get", "pages")
              setPageNameUpdate('')
            }}>Edit</button>
            <button className='btn btn-outline-danger btn-small my-2 me-2' onClick={async () => {
              const result = await deleteRequest(`/api/pages/delete/${val.id}`)
              if (result.status != 200) alert("Delete request failed.")
              else if (result != null) fetchFromAPI(setPageData, "/api/pages/get", "pages")
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
        else if (result != null) fetchFromAPI(setPageData, "/api/posts/get", "pages")
        setPageName('')
        setPageLink('')
        setAddButton(Math.floor(Math.random() * 1000000)) /*temporary solution*/
      }}>Add</button> <br /><br />
    </div>
  )
}
export default ManagePages;

