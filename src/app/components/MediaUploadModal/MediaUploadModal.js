import React, {useState} from 'react';
import {Modal} from "@mui/material";
import {FiX} from "react-icons/fi";
import TextUploadModal from "@/app/components/TextUploadModal/TextUploadModal";

const MediaUploadModal = ({setOpenMediaUploadModal}) => {
    const [open, setOpen] = useState(true);
    const [openTextUploadModal, setOpenTextUploadModal] = useState(false);
    const [media, setMedia] = useState([]);
    const mediaUploadModalCloseHandler = () => {
        setOpen(false)
        setOpenMediaUploadModal(false)
    }

    const TextUploadModalHandler = () => {
        setOpen(false);
        setOpenTextUploadModal(true)
    }

    const handleImageUpload = (event) => {
        const files = event.target.files;
        setMedia([...media, ...files]);
    }

    // useEffect(()=>{
    //     console.log(media)
    // },[media])

    return (<>
        {openTextUploadModal && <TextUploadModal setOpen={setOpen} media={media}/>}
        <Modal open={open} onClose={mediaUploadModalCloseHandler}>
            <div
                className={`-translate-x-1/2 -translate-y-1/2 absolute top-2/4 left-2/4 w-[95vw] h-[95vh] bg-white rounded`}>
                <div className={`relative h-[50px] border-b-2`}>
                    <FiX className={`mt-1 mr-1 cursor-pointer float-right text-lg`}
                        // onClick={imageUploadModalClose}
                    />
                    <h4 className={`text-md font-semibold uppercase `}>Upload images and video</h4>
                </div>
                <div className={`flex justify-center items-center h-full`}>
                    <input
                        // accept=".jpg, .jpeg, .png"
                        type="file"
                        id="file"
                        multiple
                        onChange={(event) => {
                            handleImageUpload(event);
                        }}
                    />
                    <input
                        // accept=".jpg, .jpeg, .png"
                        type="file"
                        id="file"
                        multiple
                        onChange={(event) => {
                            handleImageUpload(event);
                        }}
                    />

                    <button
                        onClick={TextUploadModalHandler}
                        className="flex-shrink-0 rounded border-0 bg-blue-600 px-4 py-2 text-white transition duration-300 ease-in-out text-md hover:bg-blue-700 focus:outline-none sm:mt-0 sm:px-8">
                        Next
                    </button>
                </div>
            </div>
        </Modal>
    </>)
}
export default MediaUploadModal;