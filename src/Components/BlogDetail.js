// import React from 'react';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// export default function BlogDetail() {
//   return (
//     <div>BlogDetail</div>
//   )
// }
// SinglePost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import posts from './blogdata'; // Import the posts data

export default function BlogDetail() {
  const { id } = useParams();

  // Find the post with the matching id
  const post = posts.find((p) => String(p.id) === id);

  if (!post) {
    // Handle case when post is not found
    return <div>Post not found</div>;
  }
  return (
    // <div className="bg-red py-24 sm:py-32">
    //   <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //     {/* Logo at the top */}
    //     <div className="flex items-center justify-center mb-8">
    //       <img src="/path/to/your/logo.png" alt="Logo" className="h-12 w-12 mr-2" />
    //       <div className="border-t border-gray-300 w-full mt-2" />
    //     </div>

    //     {/* Title Section */}
    //     <div className="text-l">
    //       <h2 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h2>
    //       <div className="flex justify-center">
    //         <div className="w-1/2">
    //           {/* Left Column: Image */}
    //           <img src={post.imageUrl1} className="w-10/12 rounded-xl object-cover" alt={post.title} />
    //         </div>
    //         <div className="w-1/2 pl-8">
    //           {/* Right Column: Description */}
    //           <p className="text-lg leading-6 text-gray-600">{post.description}</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{post.title}</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                {post.description}
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-0 -mt-10 pt-20 pl-7 p-15 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden mr-40">
          <img
            className="w-9/12 max-h-[85vh] rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[50rem]"
            src={post.imageUrl1}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                semper sed amet vitae sed turpis id.
              </p>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );





//   return (
//     <div className="bg-red px-6 md:px-20 lg:px-56 py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:mx-0 text-center">
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">{post.title}</h2>
//           <img src={post.imageUrl1} className='w-full rounded-2xl object-cover h-[300px]' alt={post.title} />
//           <p className="mt-5 text-lg leading-6 text-gray-600">{post.description}</p>
//         </div>
//       </div>
//     </div>
//   );
}

