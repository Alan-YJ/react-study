import * as React from 'react';
import styled from 'styled-components'
import axios,{ AxiosStatic } from 'axios'
import './Upload.scss'

const CancelToken = axios.CancelToken
let source = CancelToken.source();

export type uploadFiles = {
    filename: string,
    size: number,
}

interface IUpload {
    handler?: (file: File) => void;
    path?: string;
    files?: uploadFiles[];
}

interface IFile{
    name:string,
    size:number,
    type:string,
    canPreview:boolean,
    progress:number
}

export const ImageExtends = ['png' , 'img' , 'gif' , 'bmp' , 'svg' , 'webp', "mp4" ]

const Upload:React.FC<IUpload> = (props)=>{
    let [urls,setUrls] = React.useState([])
    let [files,setFiles]:any = React.useState([])
    let [progress,setProgress] = React.useState(0.0)
    const config = {
        cancelToken:source.token,
        onUploadProgress(progress:ProgressEvent){
            if(progress.lengthComputable){
                let percent:number = progress.loaded / progress.total*100
                setProgress(percent)
            }
        }
    }

    const cancelUpload = ()=>{
        if(source){
            source.cancel('取消')
        }
    }

    const changeFiles = (e:React.FormEvent<HTMLInputElement>)=>{
        if(e.currentTarget.files && e.currentTarget.files.length>0){
            let filelist:Array<any> = []
            for(let i=0;i<e.currentTarget.files.length;i++){
                let extend = e.currentTarget.files[i].name.substring(e.currentTarget.files[i].name.lastIndexOf('.')+1)
                let item = {
                    name:e.currentTarget.files[i].name,
                    size:e.currentTarget.files[i].size,
                    type:extend,
                    canPreview:ImageExtends.includes(extend),
                    src:'',
                    progress:0,
                    content:e.currentTarget.files[i],
                    loaded:false,
                    index:i,
                }
                if(ImageExtends.includes(extend)){
                    let reader = new FileReader()
                    reader.readAsDataURL(e.currentTarget.files[i])
                    reader.onload = ()=>{
                        let filesTemp = JSON.parse(JSON.stringify(filelist))
                        filesTemp.splice(i,1,Object.assign(item,{
                            src:reader.result
                        }))
                        setFiles(filesTemp)
                    }
                }
                filelist.push(item)
            }
            setFiles(filelist)
        }
    }

    const uploadFile = (e:any)=>{
        e.preventDefault();
        let formData = new FormData()
        const dom = document.getElementById('file') as HTMLInputElement 
        const files = dom.files as FileList
        if(files.length===0){
            return 
        }
        for(let key = 0;key<files.length;key++){
            formData.append(`file[]`,files[key])
        }
        axios.post(`http://192.168.45.121:5000/upload`,formData,config).then(res=>{
            if(res.data.status==='success'){
                setUrls(res.data.url)
                dom.value = ''
                setFiles([])
            }
        }).catch(err=>{
            if(axios.isCancel(err)){
                console.info(err)
            }
        })
    }
    return (
        <>
            <form method='post' action='http://192.168.45.121:5000/upload' >
                <div>
                    <input type="file" id='file' multiple onChange={changeFiles}/>
                </div>
                <div className='preview-wrap'>
                    {
                        files.map((file)=>{
                            if(file.canPreview){
                                return (
                                    <div className='preview-item-wrap' key={file.index}>
                                        <img src={file.src}  className="preview-item"/>
                                        {progress>0?
                                            <button className='danger-btn' onClick={cancelUpload}>取消</button>:
                                            <></>
                                        }
                                    </div>
                                )
                            }else{
                                return (
                                    <div className='preview-item-wrap' key={file.index}>
                                        <div className='preview-item' key={file.index}>{file.type}</div>
                                        {progress>0?
                                            <button className='danger-btn' onClick={cancelUpload}>取消</button>:
                                            <></>
                                        }
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <div>
                    <button type='submit' onClick={uploadFile} >Upload</button>
                </div>
                {
                    progress>0?
                    (
                        <>
                            <div className='progress-wrap'>
                                <div className='progress-num'>{progress.toFixed(0)}%</div>
                                <div className='progress-bar'></div>
                                <div className='progress-mask' style={{width:(100-progress)+'%'}}></div>
                            </div>
                        </>
                    ) :<></>
                }
                {
                    progress===100 && urls && urls.length>0?
                    (
                        <ul>
                            {
                                urls.map(url=>{
                                    return <li key={url}>
                                        <a href={url} style={{color:"#2486b9",textDecoration:"none"}}>
                                            { url }
                                        </a>
                                    </li>
                                })
                            }
                        </ul>
                    ):
                    (
                        <></>
                    )
                }
            </form>
        </>
    )
}

export default Upload


