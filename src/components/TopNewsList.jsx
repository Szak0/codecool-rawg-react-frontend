import React, { useContext } from 'react'
import { TopNewsContext } from './contexts/TopNewsContext'

const TopNewsList = () => {
    const [articles] = useContext(TopNewsContext)

    return (
        <div>
            {articles.map((article, i) => (
                <div>

                    <div>
                        <h1>{article.title}</h1>
                    </div>
                    <span key={article.author + i} >{article.author}</span>
                    <span>{article.content}</span>
                    <div>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default TopNewsList
