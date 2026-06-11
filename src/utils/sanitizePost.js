import React from 'react'

export const sanitizePost = (post) => ({
        $id: post.$id,
        title: post.title,
        content: post.content,
        slug: post.slug,
        featuredImage: post.featuredImage,
        status: post.status,
        userId: post.userId,
});
