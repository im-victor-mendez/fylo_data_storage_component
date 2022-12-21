import React from 'react'
import './Management.scss'

import LOGO from "../../assets/icons/logo.svg";
import DOCUMENT from "../../assets/icons/icon-document.svg";
import FOLDER from "../../assets/icons/icon-folder.svg";
import UPLOAD from "../../assets/icons/icon-upload.svg";
import { motion } from 'framer-motion';

function Management() {
  return (
    <motion.section id='management'
    initial={{ opacity: 0, scale: 0, y: 200 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    >
        <motion.img src={LOGO} alt="Logo icon"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.2 }}
        />

        <div id='management-files'>
            <motion.img src={DOCUMENT} alt="Document icon"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.2 }}
            />
            <motion.img src={FOLDER} alt="Folder icon"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.2 }}
            />
            <motion.img src={UPLOAD} alt="Upload icon"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.2 }}
            />
        </div>
    </motion.section>
  )
}

export default Management