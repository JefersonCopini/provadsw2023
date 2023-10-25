export default function Banner() {
  return (
    <div className="text-white">
      <div className="text-center text-white">
        <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl">Paintings</h1>
        <img src="/img/banner.png" alt="" className="mx-auto mt-4 w-full md:w-3/4 lg:w-1/2 xl:w-1/3" />
        <div className="flex flex-col items-center mt-4">
        </div>
      </div>
      <div className="bg-[#4d4d4d] rounded-md pb-2 text-center">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex flex-col items-center">
            <img src="/img/settings.png" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, consequatur repellat quae optio molestiae laborum. Modi saepe, sequi cupiditate quam debitis fugit, nesciunt voluptas quod sint, ullam qui nemo amet.</p>
          </div>
          <div className="mt-4 md:mt-0 md:ml-4 flex flex-col items-center  p-4 rounded-md">
            <img src="/img/raio.png" alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi eaque atque dolore, nesciunt laboriosam excepturi aut laborum beatae sunt laudantium nostrum necessitatibus amet error culpa cupiditate illum in nisi aspernatur.</p>
          </div>
          <div className="mt-4 md:mt-0 md:ml-4 flex flex-col items-center  p-4 rounded-md">
            <img src="/img/star.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque non magnam doloribus rem. Quas, provident? Labore, doloremque totam minima nisi, voluptatum eligendi, possimus eaque neque consectetur ipsum.
            </p>
          </div>
        </div>
        <div className="mt-4">
          <a href="#" className="text-blue-500 border border-blue-500 rounded-md px-2 py-1 hover:underline">Get Started</a>
          <a href="#" className="hidden md:inline-block ml-2 text-blue-500 border border-blue-500 rounded-md px-2 py-1 hover:underline">Learn More</a>
        </div>
      </div>
    </div>
  );
}
