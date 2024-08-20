import { useState } from "react"
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fas, far, fab);

export default function HomePage() {

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

    const [buttons, setButtons] = useState([
        {id: 0, icon: "fa-solid fa-border-all", isActive: true},
        {id: 1, icon: "fa-regular fa-user", isActive: false},
        {id: 2, icon: "fa-solid fa-code", isActive: false},
        {id: 3, icon: "fa-solid fa-display", isActive: false},
        {id: 4, icon: "fa-solid fa-pen-to-square", isActive: false},
        {id: 5, icon: "fa-regular fa-envelope", isActive: false},
    ])

    const handleClicking = (btnId) => {
        buttons.map((btn) => {
            if(btn.id === btnId) {
                btn.isActive = true;
            }
            else btn.isActive = false;
            setButtons([...buttons])
        })
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
            <section className="pt-[64px] pb-[128px] bg-bg-1 relative">
                <div className="px-[128px]">
                    <div className="text-U text-brand-2 text-center mb-[64px]">Developer</div>
                    <div className="flex items-center justify-between ">
                        <div className="shadow-custom mr-[128px] w-[320px] p-[24px] border-[4px] border-white rounded-tl-[160px] rounded-br-[160px]">
                            <div className="border-[3px] border-brand-1 mb-[16px] size-[96px] rounded-full mx-auto"><img className="rounded-full overflow-hidden size-full object-cover" src="https://cdn.hero.page/pfp/4d60260f-b986-496d-8b12-f508aa2628d2-anime-boy-glaring-into-the-distance-4k-anime-boy-profile-picture-4.png" alt="" /></div>
                            <div className="text-white H2-M text-center">GulAy</div>
                            <div className="text-white Code-M text-center mb-[32px]">Front-end developer</div>
                            <div className="flex flex-col gap-y-[16px] mb-[16px]">
                                <div className="flex gap-x-[16px] items-center">
                                    <div className="size-[14px]"><img className="size-full object-cover" src="src/assets/icon-mail-green.svg" alt="" /></div>
                                    <a href="mailto: gulaymovlamova@gmail.com" className="Code-M text-white">gulaymovlamova@gmail.com</a>
                                </div>
                                <div className="flex gap-x-[16px] items-center">
                                    <div className="size-[14px]"><img className="size-full object-cover" src="src/assets/icon-map-pin.svg" alt="" /></div>
                                    <div className="Code-M text-white">Azerbaijan</div>
                                </div>
                                <div className="flex gap-x-[16px] items-center">
                                    <div className="size-[14px]"><img className="size-full object-cover" src="src/assets/icon-briefcase.svg" alt="" /></div>
                                    <div className="Code-M text-white">Full-time / Freelancer</div>
                                </div>
                                <div className="flex gap-x-[16px] items-center">
                                    <div className="size-[14px]"><img className="size-full object-cover" src="src/assets/icon-link.svg" alt="" /></div>
                                     <div className="Code-M text-white">www.gulaism.com</div> {/* not a real site */}
                                </div>
                            </div>
                            <div className="flex gap-x-[16px] items-center mb-[32px]">
                                <div className="text-bg-1 bg-brand-1 px-[8px] rounded-[8px] Code-M">HTML</div>
                                <div className="text-bg-1 bg-brand-1 px-[8px] rounded-[8px] Code-M">CSS</div>
                                <div className="text-bg-1 bg-brand-1 px-[8px] rounded-[8px] Code-M">JS</div>
                                <div className="text-bg-1 bg-brand-1 px-[8px] rounded-[8px] Code-M">REACT</div>
                            </div>
                            <button className="flex items-center py-[16px] px-[32px] gap-x-[16px] rounded-full bg-white text-center mb-[13px]">
                                <div className="text-bg-1 BUtton-U">Download CV</div>
                                <div className="size-[24px]"><img className="size-full object-cover" src="src/assets/icon-download.svg" alt="" /></div>
                            </button>
                        </div>
                        <div className="mr-[60px]">
                            <div className="H1-U text-white mb-[66px]">Hey <br /> I'm <span className="text-brand-1">GulAy</span>, <br /> Front-end Developer</div>
                            <div className="mb-[50px] Media-M text-white">I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done,</div>
                            <div className="flex itmes-center gap-x-[16px]">
                                <div className="H2-M text-brand-1">Let's Talk</div>
                                <div className="p-[8px] rounded-full bg-grey size-[40px]"><img className="size-full object-cover" src="src/assets/icon-mail-green.svg" alt="" /></div>
                            </div>
                        </div>
                        <div className="rounded-[80px] bg-bg-2 w-[215px] px-[32px] py-[48px] flex flex-col gap-y-[48px]">
                            <div className="flex items-center gap-x-[16px]">
                                <div className="text-brand-1 Button">3</div>
                                <div className="text-white Media-M">Programming Language</div>
                            </div>
                            <div className="flex items-center gap-x-[16px]">
                                <div className="text-brand-1 Button">4</div>
                                <div className="text-white Media-M">Development Tools</div>
                            </div>
                            <div className="flex items-center gap-x-[16px]">
                                <div className="text-brand-1 Button">2</div>
                                <div className="text-white Media-M">Years of Experience</div>
                            </div>
                        </div>
                    </div>
                
                </div>
                <div className="flex flex-col gap-y-[24px] items-center w-[64px] border bg-bg-2 border-white rounded-[40px] px-[12px] pt-[8px] pb-[16px] absolute top-[64px] left-[64px]">
                    {buttons.map((button) => (
                        <button onClick={() => handleClicking(button.id)} key={button.id} className = {`size-[40px] ${button.isActive ? 'rounded-full p-[8px] bg-white' : ''}`}>
                            <FontAwesomeIcon className={`${button.isActive ? 'text-grey' : 'text-white'}`} icon={button.icon} />
                        </button>
                    ))}
                </div>
            </section>
            <section className="bg-[#1A1E23] p-[128px]">
                <div className="flex items-center justify-between gap-x-[128px]">
                    <div>
                        <div className="mb-[64px] H1-U text-white py-[16px] px-[40px] border-[4px] border-brand-1 inline-block bg-bg-1 rounded-tl-[40px] rounded-br-[40px]">About Me</div>
                        <div className="Media-M text-white bg-bg-1 rounded-[40px] p-[40px]">
                            Hello! <br /> My name is GulAy and I specialize in web developement that utilizes <span className="text-brand-1">HTML</span>, <span className="text-brand-1">CSS</span>, <span className="text-brand-1">JS</span>, and <span className="text-brand-1">REACT</span> etc. <br /> I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving. <br /> When I'm not coding, I am <span className="text-brand-1">writing blogs</span>, reading, or picking up some new hands-on art project like <span className="text-brand-1">photography</span>. <br /> I like to have my perspective and belief systems challenged so that I see the world through new eyes.
                        </div>
                    </div>
                    <div className="w-[462px] h-[556px] rounded-[16px]"><img className="w-full h-full object-cover rounded-[16px]" src="https://st.depositphotos.com/1752627/1564/i/450/depositphotos_15641933-stock-photo-hands-typing-on-computer-keyboard.jpg" alt="" /></div>
                </div>
            </section>
            <section className="-z-20 relative bg-coding bg-cover bg-no-repeat bg-center p-[128px]">
                <div className="-z-10 absolute inset-0 bg-bg-1 bg-opacity-75"></div>
                <div className="text-center H1-U text-brand-1 mb-[16px]">Skills</div>
                <div className="mb-[11px] mx-auto mb-[16px] w-[159px] h-[12px]"><img className="w-full h-full object-cover" src="src/assets/line-22.svg" alt="" /></div>
                <div className="Media-M text-white mb-[64px] text-center">
                    I am striving to never stop learning and improving
                </div>
                <div className="mb-[90px] flex gap-x-[128px] items-center justify-center">
                    <div className="py-[16px] px-[24px] bg-brand-2 border-l-[8px] border-css rounded-[8px]">
                        <div className="size-[32px] mb-[8px] mx-auto"><img className="size-full object-cover" src="src/assets/icon-monitor-grey.svg" alt="" /></div>
                        <div className="mb-[8px] text-bg-1 text-center Menu-M capitalize">web developement</div>
                        <div className="text-grey text-center Media-M">HTML·CSS·JS·REACT</div>
                    </div>
                    <div className="py-[16px] px-[24px] bg-brand-2 border-l-[8px] border-react rounded-[8px]">
                        <div className="size-[32px] mb-[8px] mx-auto"><img className="size-full object-cover" src="src/assets/icon-smartphone.svg" alt="" /></div>
                        <div className="mb-[8px] text-bg-1 text-center Menu-M capitalize">App developement</div>
                        <div className="text-grey text-center Media-M">iOS·Android</div>
                    </div>
                </div>
                <div className="flex H2-M gap-x-[128px] items-center justify-center">
                    <div className="flex flex-col gap-y-[24px]">
                        <div className="size-[144px] p-[40px] rounded-full bg-html"><img className="size-full object-cover" src="src/assets/html5.svg" alt="" /></div>
                        <div className="uppercase text-html text-center">Html</div>
                    </div>
                    <div className="flex flex-col gap-y-[24px]">
                        <div className="size-[144px] p-[40px] rounded-full bg-css"><img className="size-full object-cover" src="src/assets/css3-alt.svg" alt="" /></div>
                        <div className="uppercase text-css text-center">css</div>
                    </div>
                    <div className="flex flex-col gap-y-[24px]">
                        <div className="size-[144px] p-[40px] rounded-full bg-js"><img className="size-full object-cover" src="src/assets/node-js.svg" alt="" /></div>
                        <div className="uppercase text-js text-center">js</div>
                    </div>
                    <div className="flex flex-col gap-y-[24px]">
                        <div className="size-[144px] p-[40px] rounded-full bg-react"><img className="size-full object-cover" src="src/assets/react.svg" alt="" /></div>
                        <div className="uppercase text-react text-center">react</div>
                    </div>
                </div>
            </section>
            <section className="-z-20 relative bg-black-n-white bg-no-repeat bg-cover bg-center p-[128px]">
                <div className="-z-10 absolute opacity-50 inset-0 bg-bg-2"></div>
                <div className="mx-auto z-20">
                    <div className="text-center H1-U text-brand-1 mb-[16px]">Works</div>
                    <div className="mb-[11px] mx-auto mb-[16px] w-[159px] h-[12px]"><img className="w-full h-full object-cover" src="src/assets/line-22.svg" alt="" /></div>
                    <div className="mb-[64px] Media-M text-white text-center" >I had the pleasure of working with these awesome projects</div>
                    <div className="mx-auto w-[650px] h-[432px] relative flex items-center justify-center">
                        <div className="absolute top-[63px] right-[93px] flex items-end gap-x-[8px]">
                            <div className="inline-block">
                                <a className="mb-[4px] text-brand-1 Menu-M" href="www.google.com">View Website</a>
                                <div className="w-full bg-white h-[1px]"></div>
                            </div>
                            <div className="size-[16px]"><img className="size-full object-cover" src="src/assets/icon-mouse-pointer.svg" alt="" /></div>
                        </div>
                        <div className="size-[72px] p-[16px] rounded-full bg-bg-1"><img className="size-full object-cover" src="src/assets/discord.svg" alt="" /></div>
                        <img className="size-full object-cover mx-[64px]" src="src/assets/dual-screen.png" alt="" />
                        <div className="size-[72px] p-[16px] rounded-full bg-bg-1"><img className="size-full object-cover" src="src/assets/icon-chevron-right.svg" alt="" /></div>
                    </div>
                </div>
            </section>
            <section className="py-[100px] px-[128px] bg-grey">
                <div className="mx-auto">
                    <div className="text-center H1-U text-brand-1 mb-[16px]">Blogs</div>
                    <div className="mb-[11px] mx-auto mb-[16px] w-[159px] h-[12px]"><img className="w-full h-full object-cover" src="src/assets/line-22.svg" alt="" /></div>
                    <div className="Media-M text-white text-center" >My thoughts on technology and business, welcome to subscribe</div>
                    <div className="border-t-white border-t border-b border-b-white flex gap-x-[64px] items-center my-[64px] py-[64px] px-[14px]">
                        <div className="size-[240px]"><img className="size-full object-cover" src="https://previews.123rf.com/images/chagin/chagin1107/chagin110700075/10011679-close-up-business-man-hand-showing-something-on-laptop-to-his-colleague.jpg" alt="" /></div>
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
                    <div className="Button-U flex justify-center itmes-center gap-x-[32px]">
                        <Link to="/blogs" className="rounded-[32px] py-[16px] px-[32px] bg-brand-1 text-grey">View More</Link>
                        <button className="rounded-[32px] py-[16px] px-[32px] border-[2px] border-brand-1 bg-transparent text-white">Subscribe</button>
                    </div>
                </div>
            </section>
            <footer className="bg-bg-1 pt-[64px] pb-[16px]">
                <div className="mx-auto px-[400px]">
                    <div className="text-center H1-U text-brand-1 mb-[16px]">Contact</div>
                    <div className="mb-[11px] mx-auto mb-[16px] w-[159px] h-[12px]"><img className="w-full h-full object-cover" src="src/assets/line-22.svg" alt="" /></div>
                    <div className="mb-[102px] Media-M text-white text-center" >I’m currently available for freelance work</div>
                    <div className="flex justify-center mb-[64px]">
                        <div className="border-brand-1 border-[2px] inline-block rounded-tl-[32px] rounded-br-[32px] text-brand-1 H2-M py-[16px] px-[40px] capitalize">Send me a message</div>
                    </div>
                    <div className="Media-M grid grid-cols-2 grid-rows-2 gap-x-[128px] gap-y-[64px] mb-[64px]">
                        <div>
                            <div className="text-brand-1 mb-[24px]">Your name *</div>
                            <div className="mb-[8px] text-white">Enter your name</div>
                            <div className="h-[1px] w-full bg-brand-2"></div>
                        </div>
                        <div>
                            <div className="text-brand-1 mb-[24px]">Your email *</div>
                            <div className="mb-[8px] text-white">Enter your email</div>
                            <div className="h-[1px] w-full bg-brand-2"></div>
                        </div>
                        <div className="col-span-2">
                            <div className="text-brand-1 mb-[24px]">Your message *</div>
                            <div className="mb-[8px] text-white">Enter your needs</div>
                            <div className="h-[1px] w-full bg-brand-2"></div>
                        </div>
                    </div>
                    <button className="flex items-center gap-x-[16px] py-[16px] px-[32px] rounded-[32px] bg-brand-1 text-bg-1 Button-U mb-[64px] mx-auto">
                        <div>Send Message</div>
                        <div><img src="src/assets/icon-send.svg" alt="" /></div>
                    </button>
                </div>
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