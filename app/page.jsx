import Link from "next/link"
import { Button } from "../components/ui/button"
import Header from "../components/header"

export default function HomePage() {
  return (
    
    <>

    <Header />

    {/* <div className="md:hidden py-4 border-t border-border/50 animate-in slide-in-from-top duration-200 max-h-[50vh] overflow-y-auto">
      <nav className="flex flex-col space-y-2">
        <Link
          href="/about"
          className="flex items-center space-x-2 px-3 py-2 rounded-lg text-foreground hover:text-primary hover:bg-muted transition-all duration-200"
        >
          <span className="font-medium">About Me</span>
        </Link>
      </nav>
    </div> */}
    
      {/* <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
        <h1 className="text-5xl font-bold mb-6 text-center">Welcome to Your Notion Blog</h1>
        <p className="text-xl text-center mb-8 max-w-2xl">
          This site dynamically displays content synced from your Notion database via Make.com webhooks.
        </p>
        <div className="flex space-x-4">
          <Button asChild>
            <Link href="/book-reviews">View Book Reviews</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/uklife">View UK Life Posts</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/notion-dashboard">Integration Dashboard</Link>
          </Button>
        </div>
        <footer className="absolute bottom-4 text-sm text-gray-500">Powered by Next.js, Notion, and Make.com</footer>
      </div> */}


      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-4">
        <h1 className="text-5xl font-bold text-center mb-4">
          Welcome to <span className="text-amber-800">yilungc</span>
        </h1>
        <p className="text-lg text-center text-gray-600 mb-10 max-w-xl">
          Choose your adventure: Dive into insightful book reviews or explore captivating UK life experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {/* Book Reviews Card */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-green-200 hover:shadow-lg transition duration-300 cursor-pointer">
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2M4 6h16M4 6v12M20 6v12M4 18h16" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-green-700 mb-2">Book Reviews</h2>
              <p className="text-gray-600 mb-4">Explore my thoughts on various books, from fiction to non-fiction.</p>
              <a href="/book-reviews" className="text-green-700 font-medium hover:underline">
                Start Reading →
              </a>
            </div>
          </div>

          {/* UK Life Card */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-rose-200 hover:shadow-lg transition duration-300 cursor-pointer">
            <div className="flex flex-col items-center text-center">
              <div className="bg-rose-100 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318C5.11 5.526 6.136 5 7.2 5c1.063 0 2.09.526 2.882 1.318L12 8.236l1.918-1.918C14.71 5.526 15.737 5 16.8 5c1.064 0 2.09.526 2.882 1.318A4.013 4.013 0 0121 9.2c0 1.063-.526 2.09-1.318 2.882L12 19.764l-7.682-7.682A4.013 4.013 0 013 9.2c0-1.063.526-2.09 1.318-2.882z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-rose-700 mb-2">UK Life</h2>
              <p className="text-gray-600 mb-4">Discover personal stories, travel experiences, and insights into UK life.</p>
              <a href="/uklife" className="text-rose-700 font-medium hover:underline">
                Start Exploring →
              </a>
            </div>
          </div>
        </div>
      </div>

      
      </>
  )
}
