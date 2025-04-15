import React from 'react'



const Card = (props) => {
  // console.log("props",typeof props);
  // console.log("types of number" ,typeof props.age); // number
  // console.log("typrs of myarray", typeof props.myarray , props.myarray);
//  console.log("type of boolean varible ",typeof props.boolean,props.boolean);//type of boolean varible  boolean true
console.log("type of array", props.myarray, typeof props.myarray); // type of array (3) [1, 2, 3] object

 
  return (
   <>
   {/* here parthisthis is object therefore props.username props.age  but in this time direct destrucute */}
    <div className="w-96  flex flex-col rounded-xl bg-black min-h-[19rem] ">
        <div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
            alt="test"
            className="object-cover object-center rounded-t-xl"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-10">
          <div className="flex justify-between ">
            <p className="font-bold ">Bored ape nft accidental</p>
            <br />
            <p>{props.username}</p>
            <p>{props.myarray}</p>
            <p>{props.boolean}</p>
            <br />
            <p>Price</p>
            
          </div>
          <div className="flex  justify-between">
            <p>#345</p>
            <p>{props.age}</p>
            <p>0.01</p>
          </div>
        </div>
      </div>
   </>
  )
}

export default Card