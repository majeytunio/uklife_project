// import { getPostBySlug } from "../../../lib/db" 
// import { notFound } from "next/navigation"
// import Image from "next/image"
// import Header from "../../../components/header"
// import { Calendar, User } from "lucide-react"
// import { formatDate, calculateReadingTime } from "../../../lib/utils" 

// export async function generateStaticParams() {
  
//   const { getPostsByCategory } = await import("../../../lib/db")
//   const posts = await getPostsByCategory("book-reviews", 100) 
//   return posts.map((post) => ({
//     slug: post.slug,
//   }))
// }

// export default async function BookReviewDetailPage({ params }) {
//   const { slug } = params
//   const post = await getPostBySlug("book-reviews", slug) 

//   if (!post) {
//     notFound()
//   }

//   return (
//     <div className="min-h-screen flex flex-col bg-background theme-book-reviews">
//       <Header />
//       <main className="flex-grow container mx-auto px-4 py-8 md:py-12 lg:py-16 max-w-3xl">
//         <article className="prose prose-lg mx-auto">
//           {post.featured_image && post.featured_image !== "/placeholder.png?height=400&width=600" && (
//             <div className="relative w-full h-64 md:h-80 lg:h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
//               <Image
//                 src={post.featured_image || "/placeholder.png"}
//                 alt={post.title}
//                 fill
//                 className="object-cover"
//                 priority
//               />
//             </div>
//           )}
//           <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{post.title}</h1>
//           <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
//             <div className="flex items-center gap-1">
//               <User className="h-4 w-4" />
//               <span>{post.author}</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <Calendar className="h-4 w-4" />
//               <span>{formatDate(post.published_at)}</span> {}
//             </div>
//             <div className="flex items-center gap-1">
//               <span>{calculateReadingTime(post.content)}</span> {}
//             </div>
//           </div>
//           <div dangerouslySetInnerHTML={{ __html: post.content }} />
//           {}
//           <p className="mt-8 text-muted-foreground">
//             This is a placeholder for the full post content. You would integrate Notion's block API here to render the
//             full page.
//           </p>
//           {post.notion_url && (
//             <p className="mt-4">
//               <a
//                 href={post.notion_url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-primary hover:underline"
//               >
//                 View on Notion
//               </a>
//             </p>
//           )}
//         </article>
//       </main>
//     </div>
//   )
// }









"use client"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Header from "../../../components/header"
import Image from "next/image"
import { formatDate, calculateReadingTime } from "../../../lib/utils"

import SafeImage from '../../../components/SafeImage'

export default function BookReviewDetailPage() {
  const params = useParams()
  const [post, setPost] = useState(null)

  const [imgSrc, setSrc] = useState(null);

  useEffect(() => {
    const savedPost = localStorage.getItem("selectedPost")
    if (savedPost) {
      setPost(JSON.parse(savedPost))

      setSrc(savedPost.featured_image);
    } else {
      // Optional: fallback fetch if no localStorage
    }
  }, [])


  const [imageError, setImageError] = useState(false);
  
  const handleImageError = () => {
    setImageError(true);
  };

  if (!post) {
    return <div className="min-h-screen flex items-center justify-center">Loading post...</div>
  }

  return (
    // <div className="min-h-screen bg-background theme-uk-life">
    <div className="min-h-screen flex flex-col bg-background theme-book-reviews">
      <Header />
      
      
      <div style={{paddingTop: '80px'}}>
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Cover Image Section */}
          <div className="w-full h-[300px] overflow-hidden bg-gray-100 relative">
            {post.featured_image && !imageError ? (
              <Image
                src={post.featured_image}
                alt={post.title}
                fill
                className="object-cover"
                onError={handleImageError}
                unoptimized={true}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
                <Image
                  src="/images/featured-image-placeholder.png"
                  alt={post.title}
                  width={200}
                  height={200}
                  className="opacity-50"
                />
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="mb-6">
              <h1 className="text-4xl font-serif font-bold text-gray-900 mb-3 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <span>{formatDate(post.published_at)}</span>
                <span>•</span>
                <span>{calculateReadingTime(post.excerpt)} min read</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              {post.excerpt && (
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              )}
              
              {/* Main content would go here */}
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
