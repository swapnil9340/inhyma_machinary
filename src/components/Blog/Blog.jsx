import React from 'react'
import BlogBanner from './BlogBanner'
import FeaturedPosts from './FeaturedPost'
import LatestBlogPosts from './LatestBlogPosts'
import NewsletterSubscription from './NewsLetterSubscription'

const Blog = () => {
  return (
    <>
  <BlogBanner/>
  <FeaturedPosts/>
  <LatestBlogPosts/>
  <NewsletterSubscription/>
  </>
  )
}

export default Blog