"use client"
import React, {useState} from "react";
import ImageUploadModal from "@/app/components/ImageUploadModal/ImageUploadModal";

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export default function Home() {
    const [openImageUploadModal, setOpenImageUploadModal] = useState(false);
    const uploadBtnClickHandler = () => {
        setOpenImageUploadModal(true)
    }
    return (
        <div className={`flex justify-center items-center h-full`}>
            {openImageUploadModal && <ImageUploadModal setOpenImageUploadModal={setOpenImageUploadModal}/>}
            <button
                onClick={uploadBtnClickHandler}
                className="flex-shrink-0 rounded border-0 bg-blue-600 px-4 py-2 text-white transition duration-300 ease-in-out text-md hover:bg-blue-700 focus:outline-none sm:mt-0 sm:px-8">
                Upload
            </button>
        </div>
    );
}