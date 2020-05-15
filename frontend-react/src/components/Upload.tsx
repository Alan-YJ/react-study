import * as React from 'react';
import styled from 'styled-components'

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

`

const Upload:React.FC<IUpload> = (props)=>{
    const {} = props

    return (
        <>
            <button>Upload</button>
        </>
    )
}

export default Upload


