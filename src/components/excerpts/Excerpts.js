import './Excerpts.css'
import {useState} from 'react'

import photo1 from '../../assets/photos/excerpts (11).jpg'
import photo2 from '../../assets/photos/excerpts (1).jpg'
import photo3 from '../../assets/photos/excerpts (2).jpg'
import photo4 from '../../assets/photos/excerpts (3).jpg'
import photo5 from '../../assets/photos/excerpts (4).jpg'
import photo6 from '../../assets/photos/excerpts (5).jpg'
import photo7 from '../../assets/photos/excerpts (6).jpg'
import photo8 from '../../assets/photos/excerpts (7).jpg'
import photo9 from '../../assets/photos/excerpts (8).jpg'
import photo10 from '../../assets/photos/excerpts (9).jpg'
import photo11 from '../../assets/photos/excerpts (10).jpg'

function Excerpts(){
    const contents = ['Front Cover','Table of Contents','Cave Description','Chapter Intros','History','Photo Essay','Geology','Speleogenesis','Flora and Fauna','Bats','Back Cover']
    const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11]
    const [page,setPage] = useState(0)
    const Contents = ()=>{
        return(
            <div id='contentsContainer'>
                {contents.map((content,index)=>{
                  return (<button className={page===index?"active":""} onClick={()=>setPage(index)}>{content}</button>)
                })}
            </div>
        )
    }
    const Pages = ()=>{
        return(
            <div id='pagesContainer'>
                {photos.map((photo,i)=>{
                    return(<img src={photo} className={page===i?"page":"hidden"}></img>)
                })}
            </div>
        )
    }
    return(
        <div id='excerptsContainer'>
            <Pages/>
            <Contents/>
        </div>
    )
}

export default Excerpts