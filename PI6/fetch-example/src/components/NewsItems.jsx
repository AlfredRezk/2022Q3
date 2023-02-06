import React, {useEffect, useState} from 'react'
import { getNews } from '../service';
import NewsCard from './NewsCard';

const NewsItems = () => {
    const [news, setNews]= useState([])

    useEffect(()=>{
        getNews().then(res => {
            console.log(res)
            setNews(res)
        })
    }, [])


    const deleteHandler = (title)=>{
        setNews(prev=> prev.filter(n=> n.title != title))
    }




  return (
   <div className="row">
    {news.map( n=> <NewsCard key={n.publishedAt} article={n} onDelete={deleteHandler}/>)}
   </div>
  )
}

export default NewsItems