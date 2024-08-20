import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BlogPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoadig] = useState(true);
  const [error, setError] = useState(null);
  const [isClickedBlog, setIsClickedBlog] = useState(true);
  const [isClickedHome, setIsClickedHome] = useState(false);
  const apiKey = "66055c7291554132a34c38518651bba4";
  useEffect(() => {

    fetch(`https://newsapi.org/v2/everything?q=keyword&apiKey=${apiKey}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setArticles(data.articles);
        setLoadig(false);
      })
      .catch((error) => {
        setError(error.message)
        setLoading(false)
      })
  }, []);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

 

  const handleClickBlog = () => {
    setIsClickedBlog(true);
    setIsClickedHome(false);
  };
  const handleClickHome = () => {
    setIsClickedHome(true);
    setIsClickedBlog(false);
  };

  return (
    <>
      <header className="bg-bg-1">
        <div className="h-[170px] border-b border-grey mx-[128px] bg-bg-1 flex items-center justify-between">
          <a href="" className="flex items-center gap-x-[8px]">
            <div className="text-brand-1 H2-M">&lt;C/&gt;</div>
            <div className="H2-M text-white">GulAy</div>
          </a>
          <div className="flex items-center gap-x-[64px]">
            <div className="flex items-center gap-x-[32px]">
              <Link
                to="/"
                onClick={handleClickHome}
                className={`Menu-M hover:underline cursor-pointer ${
                  isClickedHome ? "text-brand-1" : "text-white"
                }`}
              >
                Home
              </Link>
              <Link
                to="/blogs"
                onClick={handleClickBlog}
                className={`Menu-M hover:underline cursor-pointer ${
                  isClickedBlog ? "text-brand-1" : "text-white"
                }`}
              >
                Blogs
              </Link>
            </div>
            <div className="flex gap-x-[3px] py-[16px] px-[6px] items-center bg-white w-[204px] h-[32px] rounded-[24px]">
              <input
                className="pl-[12px] outline-none w-[168px] bg-transparent"
                type="text"
              />
              <div className="w-[20px] h-[20px]">
                <img
                  className="w-full h-full object-cover"
                  src="src/assets/icon-search.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="Media-M flex gap-x-[32px] items-center">
              <a href="https://www.instagram.com/" className="flex gap-x-[8px]">
                <div className="text-brand-1 w-[20px] h-[20px]">
                  <img
                    className="w-full h-full object-cover"
                    src="src/assets/icon-instagram.svg"
                    alt=""
                  />
                </div>
                <div className="text-white">Instagram</div>
              </a>
              <a href="https://discord.com/" className="flex gap-x-[8px]">
                <div className="text-brand-1 w-[20px] h-[20px]">
                  <img
                    className="w-full h-full object-cover"
                    src="src/assets/discord.svg"
                    alt=""
                  />
                </div>
                <div className="text-white">Discord</div>
              </a>
              <a href="https://github.com/" className="flex gap-x-[8px]">
                <div className="text-brand-1 w-[20px] h-[20px]">
                  <img
                    className="w-full h-full object-cover"
                    src="src/assets/github.svg"
                    alt=""
                  />
                </div>
                <div className="text-white">GitHub</div>
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="p-[128px] bg-bg-1">
        <div className="flex flex-col justify-center">
          <div className="text-center H1-U text-brand-1 mb-[16px]">Blogs</div>
          <div className="mb-[11px] mx-auto mb-[16px] w-[159px] h-[12px]">
            <img
              className="w-full h-full object-cover"
              src="src/assets/line-22.svg"
              alt=""
            />
          </div>
          <div className="Media-M text-white text-center">
            My thoughts on technology and business, welcome to subscribe
          </div>
          <button className="inline-block mx-auto my-[64px] py-[16px] px-[32px] rounded-[32px] border-[2px] border-brand-1 bg-bg-1 text-white Button-U">
            Subscribe My Blogs
          </button>
        </div>
        <div className="bg-white w-full h-[1px]"></div>
        <div>
            {articles.map((article) => {
                return(
                    <div className="flex items-center gap-x-[64px] border-b-[1px] border-white py-[64px]">
                        <div className="size-[240px]">
                            <img
                            className="size-full object-cover"
                            src={`${article.urlToImage}`}
                            alt=""
                            />
                        </div>
                        <div className="py-[25px] flex flex-col gap-y-[24px]">
                            <div className="text-brand-1 H2-U">
                            What does it take to become a web developer?
                            </div>
                            <div className="text-white Media-M">
                            Web development, also known as website development,
                            encompasses a variety of tasks and processes involved in
                            creating websites for the internet…
                            </div>
                            <div className="text-brand-1 Media-M flex gap-x-[4px] items-center">
                            <div className="inline-block relative">
                                <Link to="/aBlog">Read More</Link>
                                <div className="bg-white h-[1px] w-full absolute -bottom-[4px]"></div>
                            </div>
                            <div>&gt;&gt;</div>
                            </div>
                            <div className="flex items-center gap-x-[24px]">
                            <div className="text-white bg-grey rounded-[16px] py-[4px] px-[8px]">
                                Web Developer
                            </div>
                            <div className="flex text-white items-center gap-x-[8px]">
                                <span className="Label-U-M">Text</span>
                                <span className="Label-U-L">GulAy</span>
                            </div>
                            <div className="flex text-white items-center gap-x-[8px]">
                                <span className="Label-U-M">Date</span>
                                <span className="Label-U-L">10.Oct 2023</span>
                            </div>
                            <div className="flex text-white items-center gap-x-[8px]">
                                <span className="Label-U-M">Read</span>
                                <span className="Label-U-L">1 Min</span>
                            </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
      </main>
      <footer className="bg-black pb-[16px]">
        <div className="bg-grey h-[1px] w-full mb-[16px]"></div>
        <div className="px-[128px] mx-auto Media-M flex justify-between items-center">
          <div className="text-white">
            © 2023 SinanTokmak. All rights reserved.
          </div>
          <div className="text-white flex items-center gap-x-[32px]">
            <div>Privacy Policy</div>
            <div>Terms & Conditions</div>
          </div>
          <div className="flex items-center gap-x-[32px]">
            <div className="size-[32px] p-[8px] rounded-full bg-brand-2">
              <img
                className="size-full object-cover"
                src="src/assets/icon-instagram-grey.svg"
                alt=""
              />
            </div>
            <div className="size-[32px] p-[8px] rounded-full bg-brand-2">
              <img
                className="size-full object-cover"
                src="src/assets/discord-grey.svg"
                alt=""
              />
            </div>
            <div className="size-[32px] p-[8px] rounded-full bg-brand-2">
              <img
                className="size-full object-cover"
                src="src/assets/github-grey.svg"
                alt=""
              />
            </div>
          </div>
          <div className="flex items-center gap-x-[4px]">
            <div className="text-white">Design By</div>
            <a
              className="text-brand-1"
              href="https://www.instagram.com/johannleon2025"
            >
              JohannLeon
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
