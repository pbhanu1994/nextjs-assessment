import React from 'react';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import { responsive } from '../services/posts';
import 'react-multi-carousel/lib/styles.css';

export default function Posts() {
    return (
        <div className="m-5 mb-10">
            <div>
                <article className="flex prose lg:prose-xl">
                    <h2 className="pr-10">Recent Posts</h2>
                    <Link href="/not-found">View all posts</Link>
                </article>
            </div>
            <div>
                <Carousel swipeable={true}
                    draggable={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlaySpeed={1000}
                    transitionDuration={500}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    <div className="mr-5">
                        <div className="max-w-sm w-full lg:max-w-full lg:flex">
                            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div className="flex items-center mb-3">
                                <img className="w-10 h-10 rounded-full mr-4" src="./img/avatar/1.png" alt="Avatar of Jonathan Reinink" />
                                <div className="text-sm">
                                    <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                                    <p className="text-gray-600">Aug 18</p>
                                </div>
                            </div>
                            <div className="mb-7">
                                <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                                <img className="w-full h-32 sm:h-48 object-cover" src="./img/posts/1.jpg" alt="Starbucks Coffee" />
                            </div>
                            </div>
                         </div>
                    </div>
                    <div className="mr-5">
                        <div className="max-w-sm w-full lg:max-w-full lg:flex">
                            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div className="flex items-center mb-3">
                                <img className="w-10 h-10 rounded-full mr-4" src="./img/avatar/1.png" alt="Avatar of Jonathan Reinink" />
                                <div className="text-sm">
                                    <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                                    <p className="text-gray-600">Aug 18</p>
                                </div>
                            </div>
                            <div className="mb-7">
                                <img className="mb-3 w-full h-32 sm:h-48 object-cover" src="./img/posts/2.jpg" alt="Starbucks Coffee" />
                                <p className="text-gray-700 text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                            </div>
                            </div>
                         </div>
                    </div>
                    <div className="mr-5">
                        <div className="max-w-sm w-full lg:max-w-full lg:flex">
                            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div className="flex items-center mb-3">
                                <img className="w-10 h-10 rounded-full mr-4" src="./img/avatar/1.png" alt="Avatar of Jonathan Reinink" />
                                <div className="text-sm">
                                    <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                                    <p className="text-gray-600">Aug 18</p>
                                </div>
                            </div>
                            <div className="mb-7">
                                    <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                                    <p className="text-gray-700 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. <br /></p>
                                    <br />
                                    <p className="text-gray-700 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                            </div>
                            </div>
                         </div>
                    </div>
                    <div className="mr-5">
                        <div className="max-w-sm w-full lg:max-w-full lg:flex">
                            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div className="flex items-center mb-3">
                                <img className="w-10 h-10 rounded-full mr-4" src="./img/avatar/1.png" alt="Avatar of Jonathan Reinink" />
                                <div className="text-sm">
                                    <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                                    <p className="text-gray-600">Aug 18</p>
                                </div>
                            </div>
                            <div className="mb-8">
                                <article className="flex prose lg:prose-xl">
                                    <h1 className="pr-10">Can coffee make you a better developer?</h1>
                                </article>
                            </div>
                            </div>
                         </div>
                    </div>
                </Carousel>
            </div>
        </div>
  );
};