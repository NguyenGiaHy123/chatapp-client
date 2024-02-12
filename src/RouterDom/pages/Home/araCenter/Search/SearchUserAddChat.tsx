import React, { FunctionComponent, useEffect, useState } from 'react'

import axios from 'axios';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import {message,notification} from 'antd'
import ChatLoading from './SeachLoadingUser';
import { useDispatch, useSelector } from 'react-redux';
import { userSeach } from '../../../../../feature/user/pathApi';
import { IUser } from '../../../../../Type';
interface IUserdemo {
    id: string;
    name: string;
    email: string;
    phone:string,
    avatar:string
  
  }
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
export const SearchUserAddChat: FunctionComponent<any> = ({searchValue }) => {

    // alert(searchValue)
     const [Loading,setLoading]=useState(false)
     // lay cai mang userSlide
     const ListUsers = useSelector((state: any) => state.Users.UserSlice);
     const [datasearchDemo,setDatasearchDemo]=useState<IUserdemo[]>([])

     //tao du lieu mau
     
     const userdemoserach:IUserdemo[]=[
    {
        id:"65a4aa4dc2f43ffc23ef4c16",
        name:'Lê Văn Hà',
        phone:'0987654321',
        email:'lon33g@gmail.com',
        avatar:'https://meliawedding.com.vn/wp-content/uploads/2022/03/hinh-anh-nguoi-mau-lam-hinh-nen-dien-thoai-45-576x1024.jpg'
     },
     {
        id:"65a4abaac2f43ffc23ef4c18",
        name:'kuga',
        phone:'0234234',
        email:'lon31g@gmail.com',
        avatar:'https://i.pinimg.com/736x/ab/9b/8e/ab9b8eba794b06640b13805aba65cbd2.jpg'
     },
     {
        id:"65a4ac2ccd6716d6b33286c5",
        name:'hy',
        phone:'0399432231',
        email:'lon33g@gmail.com',
        avatar:'https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/05/08/kimoanh-856-1620472406458.jpeg'
     },
     {
        id:"65ae380b966692ca03c0bc3e",
        name:'lqp',
        phone:'0922654321',
        email:'lqp33@gmail.com',
        avatar:'https://i.pinimg.com/736x/ab/9b/8e/ab9b8eba794b06640b13805aba65cbd2.jpg'
     },
    ]
    const AddUserChat=(value:any)=>{
        notification.success({message:'Thêm bạn thành công'})
    }
 
     const dispatch = useDispatch();
     useEffect(()=>{
        if(searchValue){
            setLoading(true)
            let result=userdemoserach.filter((item)=>{return item.name.toLowerCase().includes(searchValue.toLowerCase())})
            setTimeout(()=>{
                setLoading(false)
                setDatasearchDemo(result)
            },500)
        }


        // if(searchValue){
        //     dispatch<any>(userSeach({name: searchValue }));
        // }
     },[searchValue])

    return (
        <div className='bg-white h-full w-full'>
            <p className='font-medium text-sm mt-2 mb-2'>Tìm gần đây </p>
            {Loading ? <ChatLoading /> :
             <div className='flex flex-col gap-5'>
                {datasearchDemo.length===0 ? <p className='text-center text-sm'>Không tìm thấy kết quả nào</p>:
                 <>
                    {datasearchDemo.map((value: any, index) => (<>
                                                <div className='flex gap-3 items-center hover:bg-gray-100 p-1 cursor-pointer'>
                                                    <img src={`${value ? value.avatar : ""}`} className='w-12 h-12 rounded-full' />
                                                    <div className='flex flex-col flex-1 '>
                                                        <p>{value.name}</p>
                                                        <p className='text-sm'>email: <span className='text-blue-400'>{value.email}</span></p>
                                                    </div>
                                                    <p className=' rounded-full text-sm  px-2 cursor-pointer border border-blue-300 text-blue-400 py-1 hover:bg-blue-50' onClick={()=>AddUserChat(value)}>  Add friend Chat </p>
                                                
                                                </div>
                                            
                                            </>))}
                                            {Loading && <Spin indicator={antIcon} className='text-white mr-3' />}
                                    </>
                }
                       
                    </div>                 
              
            }

        </div>
    )
}

export default SearchUserAddChat