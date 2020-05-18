import * as React from 'react';
import styled from 'styled-components'
import axios from 'axios'

export type uploadFiles = {
    filename: string,
    size: number,
}

interface IUpload {
    handler?: (file: File) => void;
    path?: string;
    files?: uploadFiles[];
}

const btn = styled.button`
    padding:6px 12px;

`

const Upload:React.FC<IUpload> = (props)=>{
    const {} = props
    const uploadFile = (e:any)=>{
        e.preventDefault();
        let formData = new FormData()
        const dom = document.getElementById('file') as HTMLInputElement 
        const files = dom.files as FileList
        for(let key = 0;key<files.length;key++){
            formData.append(`file[${key}]`,files[key])
        }
        axios.post(`http://127.0.0.1:5000/upload`,formData).then(res=>{
            console.info(res)
        })
    }
    return (
        <>
            <form method='post' action='http://127.0.0.1:5000/upload' >
                <div>
                    <input type="file" id='file' multiple />
                </div>
                <div>
                    <button type='submit' onClick={uploadFile}>Upload</button>
                </div>
            </form>
        </>
    )
}

export default Upload


