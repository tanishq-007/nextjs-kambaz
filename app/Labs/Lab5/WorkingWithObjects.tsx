"use client";
import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const [moduleObj, setModuleObj] = useState({
  id: "M101",
  name: "Web Development",
  description: "Introduction to Web Dev using React & Node",
  course: "CS5610"
});

  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${encodeURIComponent(assignment.title)}`}>
        Update Title </a>
      <FormControl className="w-75" id="wd-assignment-title"
        defaultValue={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })}/>
      <hr />

      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/assignment`}>
        Get Assignment
      </a><hr/>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/assignment/title`}>
        Get Title
      </a><hr/>

      <h3>Working With Module</h3>

<h4>Retrieve Module</h4>
<a className="btn btn-primary mb-2"
   href={`${HTTP_SERVER}/lab5/module`}>
  Get Module
</a>

<h4>Retrieve Module Name</h4>
<a className="btn btn-primary mb-2"
   href={`${HTTP_SERVER}/lab5/module/name`}>
  Get Module Name
</a>
<hr />

<h4>Update Module Name</h4>
<FormControl
  className="mb-2"
  defaultValue={moduleObj.name}
  onChange={(e) =>
    setModuleObj({ ...moduleObj, name: e.target.value })
  }
/>

<a className="btn btn-success"
   href={`${HTTP_SERVER}/lab5/module/name/${moduleObj.name}`}>
  Update Module Name
</a>
<hr />

    </div>
);}
