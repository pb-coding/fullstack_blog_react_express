import React from 'react';
import LinkCard from '../components/LinkCard';
import ManagePages from '../components/ManagePages';
import ManagePosts from '../components/ManagePosts';

function Backend() {

  return (
    <div className="page-backend">
      <div className="container mt-4">
        <div className="row">
          <div className="col mt-2">
          <LinkCard className="mb-4"
            title="Settings" 
            links={[
              { name: "Manage Posts", link: "/backend/posts"},
              { name: "Manage Pages", link: "/backend/pages"}
            ]} 
          />
          </div>
          <div className="col-lg-6 mt-2">
            <ManagePages className="comp-manage-pages"/>
            <ManagePosts className="comp-manage-posts"/>
          </div>
          <div className="col mt-2"> 
            <LinkCard 
              title="Follow me on:" 
              links={[{ name: "Github", link: "https://github.com/pb-coding"}]} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Backend;