import React from 'react';
import './Index.css';



function Cards(props) {



    return (


        <div className={"container"}>


            <div className={"carousel h-[280px] w-full relative ml-[5%] overflow-hidden"}>
                <div className={"carouselbox h-[280px] w-auto overflow-scroll text-center whitespace-nowrap flex pb-[10px] flex-row"}>

                    <div className={"indibox pb-[5px] pt-[5px] flex flex-col mt-[10px]"}>
                        <img src={"https://placehold.co/600x400?text=Hello\\nWorld"} className={"rounded-[12px]"}></img>
                        <p className={"text-[10px] justify-start flex text-white ml-[10px] w-[110px] overflow-hidden overflow-ellipsis"}>{props.serie}</p>
                        <p className={"text-[16px] justify-start flex text-white ml-[10px] font-bold w-[110px]  overflow-hidden overflow-ellipsis"}>{props.title}</p>
                        <p className={"text-[9px] justify-start flex text-white pt-[7px] ml-[10px] w-[110px] overflow-hidden overflow-ellipsis"}>{props.vadfuckduvill}</p>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Cards;