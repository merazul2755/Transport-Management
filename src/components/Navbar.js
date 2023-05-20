import React, {useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";
import Footer from "./Footer";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        var sideBar = document.getElementById("mobile-nav");
        var openSidebar = document.getElementById("openSideBar");
        var closeSidebar = document.getElementById("closeSideBar");

        if (isMenuOpen === true) {
            sideBar.classList.add("translate-x-0");
            closeSidebar.classList.remove("hidden");
            openSidebar.classList.add("hidden");
        } else {
            sideBar.classList.remove("translate-x-0");
            closeSidebar.classList.add("hidden");
            openSidebar.classList.remove("hidden");
        }
    }, [isMenuOpen]);

    return (
        <div class="max-w-[1740px] m-auto h-full bg-[#f7fafc]">
            <div>
                <div class="flex flex-no-wrap ">
                    {/* <!-- Sidebar starts --> */}

                    <div class="w-64 min-h-screen absolute sm:relative bg-[#0c1e35] shadow md:h-full flex-col justify-between hidden sm:flex">
                        <div class="px-8 ">
                            <div class="h-16 w-full flex items-center">
                                <svg role="img" xmlns="http://www.w3.org/2000/svg" width="144" height="30" viewBox="0 0 144 30">
                                    <path fill="#5F7DF2" d="M80.544 9.48c1.177 0 2.194.306 3.053.92.86.614 1.513 1.45 1.962 2.507.448 1.058.673 2.247.673 3.568 0 1.303-.233 2.473-.699 3.51-.465 1.037-1.136 1.851-2.012 2.444-.876.592-1.885.888-3.028.888-1.405 0-2.704-.554-3.897-1.663v4.279h2.64v3.072h-9.14v-3.072h2.26V12.78H70.45V9.657h6.145v1.663l.209-.21c1.123-1.087 2.369-1.63 3.74-1.63zm17.675 0c1.176 0 2.194.306 3.053.92.859.614 1.513 1.45 1.961 2.507.449 1.058.673 2.247.673 3.568 0 1.303-.233 2.473-.698 3.51-.466 1.037-1.136 1.851-2.012 2.444-.876.592-1.886.888-3.028.888-1.405 0-2.704-.554-3.898-1.663v4.279h2.64v3.072h-9.14v-3.072h2.26V12.78h-1.904V9.657h6.144v1.663l.21-.21c1.122-1.087 2.368-1.63 3.739-1.63zM24.973 1c1.13 0 2.123.433 2.842 1.133 0 .004 0 .008.034.012 1.54 1.515 1.54 3.962-.034 5.472-.035.029-.069.058-.069.089-.719.65-1.712 1.05-2.773 1.05-.719 0-1.37.061-1.985.184-2.363.474-3.8 1.86-4.28 4.13-.114.489-.18 1.02-.2 1.59l-.003.176.001-.034.002.034c.022.505-.058 1.014-.239 1.495l-.076.182.064-.157c.106-.28.18-.575.217-.881l.008-.084-.026.195c-.286 1.797-1.858 3.188-3.754 3.282l-.204.005h-.103l-.103.002h-.034c-.65.012-1.232.072-1.78.181-2.328.473-3.765 1.863-4.279 4.139-.082.417-.142.863-.163 1.339l-.008.362v.23c0 2.02-1.603 3.681-3.661 3.861L4.16 29l-.48-.01c-.958-.073-1.849-.485-2.499-1.113-1.522-1.464-1.573-3.808-.152-5.33l.152-.154.103-.12c.719-.636 1.677-1.026 2.704-1.026.754 0 1.404-.062 2.02-.184 2.362-.475 3.8-1.86 4.28-4.126.136-.587.17-1.235.17-1.942 0-.991.411-1.896 1.027-2.583.069-.047.137-.097.172-.15.068-.051.102-.104.17-.159.633-.564 1.498-.925 2.408-.978l.229-.007h.034c.068 0 .171.003.274.009.616-.014 1.198-.074 1.746-.18 2.328-.474 3.766-1.863 4.279-4.135.082-.44.142-.912.163-1.418l.008-.385v-.132c0-2.138 1.78-3.872 4.005-3.877zm-.886 10c1.065 0 1.998.408 2.697 1.073.022.011.03.024.042.036l.025.017v.015c1.532 1.524 1.532 3.996 0 5.52-.034.03-.067.06-.067.09-.7.655-1.665 1.056-2.697 1.056-.7 0-1.332.062-1.932.186-2.298.477-3.696 1.873-4.163 4.157-.133.591-.2 1.242-.2 1.95 0 1.036-.399 1.975-1.032 2.674l-.1.084c-.676.679-1.551 1.055-2.441 1.13l-.223.012-.366-.006c-.633-.043-1.3-.254-1.865-.632-.156-.096-.296-.201-.432-.315l-.2-.177v-.012c-.734-.735-1.133-1.72-1.133-2.757 0-2.078 1.656-3.793 3.698-3.899l.198-.005h.133c.666-.007 1.266-.069 1.832-.185 2.265-.476 3.663-1.874 4.163-4.161.08-.442.139-.916.159-1.424l.008-.387v-.136c0-2.153 1.731-3.899 3.896-3.904zm3.882 11.025c1.375 1.367 1.375 3.583 0 4.95s-3.586 1.367-4.96 0c-1.345-1.367-1.345-3.583 0-4.95 1.374-1.367 3.585-1.367 4.96 0zm94.655-12.672c1.405 0 2.628.323 3.669.97 1.041.648 1.843 1.566 2.406 2.756.563 1.189.852 2.57.87 4.145h-9.954l.03.251c.132.906.476 1.633 1.03 2.18.605.596 1.386.895 2.343.895 1.058 0 2.09-.525 3.097-1.574l3.301 1.066-.203.291c-.69.947-1.524 1.67-2.501 2.166-1.075.545-2.349.818-3.821.818-1.473 0-2.774-.277-3.904-.831-1.13-.555-2.006-1.34-2.628-2.355-.622-1.016-.933-2.21-.933-3.58 0-1.354.324-2.582.971-3.682s1.523-1.961 2.628-2.583c1.104-.622 2.304-.933 3.599-.933zm13.955.126c1.202 0 2.314.216 3.339.648v-.47h3.034v3.91h-3.034l-.045-.137c-.317-.848-1.275-1.272-2.875-1.272-1.21 0-1.816.339-1.816 1.016 0 .296.161.516.483.66.321.144.791.262 1.409.355 1.735.22 3.102.536 4.1.946 1 .41 1.697.919 2.095 1.524.398.605.597 1.339.597 2.202 0 1.405-.48 2.5-1.441 3.282-.96.783-2.266 1.174-3.917 1.174-1.608 0-2.7-.321-3.275-.964V23h-3.098v-4.596h3.098l.032.187c.116.547.412.984.888 1.311.53.364 1.183.546 1.962.546.762 0 1.324-.087 1.688-.26.364-.174.546-.476.546-.908 0-.296-.076-.527-.228-.692-.153-.165-.447-.31-.883-.438-.435-.127-1.102-.27-2-.431-1.997-.313-3.433-.82-4.31-1.517-.875-.699-1.313-1.64-1.313-2.825 0-1.21.455-2.162 1.365-2.856.91-.695 2.11-1.042 3.599-1.042zm-69.164.178v10.27h1.98V23h-8.24v-3.072h2.032V12.78h-2.031V9.657h6.259zm-16.85-5.789l.37.005c1.94.05 3.473.494 4.6 1.335 1.198.892 1.797 2.185 1.797 3.878 0 1.168-.273 2.15-.819 2.945-.546.796-1.373 1.443-2.482 1.943l3.085 5.776h2.476V23h-5.827l-4.317-8.366h-2.183v5.116h2.4V23H39.646v-3.25h2.628V7.118h-2.628v-3.25h10.918zm61.329 0v16.06h1.892V23h-8.24v-3.072h2.082v-13h-2.082v-3.06h6.348zm-32.683 9.04c-.812 0-1.462.317-1.949.951-.486.635-.73 1.49-.73 2.565 0 1.007.252 1.847.756 2.52.503.673 1.161 1.01 1.974 1.01.838 0 1.481-.312 1.93-.934.448-.622.672-1.504.672-2.647 0-1.092-.228-1.942-.685-2.552-.457-.61-1.113-.914-1.968-.914zm17.675 0c-.813 0-1.463.317-1.95.951-.486.635-.73 1.49-.73 2.565 0 1.007.253 1.847.756 2.52.504.673 1.162 1.01 1.974 1.01.838 0 1.481-.312 1.93-.934.449-.622.673-1.504.673-2.647 0-1.092-.229-1.942-.686-2.552-.457-.61-1.113-.914-1.967-.914zM14.1 0C16.267 0 18 1.743 18 3.894v.01c0 2.155-1.733 3.903-3.9 3.903-4.166 0-6.3 2.133-6.3 6.293 0 2.103-1.667 3.817-3.734 3.9l-.5-.009c-.933-.075-1.8-.49-2.433-1.121C.4 16.134 0 15.143 0 14.1c0-2.144 1.733-3.903 3.9-3.903 4.166 0 6.3-2.133 6.3-6.294C10.2 1.751 11.934.005 14.1 0zm108.32 12.184c-.76 0-1.372.22-1.834.66-.46.44-.75 1.113-.87 2.018h5.561c-.118-.795-.442-1.44-.97-1.936-.53-.495-1.158-.742-1.886-.742zM49.525 7.118h-2.26v4.444h1.829c2.023 0 3.034-.754 3.034-2.26 0-.728-.233-1.274-.698-1.638-.466-.364-1.1-.546-1.905-.546zm15.821-3.593c.635 0 1.183.231 1.644.692.462.462.692 1.01.692 1.644 0 .677-.23 1.238-.692 1.682-.46.445-1.009.667-1.644.667-.643 0-1.195-.23-1.656-.692-.462-.461-.692-1.013-.692-1.657 0-.634.23-1.182.692-1.644.46-.461 1.013-.692 1.656-.692zM5.991 1.171c1.345 1.563 1.345 4.095 0 5.658-1.374 1.561-3.585 1.561-4.96 0-1.375-1.563-1.375-4.095 0-5.658 1.375-1.561 3.586-1.561 4.96 0z"/>
                                </svg>
                            </div>
                            {/* Web View */}
                            <ul class="mt-12 space-y-3 font-thin font-poppins">
                                <li>
                                    <Link to="/home/booking" class="w-full flex items-center gap-x-1.5 group select-none">
                                        <div class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
                                            <div class="absolute top-0 left-0 w-full h-[102%] group-hover:translate-y-0 translate-y-8 bg-[#ab2dff] transition-all duration-300 "></div>
                                        </div>
                                        <div class=" text-[#7d84ab] w-full group-active:scale-95 self-stretch rounded flex items-center space-x-4 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm focus:text-[#dee2ec]">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 !fill-[#7d84ab] group-hover:!fill-[#ab2dff] dark:fill-gray-600  transition-colors duration-200" viewBox="0 96 960 960">
                                                <path d="M510 486V216h330v270H510ZM120 606V216h330v390H120Zm390 330V546h330v390H510Zm-390 0V666h330v270H120Zm60-390h210V276H180v270Zm390 330h210V606H570v270Zm0-450h210V276H570v150ZM180 876h210V726H180v150Zm210-330Zm180-120Zm0 180ZM390 726Z"/>
                                            </svg>
                                            <span className="">Booking</span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/home/dashboard" class="w-full flex items-center gap-x-1.5 group select-none">
                                        <div class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
                                            <div class="absolute top-0 left-0 w-full h-[102%] group-hover:translate-y-0 translate-y-8 bg-[#ab2dff] transition-all duration-300"></div>
                                        </div>
                                        <div class=" text-[#7d84ab] w-full group-active:scale-95 self-stretch rounded flex items-center space-x-4 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm ">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 !fill-[#7d84ab] group-hover:!fill-[#ab2dff] dark:fill-gray-600  transition-colors duration-200" viewBox="0 96 960 960">
                                                <path d="M249 936q-13 0-23-7.5T216 909v-84q-29-16-42.5-46T160 715V318q0-74 76.5-108T481 176q166 0 242.5 34T800 318v397q0 34-13.5 64T744 825v84q0 12-10 19.5t-23 7.5h-19q-14 0-24-7.5T658 909v-55H302v55q0 12-10 19.5t-24 7.5h-19Zm232-644h259-520 261Zm177 293H220h520-82Zm-438-60h520V352H220v173Zm106 219q23 0 39-16t16-39q0-23-16-39t-39-16q-23 0-39 16t-16 39q0 23 16 39t39 16Zm308 0q23 0 39-16t16-39q0-23-16-39t-39-16q-23 0-39 16t-16 39q0 23 16 39t39 16ZM220 292h520q-24-26-92-41t-167-15q-118 0-181 13.5T220 292Zm82 502h356q35 0 58.5-27t23.5-62V585H220v120q0 35 23.5 62t58.5 27Z"/>
                                            </svg>
                                            <span>Buses</span>
                                        </div>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/home/drivers" class="w-full flex items-center gap-x-1.5 group select-none">
                                        <div class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
                                            <div class="absolute top-0 left-0 w-full h-[102%] group-hover:translate-y-0 translate-y-8 bg-[#ab2dff] transition-all duration-300"></div>
                                        </div>
                                        <div class=" text-[#7d84ab] w-full group-active:scale-95 self-stretch rounded flex items-center space-x-4 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm ">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 !fill-[#7d84ab] group-hover:!fill-[#ab2dff] dark:fill-gray-600  transition-colors duration-200" viewBox="0 96 960 960">
                                                <path d="M80 896v-95q0-34 18-62.5t50-42.5q60-27 123.184-43.5Q334.367 636 400 636q33 0 66 4.667 33 4.666 66 11.333v53q-45 17-74.5 55T428 846v50H80Zm408 0v-51q0-22.892 11-42.446T530 772q36-18.5 74.5-27.75T684 735q41 0 80 9t74 28q20 10 31 29.869T880 845v51H488Zm196-221q-39.48 0-66.74-27.26Q590 620.48 590 581q0-39.48 27.26-66.74Q644.52 487 684 487q39.48 0 66.74 27.26Q778 541.52 778 581q0 39.48-27.26 66.74Q723.48 675 684 675ZM400 575q-63 0-106.5-43.5T250 425q0-63 43.5-106.5T400 275q63 0 106.5 43.5T550 425q0 63-43.5 106.5T400 575Z"/>
                                            </svg>
                                            <span>Drivers</span>
                                        </div>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/home/profile" class="w-full flex items-center gap-x-1.5 group select-none">
                                        <div class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
                                            <div class="absolute top-0 left-0 w-full h-[102%] group-hover:translate-y-0 translate-y-8 bg-[#ab2dff] transition-all duration-300"></div>
                                        </div>
                                        <div class=" text-[#7d84ab] w-full group-active:scale-95 self-stretch rounded flex items-center space-x-4 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm ">
                                            <svg class="h-5 w-5 !fill-[#7d84ab] group-hover:!fill-[#ab2dff] dark:fill-gray-600  transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span>Profile</span>
                                        </div>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/home/contact" class="w-full flex items-center gap-x-1.5 group select-none">
                                        <div class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
                                            <div class="absolute top-0 left-0 w-full h-[102%] group-hover:translate-y-0 translate-y-8 bg-[#ab2dff] transition-all duration-300"></div>
                                        </div>
                                        <div class=" text-[#7d84ab] w-full group-active:scale-95 self-stretch rounded flex items-center space-x-5 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm ">
                                            <svg class="h-4 w-4 !fill-[#7d84ab] group-hover:!fill-[#ab2dff] dark:fill-gray-600  transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd"/>
                                            </svg>
                                            <span>Contact</span>
                                        </div>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/home" class="w-full flex items-center gap-x-1.5 group select-none">
                                        <div class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
                                            <div class="absolute top-0 left-0 w-full h-[102%] group-hover:translate-y-0 translate-y-8 bg-[#ab2dff] transition-all duration-300"></div>
                                        </div>
                                        <div class=" text-[#7d84ab] w-full group-active:scale-95 self-stretch rounded flex items-center space-x-4 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm ">
                                            <svg class="h-5 w-5 !fill-[#7d84ab] group-hover:!fill-[#ab2dff] dark:fill-gray-600  transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span>Sign Out</span>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Mobile View */}
                    <div class="w-64 z-40 absolute bg-[#0c1e35] shadow md:h-full flex-col justify-between sm:hidden transition-transform -translate-x-full duration-300 ease-in-out" id="mobile-nav">
                        <button id="openSideBar" class="h-10 w-10 bg-[#0c1e35] absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 rounded focus:ring-gray-800"
                            onClick={
                                () => setIsMenuOpen(!isMenuOpen)
                        }>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-adjustments" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <circle cx="6" cy="10" r="2"/>
                                <line x1="6" y1="4" x2="6" y2="8"/>
                                <line x1="6" y1="12" x2="6" y2="20"/>
                                <circle cx="12" cy="16" r="2"/>
                                <line x1="12" y1="4" x2="12" y2="14"/>
                                <line x1="12" y1="18" x2="12" y2="20"/>
                                <circle cx="18" cy="7" r="2"/>
                                <line x1="18" y1="4" x2="18" y2="5"/>
                                <line x1="18" y1="9" x2="18" y2="20"/>
                            </svg>
                        </button>
                        <button onClick={
                                () => setIsMenuOpen(!isMenuOpen)
                            }
                            id="closeSideBar"
                            class=" h-10 w-10 bg-[#0c1e35]  absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer text-white'">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <line x1="18" y1="6" x2="6" y2="18"/>
                                <line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                        </button>
                        <div class="px-8 h-screen">
                            <div class="h-16 w-full flex items-center">
                                <svg aria-label="Ripples. Logo" role="img" xmlns="http://www.w3.org/2000/svg" width="144" height="30" viewBox="0 0 144 30">
                                    <path fill="#5F7DF2" d="M80.544 9.48c1.177 0 2.194.306 3.053.92.86.614 1.513 1.45 1.962 2.507.448 1.058.673 2.247.673 3.568 0 1.303-.233 2.473-.699 3.51-.465 1.037-1.136 1.851-2.012 2.444-.876.592-1.885.888-3.028.888-1.405 0-2.704-.554-3.897-1.663v4.279h2.64v3.072h-9.14v-3.072h2.26V12.78H70.45V9.657h6.145v1.663l.209-.21c1.123-1.087 2.369-1.63 3.74-1.63zm17.675 0c1.176 0 2.194.306 3.053.92.859.614 1.513 1.45 1.961 2.507.449 1.058.673 2.247.673 3.568 0 1.303-.233 2.473-.698 3.51-.466 1.037-1.136 1.851-2.012 2.444-.876.592-1.886.888-3.028.888-1.405 0-2.704-.554-3.898-1.663v4.279h2.64v3.072h-9.14v-3.072h2.26V12.78h-1.904V9.657h6.144v1.663l.21-.21c1.122-1.087 2.368-1.63 3.739-1.63zM24.973 1c1.13 0 2.123.433 2.842 1.133 0 .004 0 .008.034.012 1.54 1.515 1.54 3.962-.034 5.472-.035.029-.069.058-.069.089-.719.65-1.712 1.05-2.773 1.05-.719 0-1.37.061-1.985.184-2.363.474-3.8 1.86-4.28 4.13-.114.489-.18 1.02-.2 1.59l-.003.176.001-.034.002.034c.022.505-.058 1.014-.239 1.495l-.076.182.064-.157c.106-.28.18-.575.217-.881l.008-.084-.026.195c-.286 1.797-1.858 3.188-3.754 3.282l-.204.005h-.103l-.103.002h-.034c-.65.012-1.232.072-1.78.181-2.328.473-3.765 1.863-4.279 4.139-.082.417-.142.863-.163 1.339l-.008.362v.23c0 2.02-1.603 3.681-3.661 3.861L4.16 29l-.48-.01c-.958-.073-1.849-.485-2.499-1.113-1.522-1.464-1.573-3.808-.152-5.33l.152-.154.103-.12c.719-.636 1.677-1.026 2.704-1.026.754 0 1.404-.062 2.02-.184 2.362-.475 3.8-1.86 4.28-4.126.136-.587.17-1.235.17-1.942 0-.991.411-1.896 1.027-2.583.069-.047.137-.097.172-.15.068-.051.102-.104.17-.159.633-.564 1.498-.925 2.408-.978l.229-.007h.034c.068 0 .171.003.274.009.616-.014 1.198-.074 1.746-.18 2.328-.474 3.766-1.863 4.279-4.135.082-.44.142-.912.163-1.418l.008-.385v-.132c0-2.138 1.78-3.872 4.005-3.877zm-.886 10c1.065 0 1.998.408 2.697 1.073.022.011.03.024.042.036l.025.017v.015c1.532 1.524 1.532 3.996 0 5.52-.034.03-.067.06-.067.09-.7.655-1.665 1.056-2.697 1.056-.7 0-1.332.062-1.932.186-2.298.477-3.696 1.873-4.163 4.157-.133.591-.2 1.242-.2 1.95 0 1.036-.399 1.975-1.032 2.674l-.1.084c-.676.679-1.551 1.055-2.441 1.13l-.223.012-.366-.006c-.633-.043-1.3-.254-1.865-.632-.156-.096-.296-.201-.432-.315l-.2-.177v-.012c-.734-.735-1.133-1.72-1.133-2.757 0-2.078 1.656-3.793 3.698-3.899l.198-.005h.133c.666-.007 1.266-.069 1.832-.185 2.265-.476 3.663-1.874 4.163-4.161.08-.442.139-.916.159-1.424l.008-.387v-.136c0-2.153 1.731-3.899 3.896-3.904zm3.882 11.025c1.375 1.367 1.375 3.583 0 4.95s-3.586 1.367-4.96 0c-1.345-1.367-1.345-3.583 0-4.95 1.374-1.367 3.585-1.367 4.96 0zm94.655-12.672c1.405 0 2.628.323 3.669.97 1.041.648 1.843 1.566 2.406 2.756.563 1.189.852 2.57.87 4.145h-9.954l.03.251c.132.906.476 1.633 1.03 2.18.605.596 1.386.895 2.343.895 1.058 0 2.09-.525 3.097-1.574l3.301 1.066-.203.291c-.69.947-1.524 1.67-2.501 2.166-1.075.545-2.349.818-3.821.818-1.473 0-2.774-.277-3.904-.831-1.13-.555-2.006-1.34-2.628-2.355-.622-1.016-.933-2.21-.933-3.58 0-1.354.324-2.582.971-3.682s1.523-1.961 2.628-2.583c1.104-.622 2.304-.933 3.599-.933zm13.955.126c1.202 0 2.314.216 3.339.648v-.47h3.034v3.91h-3.034l-.045-.137c-.317-.848-1.275-1.272-2.875-1.272-1.21 0-1.816.339-1.816 1.016 0 .296.161.516.483.66.321.144.791.262 1.409.355 1.735.22 3.102.536 4.1.946 1 .41 1.697.919 2.095 1.524.398.605.597 1.339.597 2.202 0 1.405-.48 2.5-1.441 3.282-.96.783-2.266 1.174-3.917 1.174-1.608 0-2.7-.321-3.275-.964V23h-3.098v-4.596h3.098l.032.187c.116.547.412.984.888 1.311.53.364 1.183.546 1.962.546.762 0 1.324-.087 1.688-.26.364-.174.546-.476.546-.908 0-.296-.076-.527-.228-.692-.153-.165-.447-.31-.883-.438-.435-.127-1.102-.27-2-.431-1.997-.313-3.433-.82-4.31-1.517-.875-.699-1.313-1.64-1.313-2.825 0-1.21.455-2.162 1.365-2.856.91-.695 2.11-1.042 3.599-1.042zm-69.164.178v10.27h1.98V23h-8.24v-3.072h2.032V12.78h-2.031V9.657h6.259zm-16.85-5.789l.37.005c1.94.05 3.473.494 4.6 1.335 1.198.892 1.797 2.185 1.797 3.878 0 1.168-.273 2.15-.819 2.945-.546.796-1.373 1.443-2.482 1.943l3.085 5.776h2.476V23h-5.827l-4.317-8.366h-2.183v5.116h2.4V23H39.646v-3.25h2.628V7.118h-2.628v-3.25h10.918zm61.329 0v16.06h1.892V23h-8.24v-3.072h2.082v-13h-2.082v-3.06h6.348zm-32.683 9.04c-.812 0-1.462.317-1.949.951-.486.635-.73 1.49-.73 2.565 0 1.007.252 1.847.756 2.52.503.673 1.161 1.01 1.974 1.01.838 0 1.481-.312 1.93-.934.448-.622.672-1.504.672-2.647 0-1.092-.228-1.942-.685-2.552-.457-.61-1.113-.914-1.968-.914zm17.675 0c-.813 0-1.463.317-1.95.951-.486.635-.73 1.49-.73 2.565 0 1.007.253 1.847.756 2.52.504.673 1.162 1.01 1.974 1.01.838 0 1.481-.312 1.93-.934.449-.622.673-1.504.673-2.647 0-1.092-.229-1.942-.686-2.552-.457-.61-1.113-.914-1.967-.914zM14.1 0C16.267 0 18 1.743 18 3.894v.01c0 2.155-1.733 3.903-3.9 3.903-4.166 0-6.3 2.133-6.3 6.293 0 2.103-1.667 3.817-3.734 3.9l-.5-.009c-.933-.075-1.8-.49-2.433-1.121C.4 16.134 0 15.143 0 14.1c0-2.144 1.733-3.903 3.9-3.903 4.166 0 6.3-2.133 6.3-6.294C10.2 1.751 11.934.005 14.1 0zm108.32 12.184c-.76 0-1.372.22-1.834.66-.46.44-.75 1.113-.87 2.018h5.561c-.118-.795-.442-1.44-.97-1.936-.53-.495-1.158-.742-1.886-.742zM49.525 7.118h-2.26v4.444h1.829c2.023 0 3.034-.754 3.034-2.26 0-.728-.233-1.274-.698-1.638-.466-.364-1.1-.546-1.905-.546zm15.821-3.593c.635 0 1.183.231 1.644.692.462.462.692 1.01.692 1.644 0 .677-.23 1.238-.692 1.682-.46.445-1.009.667-1.644.667-.643 0-1.195-.23-1.656-.692-.462-.461-.692-1.013-.692-1.657 0-.634.23-1.182.692-1.644.46-.461 1.013-.692 1.656-.692zM5.991 1.171c1.345 1.563 1.345 4.095 0 5.658-1.374 1.561-3.585 1.561-4.96 0-1.375-1.563-1.375-4.095 0-5.658 1.375-1.561 3.586-1.561 4.96 0z"/>
                                </svg>
                            </div>
                            <ul onClick={
                                    () => setIsMenuOpen(!isMenuOpen)
                                }
                                class="mt-12 space-y-3 font-thin font-poppins">

                                <li>
                                    <Link to="/home/booking" class="w-full flex items-center gap-x-1.5 group select-none">
                                        <div class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
                                            <div class="absolute top-0 left-0 w-full h-[102%] group-hover:translate-y-0 translate-y-8 bg-[#ab2dff] transition-all duration-300"></div>
                                        </div>
                                        <div class=" text-[#7d84ab] w-full group-active:scale-95 self-stretch rounded flex items-center space-x-4 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm focus:text-[#dee2ec]">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 !fill-[#7d84ab] group-hover:!fill-[#ab2dff] dark:fill-gray-600  transition-colors duration-200" viewBox="0 96 960 960">
                                                <path d="M510 486V216h330v270H510ZM120 606V216h330v390H120Zm390 330V546h330v390H510Zm-390 0V666h330v270H120Zm60-390h210V276H180v270Zm390 330h210V606H570v270Zm0-450h210V276H570v150ZM180 876h210V726H180v150Zm210-330Zm180-120Zm0 180ZM390 726Z"/>
                                            </svg>
                                            <span className="">Booking</span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/home/dashboard" class="w-full flex items-center gap-x-1.5 group select-none">
                                        <div class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
                                            <div class="absolute top-0 left-0 w-full h-[102%] group-hover:translate-y-0 translate-y-8 bg-[#ab2dff] transition-all duration-300"></div>
                                        </div>
                                        <div class=" text-[#7d84ab] w-full group-active:scale-95 self-stretch rounded flex items-center space-x-4 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm ">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 !fill-[#7d84ab] group-hover:!fill-[#ab2dff] dark:fill-gray-600  transition-colors duration-200" viewBox="0 96 960 960">
                                                <path d="M249 936q-13 0-23-7.5T216 909v-84q-29-16-42.5-46T160 715V318q0-74 76.5-108T481 176q166 0 242.5 34T800 318v397q0 34-13.5 64T744 825v84q0 12-10 19.5t-23 7.5h-19q-14 0-24-7.5T658 909v-55H302v55q0 12-10 19.5t-24 7.5h-19Zm232-644h259-520 261Zm177 293H220h520-82Zm-438-60h520V352H220v173Zm106 219q23 0 39-16t16-39q0-23-16-39t-39-16q-23 0-39 16t-16 39q0 23 16 39t39 16Zm308 0q23 0 39-16t16-39q0-23-16-39t-39-16q-23 0-39 16t-16 39q0 23 16 39t39 16ZM220 292h520q-24-26-92-41t-167-15q-118 0-181 13.5T220 292Zm82 502h356q35 0 58.5-27t23.5-62V585H220v120q0 35 23.5 62t58.5 27Z"/>
                                            </svg>
                                            <span>Buses</span>
                                        </div>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/home/drivers" class="w-full flex items-center gap-x-1.5 group select-none">
                                        <div class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
                                            <div class="absolute top-0 left-0 w-full h-[102%] group-hover:translate-y-0 translate-y-8 bg-[#ab2dff] transition-all duration-300"></div>
                                        </div>
                                        <div class=" text-[#7d84ab] w-full group-active:scale-95 self-stretch rounded flex items-center space-x-4 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm ">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 !fill-[#7d84ab] group-hover:!fill-[#ab2dff] dark:fill-gray-600  transition-colors duration-200" viewBox="0 96 960 960">
                                                <path d="M80 896v-95q0-34 18-62.5t50-42.5q60-27 123.184-43.5Q334.367 636 400 636q33 0 66 4.667 33 4.666 66 11.333v53q-45 17-74.5 55T428 846v50H80Zm408 0v-51q0-22.892 11-42.446T530 772q36-18.5 74.5-27.75T684 735q41 0 80 9t74 28q20 10 31 29.869T880 845v51H488Zm196-221q-39.48 0-66.74-27.26Q590 620.48 590 581q0-39.48 27.26-66.74Q644.52 487 684 487q39.48 0 66.74 27.26Q778 541.52 778 581q0 39.48-27.26 66.74Q723.48 675 684 675ZM400 575q-63 0-106.5-43.5T250 425q0-63 43.5-106.5T400 275q63 0 106.5 43.5T550 425q0 63-43.5 106.5T400 575Z"/>
                                            </svg>
                                            <span>Drivers</span>
                                        </div>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/home/profile" class="w-full flex items-center gap-x-1.5 group select-none">
                                        <div class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
                                            <div class="absolute top-0 left-0 w-full h-[102%] group-hover:translate-y-0 translate-y-8 bg-[#ab2dff] transition-all duration-300"></div>
                                        </div>
                                        <div class=" text-[#7d84ab] w-full group-active:scale-95 self-stretch rounded flex items-center space-x-4 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm ">
                                            <svg class="h-5 w-5 !fill-[#7d84ab] group-hover:!fill-[#ab2dff] dark:fill-gray-600  transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span>Profile</span>
                                        </div>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/home/contact" class="w-full flex items-center gap-x-1.5 group select-none">
                                        <div class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
                                            <div class="absolute top-0 left-0 w-full h-[102%] group-hover:translate-y-0 translate-y-8 bg-[#ab2dff] transition-all duration-300"></div>
                                        </div>
                                        <div class=" text-[#7d84ab] w-full group-active:scale-95 self-stretch rounded flex items-center space-x-5 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm ">
                                            <svg class="h-4 w-4 !fill-[#7d84ab] group-hover:!fill-[#ab2dff] dark:fill-gray-600  transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd"/>
                                            </svg>
                                            <span>Contact</span>
                                        </div>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/home" class="w-full flex items-center gap-x-1.5 group select-none">
                                        <div class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
                                            <div class="absolute top-0 left-0 w-full h-[102%] group-hover:translate-y-0 translate-y-8 bg-[#ab2dff] transition-all duration-300"></div>
                                        </div>
                                        <div class=" text-[#7d84ab] w-full group-active:scale-95 self-stretch rounded flex items-center space-x-4 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm ">
                                            <svg class="h-5 w-5 !fill-[#7d84ab] group-hover:!fill-[#ab2dff] dark:fill-gray-600  transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span>Sign Out</span>
                                        </div>
                                    </Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                    {/* <!-- Sidebar ends -->
                    <!-- Remove class [ h-64 ] when adding a card block --> */}
                    <div class="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6 ">
                        <div class="w-full h-full ">
                            <Outlet></Outlet>

                            <Footer></Footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

// <div className="max-w-7xl m-auto">
//     <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 ">
//         <div class="px-3 py-3 lg:px-5 lg:pl-3">
//             <div class="flex items-center justify-between">
//                 <div class="flex items-center justify-start">
//                     <button onClick={
//                             () => setIsMenuOpen(!isMenuOpen)
//                         }
//                         id="ham"
//                         class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
//                         <span class="sr-only">Open sidebar</span>
//                         <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                             <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
//                         </svg>
//                     </button>
//                     <Link to='/' class="flex ml-2 md:mr-24">
//                         <img src="" class="h-8 mr-3" alt=""/>
//                         <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">DIU Transportation</span>
//                     </Link>
//                 </div>
//                 <div class="flex items-center">
//                     <div class="flex items-center ml-3">
//                         <div>
//                             <button type="button" class="flex text-sm bg-gray-900 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
//                                 <span class="sr-only">Open user menu</span>
//                                 <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
//                             </button>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     </nav>

//     <aside onClick={
//             () => setIsMenuOpen(!isMenuOpen)
//         }
//         id="logo-sidebar"
//         class="fixed top-0 left-0 w-64 h-screen pt-20 z-30 transition-transform -translate-x-full bg-gray-50 border-r border-gray-200 md:translate-x-0 dark:bg-gray-900 dark:border-gray-700 shadow-lg">
//         <div class="h-full px-3 pb-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
//             <ul class="space-y-3 font-medium">
//                 <li>

//                     <Link to='/home/booking' class="w-full flex items-center gap-x-1.5 group select-none">
//                         <div class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
//                             <div class="absolute top-0 left-0 w-full h-[102%] group-hover:translate-y-0 translate-y-8 bg-green-500 transition-all duration-300"></div>
//                         </div>
//                         <div class="bg-white text-gray-900 group-hover:bg-gray-200 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-4 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-base ">

//                             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 !fill-gray-500 group-hover:!fill-green-500 dark:fill-gray-600  transition-colors duration-200" viewBox="0 96 960 960"><path d="M510 486V216h330v270H510ZM120 606V216h330v390H120Zm390 330V546h330v390H510Zm-390 0V666h330v270H120Zm60-390h210V276H180v270Zm390 330h210V606H570v270Zm0-450h210V276H570v150ZM180 876h210V726H180v150Zm210-330Zm180-120Zm0 180ZM390 726Z"/></svg>
//                             <span>Booking</span>
//                         </div>
//                     </Link>

//                 </li>
//                 <li>
//                     <Link to='/home/dashboard' class="w-full flex items-center gap-x-1.5 group select-none">
//                         <div class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
//                             <div class="absolute top-0 left-0 w-full h-[102%] group-hover:translate-y-0 translate-y-8 bg-green-500 transition-all duration-300"></div>
//                         </div>
//                         <div class="bg-white text-gray-900 group-hover:bg-gray-200 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-4 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-base ">

//                             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 !fill-gray-500 group-hover:!fill-green-500 dark:fill-gray-600  transition-colors duration-200" viewBox="0 96 960 960"><path d="M249 936q-13 0-23-7.5T216 909v-84q-29-16-42.5-46T160 715V318q0-74 76.5-108T481 176q166 0 242.5 34T800 318v397q0 34-13.5 64T744 825v84q0 12-10 19.5t-23 7.5h-19q-14 0-24-7.5T658 909v-55H302v55q0 12-10 19.5t-24 7.5h-19Zm232-644h259-520 261Zm177 293H220h520-82Zm-438-60h520V352H220v173Zm106 219q23 0 39-16t16-39q0-23-16-39t-39-16q-23 0-39 16t-16 39q0 23 16 39t39 16Zm308 0q23 0 39-16t16-39q0-23-16-39t-39-16q-23 0-39 16t-16 39q0 23 16 39t39 16ZM220 292h520q-24-26-92-41t-167-15q-118 0-181 13.5T220 292Zm82 502h356q35 0 58.5-27t23.5-62V585H220v120q0 35 23.5 62t58.5 27Z"/></svg>
//                             <span>Buses</span>
//                         </div>
//                     </Link>
//                 </li>

//                 <li>
//                     <Link to='/home/drivers' class="w-full flex items-center gap-x-1.5 group select-none">
//                         <div class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
//                             <div class="absolute top-0 left-0 w-full h-[102%] group-hover:translate-y-0 translate-y-8 bg-green-500 transition-all duration-300"></div>
//                         </div>
//                         <div class="bg-white text-gray-900 group-hover:bg-gray-200 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-4 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-base ">

//                             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 !fill-gray-500 group-hover:!fill-green-500 dark:fill-gray-600  transition-colors duration-200" viewBox="0 96 960 960"><path d="M80 896v-95q0-34 18-62.5t50-42.5q60-27 123.184-43.5Q334.367 636 400 636q33 0 66 4.667 33 4.666 66 11.333v53q-45 17-74.5 55T428 846v50H80Zm408 0v-51q0-22.892 11-42.446T530 772q36-18.5 74.5-27.75T684 735q41 0 80 9t74 28q20 10 31 29.869T880 845v51H488Zm196-221q-39.48 0-66.74-27.26Q590 620.48 590 581q0-39.48 27.26-66.74Q644.52 487 684 487q39.48 0 66.74 27.26Q778 541.52 778 581q0 39.48-27.26 66.74Q723.48 675 684 675ZM400 575q-63 0-106.5-43.5T250 425q0-63 43.5-106.5T400 275q63 0 106.5 43.5T550 425q0 63-43.5 106.5T400 575Z"/></svg>
//                             <span>Drivers</span>
//                         </div>
//                     </Link>
//                 </li>

//                 <li>
//                     <Link to='/home/profile' class="w-full flex items-center gap-x-1.5 group select-none">
//                         <div class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
//                             <div class="absolute top-0 left-0 w-full h-[102%] group-hover:translate-y-0 translate-y-8 bg-green-500 transition-all duration-300"></div>
//                         </div>
//                         <div class="bg-white text-gray-900 group-hover:bg-gray-200 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-4 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-base ">

//                             <svg class="h-5 w-5 !fill-gray-500 group-hover:!fill-green-500 dark:fill-gray-600  transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                                 <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
//                             </svg>
//                             <span>Profile</span>
//                         </div>
//                     </Link>
//                 </li>

//                 <li>
//                     <Link to='/home/contact' class="w-full flex items-center gap-x-1.5 group select-none">
//                         <div class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
//                             <div class="absolute top-0 left-0 w-full h-[102%] group-hover:translate-y-0 translate-y-8 bg-green-500 transition-all duration-300"></div>
//                         </div>
//                         <div class="bg-white text-gray-900 group-hover:bg-gray-200 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-5 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-base ">
//                             <svg class="h-4 w-4 !fill-gray-500 group-hover:!fill-green-500 dark:fill-gray-600  transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                                 <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd"/>
//                             </svg>
//                             <span>Contact</span>
//                         </div>
//                     </Link>
//                 </li>

//                 <li>
//                     <Link to='/home' class="w-full flex items-center gap-x-1.5 group select-none">
//                         <div class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
//                             <div class="absolute top-0 left-0 w-full h-[102%] group-hover:translate-y-0 translate-y-8 bg-green-500 transition-all duration-300"></div>
//                         </div>
//                         <div class="bg-white text-gray-900 group-hover:bg-gray-200 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-4 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-base ">

//                             <svg class="h-5 w-5 !fill-gray-500 group-hover:!fill-green-500 dark:fill-gray-600  transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                                 <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path>
//                             </svg>
//                             <span>Sign Out</span>
//                         </div>
//                     </Link>
//                 </li>

//             </ul>
//         </div>

//     </aside>

//     <div class="p-4 md:ml-64 bg-[#f7fafc] lg:h-screen h-auto">
//         <div class="p-4 rounded-lg  mt-14">

//             <Outlet></Outlet>

//         </div>

//     </div>
