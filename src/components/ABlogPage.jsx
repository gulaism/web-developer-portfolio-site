import { useState } from "react";
import { Link } from "react-router-dom";

export default function ABlogPage() {
    
    const [isClickedBlog, setIsClickedBlog] = useState(false);
    const [isClickedHome, setIsClickedHome] = useState(true);

    const handleClickBlog = () => {
        setIsClickedBlog(true);
        setIsClickedHome(false);
    }
    const handleClickHome = () => {
        setIsClickedHome(true);
        setIsClickedBlog(false);
    }
    
    return <>
            <header className="bg-bg-1">
                <div className="h-[170px] border-b border-grey mx-[128px] bg-bg-1 flex items-center justify-between">
                    <a href="" className="flex items-center gap-x-[8px]">
                        <div className="text-brand-1 H2-M">&lt;C/&gt;</div>
                        <div className="H2-M text-white">GulAy</div>
                    </a>
                    <div className="flex items-center gap-x-[64px]">
                        <div className="flex items-center gap-x-[32px]">
                            <Link to="/" onClick={handleClickHome} className={`Menu-M hover:underline cursor-pointer ${isClickedHome ? 'text-brand-1' : 'text-white'}`}>Home</Link>
                            <Link to="/blogs" onClick={handleClickBlog} className={`Menu-M hover:underline cursor-pointer ${isClickedBlog ? 'text-brand-1' : 'text-white'}`}>Blogs</Link>
                        </div>
                        <div className="flex gap-x-[3px] py-[16px] px-[6px] items-center bg-white w-[204px] h-[32px] rounded-[24px]">
                            <input className="pl-[12px] outline-none w-[168px] bg-transparent"  type="text" />
                            <div className="w-[20px] h-[20px]"><img className="w-full h-full object-cover" src="src/assets/icon-search.svg" alt="" /></div>
                        </div>
                        <div className="Media-M flex gap-x-[32px] items-center">
                            <a href="https://www.instagram.com" className="flex gap-x-[8px]">
                                <div className="text-brand-1 w-[20px] h-[20px]"><img className="w-full h-full object-cover" src="src/assets/icon-instagram.svg" alt="" /></div>
                                <div className="text-white">Instagram</div>
                            </a>
                            <a href="https://discord.com" className="flex gap-x-[8px]">
                                <div className="text-brand-1 w-[20px] h-[20px]"><img className="w-full h-full object-cover" src="src/assets/discord.svg" alt="" /></div>
                                <div className="text-white">Discord</div>
                            </a>
                            <a href="https://github.com" className="flex gap-x-[8px]">
                                <div className="text-brand-1 w-[20px] h-[20px]"><img className="w-full h-full object-cover" src="src/assets/github.svg" alt="" /></div>
                                <div className="text-white">GitHub</div>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <main className="bg-bg-1">
                <div className="p-[128px] w-[720px] mx-auto">
                    <div className="text-brand-1 H2-U">What does it take to become a web developer?</div>
                    <div className="my-[32px] border-y border-grey py-[16px] px-[24px] flex items-center justify-between">
                        <div className="text-white flex items-center gap-x-[24px]">
                            <div className="flex items-center gap-x-[8px]">
                                <div className="Lable-U-M">Text</div>
                                <div className="Lable-U-L">GulAy</div>
                            </div>
                            <div className="flex items-center gap-x-[8px]">
                                <div className="Lable-U-M">Date</div>
                                <div className="Lable-U-L">10.Oct 2023</div>
                            </div>
                            <div className="flex items-center gap-x-[8px]">
                                <div className="Lable-U-M">Read</div>
                                <div className="Lable-U-L">1 Min</div>
                            </div>
                        </div>
                        <button className="size-[32px] p-[8px] rounded-full bg-brand-2"><img src="src/assets/icon-share.svg" alt="" /></button>
                    </div>
                    <div className="w-full h-[400px]"><img className="size-full object-cover" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_human_computer_interaction.jpg" alt="" /></div>
                    <div className="w-full my-[32px] text-white Article-U">
                        Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet. It involves various specialized fields, each with its own set of skills and techniques. While some individuals might view web development as a holistic process, it can be broken down into several key areas that are essential for building a functional and visually appealing website. Frontend Development: Frontend development focuses on the user-facing aspects of a website. It involves creating the visual elements that users interact with directly. Frontend developers use a combination of languages such as HTML, CSS, and JavaScript to build and style the layout, design, and interactivity of the website. They need to have a strong understanding of user experience (UX) and user interface (UI) design to ensure that the website is both aesthetically pleasing and user-friendly. Backend Development: Backend development involves the behind-the-scenes functionality of a website. It includes server-side scripting, databases, and the logic that operates behind the scenes to ensure that the frontend works smoothly. Backend developers work with programming languages such as Ruby, Python, PHP, and Java, and frameworks such as Node.js, Django, and Laravel. They are responsible for building and maintaining the server, application, and database that power the website. DevOps (Development and Operations): DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). DevOps professionals work to shorten the systems development life cycle and provide continuous delivery with high software quality. They utilize various tools to automate the software development process, including coding, building, testing, and deployment. DevOps engineers often work closely with both frontend and backend developers to ensure a smooth and efficient development and deployment process. Design: Design is a crucial aspect of web development that focuses on creating visually appealing and intuitive interfaces. Web designers use their creative skills to develop the overall look and feel of a website. They work with graphic design tools and software to create layouts, color schemes, typography, and other visual elements that contribute to the overall user experience. Good design is essential for attracting and retaining users on a website. Understanding and mastering these four key areas of web development can open up numerous career opportunities in the ever-evolving field of technology. It is important for web developers to stay updated with the latest trends and technologies and continuously enhance their skills to build innovative and high-quality websites that meet the needs of modern users.
                    </div>
                    <div className="text-white Label-U-L gap-x-[24px] flex items-center">
                        <button className="bg-grey py-[4px] px-[8px] rounded-[16px]">Web Developer</button>
                        <button className="bg-grey py-[4px] px-[8px] rounded-[16px]">Web Developer Job</button>
                        <button className="bg-grey py-[4px] px-[8px] rounded-[16px]">Web Development</button>
                    </div>
                    <div className="my-[32px] border-y border-grey py-[16px] px-[24px] flex items-center justify-between">
                        <div className="text-white flex items-center gap-x-[24px]">
                            <div className="flex items-center gap-x-[8px]">
                                <div className="Lable-U-M">Text</div>
                                <div className="Lable-U-L">GulAy</div>
                            </div>
                            <div className="flex items-center gap-x-[8px]">
                                <div className="Lable-U-M">Date</div>
                                <div className="Lable-U-L">10.Oct 2023</div>
                            </div>
                            <div className="flex items-center gap-x-[8px]">
                                <div className="Lable-U-M">Read</div>
                                <div className="Lable-U-L">1 Min</div>
                            </div>
                        </div>
                        <button className="size-[32px] p-[8px] rounded-full bg-brand-2"><img src="src/assets/icon-share.svg" alt="" /></button>
                    </div>
                    <div className="flex justify-center"><button className="border-[2px] rounded-[32px] border-brand-1 py-[16px] px-[32px] text-white Button-U">Subscribe My Blogs</button></div>
                </div>
                <div className="p-[128px] mx-auto">
                    <div className="mb-[64px] text-center text-brand-1 H1-U">You Might Also Like</div>
                    <div>
                        <div className="flex items-center gap-x-[64px] border-b-[1px] border-white py-[64px]">
                            <div className="size-[240px]"><img className="size-full object-cover" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_human_computer_interaction.jpg" alt="" /></div>
                            <div className="py-[25px] flex flex-col gap-y-[24px]">
                                <div className="text-brand-1 H2-U">What does it take to become a web developer?</div>
                                <div className="text-white Media-M">Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet…</div>
                                <div className="text-brand-1 Media-M flex gap-x-[4px] items-center">
                                    <div className="inline-block relative">
                                        <a className="Media-M" href="">Read More</a>
                                        <div className="bg-white h-[1px] w-full absolute -bottom-[4px]"></div>
                                    </div>
                                    <div>&gt;&gt;</div>
                                </div>
                                <div className="flex items-center gap-x-[24px]">
                                    <div className="text-white bg-grey rounded-[16px] py-[4px] px-[8px]">Web Developer</div>
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

                        <div className="flex items-center gap-x-[64px] border-b-[1px] border-white py-[64px]">
                            <div className="size-[240px]"><img className="size-full object-cover" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_human_computer_interaction.jpg" alt="" /></div>
                            <div className="py-[25px] flex flex-col gap-y-[24px]">
                                <div className="text-brand-1 H2-U">What does it take to become a web developer?</div>
                                <div className="text-white Media-M">Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet…</div>
                                <div className="text-brand-1 Media-M flex gap-x-[4px] items-center">
                                    <div className="inline-block relative">
                                        <a href="www.google.com">Read More</a>
                                        <div className="bg-white h-[1px] w-full absolute -bottom-[4px]"></div>
                                    </div>
                                    <div>&gt;&gt;</div>
                                </div>
                                <div className="flex items-center gap-x-[24px]">
                                    <div className="text-white bg-grey rounded-[16px] py-[4px] px-[8px]">Web Developer</div>
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

                        <div className="flex items-center gap-x-[64px] border-b-[1px] border-white py-[64px]">
                            <div className="size-[240px]"><img className="size-full object-cover" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_human_computer_interaction.jpg" alt="" /></div>
                            <div className="py-[25px] flex flex-col gap-y-[24px]">
                                <div className="text-brand-1 H2-U">What does it take to become a web developer?</div>
                                <div className="text-white Media-M">Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet…</div>
                                <div className="text-brand-1 Media-M flex gap-x-[4px] items-center">
                                    <div className="inline-block relative">
                                        <a href="www.google.com">Read More</a>
                                        <div className="bg-white h-[1px] w-full absolute -bottom-[4px]"></div>
                                    </div>
                                    <div>&gt;&gt;</div>
                                </div>
                                <div className="flex items-center gap-x-[24px]">
                                    <div className="text-white bg-grey rounded-[16px] py-[4px] px-[8px]">Web Developer</div>
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
                    </div>
                </div>
            </main>
            <footer className="bg-black pb-[16px]">
                <div className="bg-grey h-[1px] w-full mb-[16px]"></div>
                <div className="px-[128px] mx-auto Media-M flex justify-between items-center">
                    <div className="text-white">© 2023 SinanTokmak. All rights reserved.</div>
                    <div className="text-white flex items-center gap-x-[32px]">
                        <div>Privacy Policy</div>
                        <div>Terms & Conditions</div>
                    </div>
                    <div className="flex items-center gap-x-[32px]">
                        <div className="size-[32px] p-[8px] rounded-full bg-brand-2"><img className="size-full object-cover" src="src/assets/icon-instagram-grey.svg" alt="" /></div>
                        <div className="size-[32px] p-[8px] rounded-full bg-brand-2"><img className="size-full object-cover" src="src/assets/discord-grey.svg" alt="" /></div>
                        <div className="size-[32px] p-[8px] rounded-full bg-brand-2"><img className="size-full object-cover" src="src/assets/github-grey.svg" alt="" /></div>
                    </div>
                    <div className="flex items-center gap-x-[4px]">
                        <div className="text-white">Design By</div>
                        <a className="text-brand-1" href="https://www.instagram.com/johannleon2025">JohannLeon</a>
                    </div>
                </div>
            </footer>
    </>
}