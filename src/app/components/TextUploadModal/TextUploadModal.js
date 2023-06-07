'use client'
import React, {useEffect, useState} from 'react';
import {Modal, TextField} from "@mui/material";
import {FiX} from "react-icons/fi";
import axios from "axios";

const TextUploadModal = ({media}) => {
        const [open, setOpen] = useState(true);

        const textUploadModalCloseHandler = () => {
            setOpen(false);
        }
        const onSubmit = async () => {
            const formData = new FormData();
            media.forEach((option) => formData.append('media', option));
            try {
                const response = await axios.post('/posts/api/', formData, {
                    headers: {
                        Authorization: `token ${localStorage.getItem('token')}`,
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log(response.data);
            } catch (error) {
                console.log(error)
            }
        }

        useEffect(() => {
            console.log(media);
        }, [])
        return (<>
            <Modal open={open} onClose={textUploadModalCloseHandler}>
                <div
                    className={`-translate-x-1/2 -translate-y-1/2 absolute top-2/4 left-2/4 w-[75vw] h-[85vh] bg-white rounded`}>
                    <div className={`relative h-[50px] border-b-2`}>
                        <FiX className={`mt-1 mr-1 cursor-pointer float-right text-lg`}
                            // onClick={imageUploadModalClose}
                        />
                        <h4 className={`text-md font-semibold uppercase `}>Upload Text</h4>
                    </div>
                    <div className={`flex items-center h-full flex-col justify-evenly`}>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
                        <TextField
                            id="outlined-multiline-static"
                            label="Multiline"
                            multiline
                            rows={4}
                            defaultValue="Default Value"
                        />
                        <button
                            onClick={onSubmit}
                            className="flex-shrink-0 rounded border-0 bg-blue-600 px-4 py-2 text-white transition duration-300 ease-in-out text-md hover:bg-blue-700 focus:outline-none sm:mt-0 sm:px-8">
                            Publish
                        </button>
                    </div>
                </div>
            </Modal>
        </>);
    }
;

export default TextUploadModal;