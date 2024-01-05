'use client'

import type {Post} from '@prisma/client'

export type PostProps = Post

export default function Posts({post}: {post: PostProps}){

    return (
        <div>
            <h2>
                {post.title}
                <p>{post.content}</p>
            </h2>
        </div>
    )

}