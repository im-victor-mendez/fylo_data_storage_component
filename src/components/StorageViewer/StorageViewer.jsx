import { motion } from 'framer-motion'
import React from 'react'
import StorageMessage from '../StorageMessage/StorageMessage'
import './StorageViewer.scss'

function StorageViewer() {
  return (
    <section id='storage-viewer'>
        <p>You've used <b>815 GB</b> of your storage</p>

        <div id='storage-bar-background'>
            <motion.div id='storage-bar'
            initial={{ width: 0 }}
            animate={{ width: '81.5%' }}
            transition={{ duration: 1 }}
            >
                <div id='dot'></div>
            </motion.div>
        </div>

        <div id='storage-values'>
            <b>0 GB</b>
            <b>1000 GB</b>
        </div>
        <StorageMessage />
    </section>
  )
}

export default StorageViewer