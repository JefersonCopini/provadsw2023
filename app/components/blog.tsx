export default function Blog() {
  return (
    <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 text-white">
      <div className="md:col-span-2 lg:col-span-3 mt-4 text-white text-center">
        <h1 className="text-center">O blog</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam suscipit necessitatibus alias pariatur deserunt sapiente sunt fuga unde facere debitis, explicabo voluptatem quam omnis rerum asperiores, exercitationem itaque nisi accusantium.
        </p>
      </div>
      <div className="bg-[#4d4d4d] rounded-md pb-2">
        <a href="#" className="flex flex-col items-center">
          <a href="#">
            <img className="w-full h-auto mx-auto" src="/img/pic08.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque similique corporis illum exercitationem autem repudiandae ducimus neque id dignissimos, inventore soluta delectus ut maiores. Consectetur beatae odit molestiae est dolorum!
            </p>
            <div className=" text-center mt-2 md: flex flex-col space-y-2">
              <a href="#" className="text-blue-500 border border-blue-500 rounded-md px-2 py-1 hover:underline mb-2 md:mb-0 md:mr-2">Continue reading</a>
              <a href="#" className="text-blue-500 border border-blue-500 rounded-md px-2 py-1 hover:underline">Comments (33)</a>
            </div>
          </a>
        </a>
      </div>
      <div className="bg-[#4d4d4d] rounded-md pb-2">
        <a href="#" className="flex flex-col items-center">
          <a href="#">
            <img className="w-full h-auto mx-auto" src="/img/pic09.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam excepturi facere sed inventore! Error dolorem suscipit, nobis odit ad nostrum vitae autem, necessitatibus tempora modi, quaerat ipsam delectus perferendis nihil.
            </p>
            <div className="text-center mt-2 md: flex flex-col space-y-2">
              <a href="#" className="text-blue-500 border border-blue-500 rounded-md px-2 py-1 hover:underline mb-2 md:mb-0 md:ml-2">Continue reading</a>
              <a href="#" className="text-blue-500 border border-blue-500 rounded-md px-2 py-1 hover:underline">Comments (33)</a>
            </div>
          </a>
        </a>
      </div>
    </main>
  );
}
