import React, {useState} from 'react';
import {FiX} from 'react-icons/fi';
import {Box, Modal} from '@mui/material';
import MediaUploadModal from "@/app/components/MediaUploadModal/MediaUploadModal";

const ImageUploadModal = ({setOpenImageUploadModal}) => {
    const [open, setOpen] = useState(true);
    const [openMediaUploadModal, setOpenMediaUploadModal] = useState(false);

    const imageUploadModalClose = () => {
        setOpenImageUploadModal(false);
        setOpen(false);
    }
    const MediaUploadModalHandler = () => {
        // setOpenImageUploadModal(false);
        // setOpen(false);
        setOpenMediaUploadModal(true);
    }
    return (<>
        {openMediaUploadModal && <MediaUploadModal setOpenMediaUploadModal={setOpenMediaUploadModal}/>}
        <Modal open={open} onClose={imageUploadModalClose}>
            <div>
                <Box
                    className={`-translate-x-1/2 -translate-y-1/2 absolute top-2/4 left-2/4 w-[300px] max-w-[95vw] h-max bg-white rounded`}>
                    <div className={`relative h-[50px] border-b-2`}>
                        <FiX className={`mt-1 mr-1 cursor-pointer float-right text-lg`}
                             onClick={imageUploadModalClose}
                        />
                        <h4 className={`text-md font-semibold uppercase `}>Showcase Your...</h4>
                    </div>
                    <div>
                        <div
                            onClick={MediaUploadModalHandler}
                            className={`border-b h-12 text-left cursor-pointer flex align-middle items-center pt-0 pl-5`}>
                            <h4 className={`text-md`}>Project</h4>
                        </div>
                        <div
                            onClick={MediaUploadModalHandler}
                            className={`border-b h-12 text-left cursor-pointer flex align-middle items-center pt-0 pl-5`}>
                            <h4 className={`text-md`}>Creative Work</h4>
                        </div>
                        <div
                            onClick={MediaUploadModalHandler}
                            className={`border-b h-12 text-left cursor-pointer flex align-middle items-center pt-0 pl-5`}>
                            <h4 className={`text-md`}>Innovation</h4>
                        </div>
                        <div
                            onClick={MediaUploadModalHandler}
                            className={`h-12 text-left cursor-pointer flex align-middle items-center pt-0 pl-5`}>
                            <h4 className={`text-md`}>STEM Creations</h4>
                        </div>
                    </div>
                </Box>
            </div>
        </Modal>
    </>);
}
export default ImageUploadModal;