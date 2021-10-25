

function Article({title, data, image}){
     
    return(
        <div>
            <div className='article_container' >
                <div className="article">
                    <a className="link">{title}</a>
                    <span>{data}</span>
                </div>
            </div>


            <style jsx>{`
                .article_container{
                    max-height: 150px;
                    margin: 0 auto;
                    width: 45%;
                    overflow: auto;
                    margin-top:15px;
                    border-color: #5f6368;
                    border:1px solid #dadce0;
                    border-radius: 8px;
                }
                .article{
                    display: flex;
                    align-items:center;
                    flex-direction: column;
                    padding: 0 0.5rem;
                }
                .link{
                    cursor: pointer;
                    font-size: 22px;
                    padding: 10px 0 10px 0;
                }
                a:hover{
                    text-decoration:underline;
                }

            `}</style>
        </div>
    )
}

export default Article;