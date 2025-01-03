import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { FaFacebookF} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";

const Footer = () => {

    const navigate = useNavigate() 
    const {userInfo} = useSelector(state => state.auth) 
    const {card_product_count,wishlist_count} = useSelector(state => state.card) 

    return (
        <footer className='bg-[#f3f6fa]'>
            <div className='w-[85%] flex flex-wrap mx-auto border-b py-16 md-lg:pb-10 sm:pb-6'>
                <div className='w-3/12 lg:w-4/12 sm:w-full'>
                    <div className='flex flex-col gap-3'>
                       
                        <ul className='flex flex-col gap-2 text-slate-600'>
                            <li>Địa chỉ: 365A Lạc Long, Quận 5, Phường 11</li>
                            <li>SDT: 0971016905</li>
                            <li>Email: khoitk14033@gmail.com</li>
                        </ul> 
                    </div> 
                </div>
                <div className='w-5/12 lg:w-8/12 sm:w-full'>
                    <div className='flex justify-center sm:justify-start sm:mt-6 w-full'>
                        <div>
                <h2 className='font-bold text-lg mb-2'>Liên kết </h2>
                <div className='flex justify-between gap-[80px] lg:gap-[40px]'>
                    <ul className='flex flex-col gap-2 text-slate-600 text-sm font-semibold'>
                        <li>
                            <Link>Giới thiệu về chúng tôi </Link>
                        </li>
                        <li>
                            <Link>Giới thiệu về shop </Link>
                        </li>
                        <li>
                            <Link>Thông tin vận chuyển </Link>
                        </li>
                       
                        <li>
                            <Link>Blog  </Link>
                        </li>
                    </ul>
                    <ul className='flex flex-col gap-2 text-slate-600 text-sm font-semibold'>
                        <li>
                            <Link>phục vụ khách hàng </Link>
                        </li>
                        <li>
                            <Link>Thông tin công ty</Link>
                        </li>
                        
                       
                        <li>
                            <Link>Blogs  </Link>
                        </li>
                    </ul>
                </div>
                        </div> 
                    </div> 
                </div>
            <div className='w-4/12 lg:w-full lg:mt-6'>
                <div className='w-full flex flex-col justify-start gap-5'>
                    <h2 className='font-bold text-lg mb-2'>Tham gia cửa hàng chúng tôi</h2>
                    <span>Nhận thông tin cập nhật qua Email về các chuyến tham quan mới nhất và các ưu đãi mua sắm đặc biệt</span>
                   
                     <ul className='flex justify-start items-center gap-3'>
                        <li>
                            <a className='w-[38px] h-[38px] hover:bg-[#059473] hover:text-white flex justify-center items-center bg-white rounded-full' href="#"><FaFacebookF/> </a>
                        </li>
                        <li>
                            <a className='w-[38px] h-[38px] hover:bg-[#059473] hover:text-white flex justify-center items-center bg-white rounded-full' href="#"><FaTwitter/> </a>
                        </li>
                        <li>
                            <a className='w-[38px] h-[38px] hover:bg-[#059473] hover:text-white flex justify-center items-center bg-white rounded-full' href="#"><FaLinkedin/> </a>
                        </li>
                        <li>
                            <a className='w-[38px] h-[38px] hover:bg-[#059473] hover:text-white flex justify-center items-center bg-white rounded-full' href="#"><FaGithub/> </a>
                        </li>
                     </ul>
                </div> 
            </div> 
            </div>
            <div className='w-[90%] flex flex-wrap justify-center items-center text-slate-600 mx-auto py-5 text-center'>
                <span>Trần Minh Khoi -2024</span>
            </div>


    <div className='hidden fixed md-lg:block w-[50px] h-[110px] bottom-3 right-2 bg-white rounded-full p-2'>
        <div className='w-full h-full flex gap-3 flex-col justify-center items-center'>
        <div onClick={() => navigate(userInfo ? '/card' : '/login') }  className='relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[#e2e2e2]'>
            <span className='text-xl text-green-500'><FaCartShopping/></span>
            {
                card_product_count !== 0 && <div className='w-[20px] h-[20px] absolute bg-red-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px]'>
                    {
                        card_product_count
                    }
                </div>
            }


        </div>

        <div  onClick={() => navigate(userInfo ? '/dashboard/my-wishlist' : '/login') } className='relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[#e2e2e2]'>
            <span className='text-xl text-green-500'><FaHeart/></span>
            {
                wishlist_count !== 0 && <div className='w-[20px] h-[20px] absolute bg-red-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px]'>
                    {
                       wishlist_count 
                    }
                </div>
            }

        </div>

        </div>
    </div>





        </footer>
    );
};
export default Footer;