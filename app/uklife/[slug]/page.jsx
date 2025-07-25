// // // import { getPostBySlug } from "../../../lib/db" // Corrected import
// // // import { notFound } from "next/navigation"
// // // import Image from "next/image"
// // // import Header from "../../../components/header"
// // // import { Calendar, User } from "lucide-react"
// // // import { formatDate, calculateReadingTime } from "../../../lib/utils" // Corrected import

// // // export async function generateStaticParams() {
// // //   // This function is still needed for static generation, but it will fetch all relevant slugs
// // //   // For simplicity, we'll fetch all posts and map their slugs.
// // //   // In a very large database, you might need a more optimized approach.
// // //   const { getPostsByCategory } = await import("../../../lib/db")
// // //   const posts = await getPostsByCategory("uklife", 100) // Fetch more posts for static generation
// // //   return posts.map((post) => ({
// // //     slug: post.slug,
// // //   }))
// // // }

// // // export default async function UKLifeDetailPage({ params }) {
// // //   const { slug } = params
// // //   const post = await getPostBySlug("uklife", slug) // Use the new getPostBySlug

// // //   if (!post) {
// // //     notFound()
// // //   }

// // //   return (
// // //     <div className="min-h-screen flex flex-col bg-background theme-uk-life">
// // //       <Header />
// // //       <main className="flex-grow container mx-auto px-4 py-8 md:py-12 lg:py-16 max-w-3xl">
// // //         <article className="prose prose-lg mx-auto">
// // //           {post.featured_image && post.featured_image !== "/placeholder.png?height=400&width=600" && (
// // //             <div className="relative w-full h-64 md:h-80 lg:h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
// // //               <Image
// // //                 src={post.featured_image || "/placeholder.png"}
// // //                 alt={post.title}
// // //                 fill
// // //                 className="object-cover"
// // //                 priority
// // //               />
// // //             </div>
// // //           )}
// // //           <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{post.title}</h1>
// // //           <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
// // //             <div className="flex items-center gap-1">
// // //               <User className="h-4 w-4" />
// // //               <span>{post.author}</span>
// // //             </div>
// // //             <div className="flex items-center gap-1">
// // //               <Calendar className="h-4 w-4" />
// // //               <span>{formatDate(post.published_at)}</span> {/* Use formatDate */}
// // //             </div>
// // //             <div className="flex items-center gap-1">
// // //               <span>{calculateReadingTime(post.content)}</span> {/* Use calculateReadingTime */}
// // //             </div>
// // //           </div>
// // //           <div dangerouslySetInnerHTML={{ __html: post.content }} />
// // //           {/* You would typically fetch the full Notion page content here using Notion API */}
// // //           <p className="mt-8 text-muted-foreground">
// // //             This is a placeholder for the full post content. You would integrate Notion's block API here to render the
// // //             full page.
// // //           </p>
// // //           {post.notion_url && (
// // //             <p className="mt-4">
// // //               <a
// // //                 href={post.notion_url}
// // //                 target="_blank"
// // //                 rel="noopener noreferrer"
// // //                 className="text-primary hover:underline"
// // //               >
// // //                 View on Notion
// // //               </a>
// // //             </p>
// // //           )}
// // //         </article>
// // //       </main>
// // //     </div>
// // //   )
// // // }






// // // app/uklife/[slug]/page.jsx
// // import { notFound } from "next/navigation"
// // import Header from "../../../components/header"
// // import { Calendar, User, Clock } from "lucide-react"
// // import { formatDate, calculateReadingTime } from "../../../lib/utils"
// // import Image from "next/image"

// // export default async function UKLifeDetailPage({ params, searchParams }) {
  

// //   return (
// //     <div className="min-h-screen flex flex-col bg-background theme-uk-life">
// //       <Header />

// //     </div>
// //   )
// // }







// "use client"
// import { useEffect, useState } from "react"
// import { useParams } from "next/navigation"
// import Header from "../../../components/header"
// import Image from "next/image"
// import { formatDate, calculateReadingTime } from "../../../lib/utils"

// import SafeImage from '../../../components/SafeImage'

// export default function UKLifeDetailPage() {
//   const params = useParams()
//   const [post, setPost] = useState(null)

//   const [imgSrc, setSrc] = useState(null);

//   useEffect(() => {
//     const savedPost = localStorage.getItem("selectedPost")
//     if (savedPost) {
//       setPost(JSON.parse(savedPost))

//       setSrc(savedPost.featured_image);
//     } else {
//       // Optional: fallback fetch if no localStorage
//     }
//   }, [])


