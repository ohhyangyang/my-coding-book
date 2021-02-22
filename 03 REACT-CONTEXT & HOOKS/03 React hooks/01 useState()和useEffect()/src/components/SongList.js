import React, { useState,useEffect } from "react";
import { v1 as uuidv1 } from 'uuid';
import NewSongForm from "./NewSongForm";

/*
⚠️⚠️
- uuid  可以为数据生成为唯一的id
   输入 npm install uuid
*/

export default function SongList() {
  /*
  ⚠️⚠️⚠️
  useState()返回值  一个数组--> [actual data , fn]
         actual data: 储存进的state数据
         fn: 可以操作actual data的函数
  */

  //⚠️⚠️创建songs state
  const [songs, setSongs] = useState([
    { title: "almost home", id: 1 },
    { title: "memory gospel", id: 2 },
    { title: "this wild darkness", id: 3 },
  ]);
  
  const [age,setAge]=useState(20)

  //⚠️⚠️修改songs
  const addSong = (title) => {
    //使用setSongs函数，传递进的参数为新的state数组
    setSongs([...songs, { title: title, id: uuidv1() }]);
  };
  
  /*
    useEffect(callback [, [目标data] ]) 
  ⚠️⚠️⚠️ 在不传递第二个参数的情况下，每一次页面渲染或者有任何data更新时都会执行callback
        如果想要在指定data更新时才执行，需要在callback后传递第二个参数
     
  */
  
  //⚠️⚠️ songs和age更新时都会执行
  useEffect(()=>{
    console.log('useEffect ran for songs and age',songs,age)
  })

  //⚠️⚠️ songs更新时会执行
  useEffect(()=>{
    console.log('useEffect ran for songs',songs)
  },[songs])

  //⚠️⚠️ age更新时会执行
  useEffect(()=>{
    console.log('useEffect ran for songs',age)
  },[age])



  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong}/>

      <button onClick={()=>setAge(age+1)}>One year older : {age}</button>
    </div>
  );
}
