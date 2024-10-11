export default function page() {
  return (
    <div className="w-full h-screen bg-background-theme flex items-center mt-16">
            <div className="w-full h-full flex items-center">
              <div className="text-2xl pl-4 bg-orange-200">
                  <div className="p-2 font-semibold text-black ">dashboard</div>

                  <div className="p-2 font-medium text-gray-800">Portfolios</div>
                  <div className="p-2 font-medium text-gray-800">Blogs</div>
                  <div className="p-2 font-medium text-gray-800">Works</div>
                  <div className="p-2 font-medium text-gray-800">Messages</div>
              </div>
              <div className="w-8 h-60 bg-white rounded-r-lg"></div>
            </div>
    </div>
  )
}