//   const [imageError, setImageError] = useState(false);
  
//   const handleImageError = () => {
//     setImageError(true);
//   };

//   if (!post) {
//     return <div className="min-h-screen flex items-center justify-center">Loading post...</div>
//   }

//   return (
//     <div className="min-h-screen bg-background theme-uk-life">
//       <Header />
      
      
//       <div style={{paddingTop: '80px'}}>
//         <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//           {/* Cover Image Section */}
//           <div className="w-full h-[300px] overflow-hidden bg-gray-100 relative">
//             {post.featured_image && !imageError ? (
//               <Image
//                 src={post.featured_image}
//                 alt={post.title}
//                 fill
//                 className="object-cover"
//                 onError={handleImageError}
//                 unoptimized={true}
//               />
//             ) : (
//               <div className="w-full h-full bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
//                 <Image
//                   src="/images/featured-image-placeholder.png"
//                   alt={post.title}
//                   width={200}
//                   height={200}
//                   className="opacity-50"
//                 />
//               </div>
//             )}
//           </div>

//           {/* Content Section */}
//           <div className="p-8">
//             <div className="mb-6">
//               <h1 className="text-4xl font-serif font-bold text-gray-900 mb-3 leading-tight">
//                 {post.title}
//               </h1>
//               <div className="flex items-center text-sm text-gray-500 space-x-4">
//                 <span>{formatDate(post.published_at)}</span>
//                 <span>•</span>
//                 <span>{calculateReadingTime(post.excerpt)} min read</span>
//               </div>
//             </div>

//             <div className="prose prose-lg max-w-none text-gray-700">
//               {post.excerpt && (
//                 <p className="text-xl text-gray-600 leading-relaxed mb-6">
//                   {post.excerpt}
//                 </p>
//               )}
              
//               {/* Main content would go here */}
//               <div dangerouslySetInnerHTML={{ __html: post.content }} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }














"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Header from "../../../components/header"
import Image from "next/image"
import { richTextToHTML, formatDate, calculateReadingTime } from "../../../lib/utils"

import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export default function UKLifeDetailPage() {
  const params = useParams()
  const slug = params.slug

  const [post, setPost] = useState(null)
  const [contentMarkdown, setContentMarkdown] = useState("")
  const [loading, setLoading] = useState(true)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    if (!slug) return

    async function fetchPost() {
      try {
        const res = await fetch(`/api/posts/uklife/${slug}`)
        const data = await res.json()

        if (data.success && data.data.page) {
          const page = data.data.page
          const blocks = data.data.blocks || []

          // Extract title safely:
          const title =
            page.properties?.["Post name"]?.title?.[0]?.plain_text ||
            "Untitled post"

          // Extract featured image URL from Photo URL property or page cover:
          const featured_image =
            page.properties?.["Photo URL"]?.url ||
            page.cover?.file?.url ||
            page.cover?.external?.url ||
            null

          // Excerpt text (optional)
          const excerpt =
            page.properties?.Excerpt?.rich_text?.[0]?.plain_text || ""

          // Published date (fallback to created_time)
          const published_at =
            page.properties?.["Post date original"]?.date?.start ||
            page.created_time

          // Extract content markdown by concatenating all paragraph blocks text:
          let fullContent = ""
          blocks.forEach((block) => {
            if (block.type === "paragraph") {
              const texts = block.paragraph.rich_text || []
              texts.forEach((txt) => {
                // fullContent += txt.plain_text + "\n\n"
                fullContent += richTextToHTML(texts) + "\n\n";
              })
            }
            // You can extend here to support other block types if needed.
          })

          setPost({
            title,
            featured_image,
            excerpt,
            published_at,
          })
          setContentMarkdown(fullContent.trim())
        } else {
          setPost(null)
        }
      } catch (err) {
        console.error("Failed to fetch post:", err)
        setPost(null)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [slug])

  const handleImageError = () => setImageError(true)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div class="flex items-center justify-center w-56 h-56 rounded-lg">
            <div class="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</div>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Post not found
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background theme-uk-life">
      <Header />
      <div style={{ paddingTop: "80px" }}>
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
                <span>{calculateReadingTime(contentMarkdown)} min read</span>
              </div>
            </div>

            {/* <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-wrap">
              {post.excerpt && (
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              )}
              {contentMarkdown}
            </div> */}

            <div className="prose prose-lg max-w-none text-gray-700">
              {post.excerpt && (
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              )}

              <ReactMarkdown
                children={contentMarkdown}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
              />

              {/* <ReactMarkdown>{contentMarkdown}</ReactMarkdown> */}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
