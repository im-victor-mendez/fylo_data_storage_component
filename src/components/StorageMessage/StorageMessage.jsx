import { motion } from 'framer-motion'
import React from 'react'
import './StorageMessage.scss'

function StorageMessage() {
  return (
    <motion.section id='storage-message'
    initial={{ y: 100, opacity: 0, scale: 0 }}
    animate={{ y: 0, opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    >
        <h1>185</h1>
        <p>GB LEFT</p>
    </motion.section>
  )
}

export default StorageMessage