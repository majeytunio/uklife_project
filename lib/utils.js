import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString) {
  if (!dateString) return "N/A"
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  } catch (error) {
    console.error("Error formatting date:", error)
    return "Invalid Date"
  }
}

export function calculateReadingTime(content) {
  if (!content) return "0 min read"
  const wordsPerMinute = 200 
  const textContent = content.replace(/<[^>]*>/g, "") 
  const wordCount = textContent.split(/\s+/).length
  const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute)
  return `${readingTimeMinutes} min read`
}

// export function generateSlug(title) {
//   return title
//     .toLowerCase()
//     .replace(/[^a-z0-9\s-]/g, "") 
//     .trim()
//     .replace(/\s+/g, "-") 
//     .replace(/-+/g, "-") 
// }

export function generateSlug(title) {
  return title
    .toLowerCase()
    .normalize("NFKD") // Normalize Unicode characters
    .replace(/[^\p{L}\p{N}\s-]/gu, "") // Allow Unicode letters/numbers
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}


// export function removeChinese(title) {
//   const titleFinal = title
//     .replace(/[\u4e00-\u9fff]/g, '');
//     // .replace(/[^\x00-\x7F ]/g, "")         // Remove non-ASCII (e.g. Chinese) BUT keep spaces

//   // console.log("Process Category: ", titleFinal);
  
//   return titleFinal;
// }


export function removeChinese(str) {
  return str
    .replace(/[\u4e00-\u9fff]/g, '') // Remove Chinese chars
    .replace(/\s+/g, ' ')            // Collapse multiple spaces into one
    .trim()
    .toLowerCase()
    ;                         // Remove leading/trailing spaces
}


export function extractPageId(notionUrl) {
  if (!notionUrl) return null
  
  const match = notionUrl.match(/([a-f0-9]{32})$/)
  if (match && match[1]) {
    return match[1]
  }
  
  const uuidMatch = notionUrl.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/)
  if (uuidMatch && uuidMatch[0]) {
    return uuidMatch[0].replace(/-/g, "") 
  }
  return null
}
