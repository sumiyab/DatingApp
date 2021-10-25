import Image from 'next/image'
import avatar from '../public/avatar.jpeg'

function SuggestCard(){
     
    return(
        <div>
            <div className='article_container' >
                <div>
                    <Image
                        src={avatar}
                        alt="Picture of the author"
                        width={100}
                        height={100}
                    />
                </div>
                <div className='text_container'>
                    <div >
                        <h3>Restaurant Name</h3>
                    </div>

                    <div className='text_container'>
                        <p>Reviews</p>
                    </div>
                </div>
                
            </div>
            <style jsx>{`
                .article_container{
                    display: flex;
                    flex: row;
                    border-radius:8px;
                    border:1px solid #dadce0;
                    padding: 5px;
                }
                .text_container{
                    display: flex;
                    flex-direction: column;
                    padding-left:10px;
                    
                }

            `}</style>
        </div>
    )
}

export default SuggestCard;