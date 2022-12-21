import React from 'react'
import './StorageViewer.scss'

function StorageViewer() {
  return (
    <section id='storage-viewer'>
        <p>You've used <b>815 GB</b> of your storage</p>

        <div id='storage-bar-background'>
            <div id='storage-bar'>
                <div id='dot'></div>
            </div>
        </div>

        <div id='storage-values'>
            <b>0 GB</b>
            <b>1000 GB</b>
        </div>
    </section>
  )
}

export default StorageViewer