import React from 'react'
import './Management.scss'

import LOGO from "../../assets/icons/logo.svg";
import DOCUMENT from "../../assets/icons/icon-document.svg";
import FOLDER from "../../assets/icons/icon-folder.svg";
import UPLOAD from "../../assets/icons/icon-upload.svg";

function Management() {
  return (
    <section id='management'>
        <img src={LOGO} alt="" />

        <div id='management-files'>
            <img src={DOCUMENT} alt="Document icon" />
            <img src={FOLDER} alt="Folder icon" />
            <img src={UPLOAD} alt="Upload icon" />
        </div>
    </section>
  )
}

export default Management