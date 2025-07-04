// "use client";
// import { useState, useCallback, useEffect } from "react";
// import {
//         collection,
//         getDocs,
//          } from 'firebase/firestore';
// import { db } from '@/lib/firebase';

// export default function Home() {
//   const [isOpen, setIsOpen] = useState(false);
//   // db connect
//     // AboutMe db
//   const [AboutMe, setAboutMe] = useState<any[]>([]);
//   const AboutMeRef = collection(db, 'AboutMe');
//   const fetchAboutMe = async () => {
//     const snapshot = await getDocs(AboutMeRef);
//     const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//     setAboutMe(docs);
//   };
//   useEffect(() => {
//     fetchAboutMe();
//   }, []);

//   // Experience db
//   const [Experience, setExperience] = useState<any[]>([]);
//   const ExperienceRef = collection(db, 'Experience');
//   const fetchExperience = async () => {
//     const snapshot = await getDocs(ExperienceRef);
//     const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//     setExperience(docs);
//   };
//   useEffect(() => {
//     fetchExperience();
//   }, []);

//   // Contact db
//   const [Contact, setContact] = useState<any[]>([]);
//   const ContactRef = collection(db, 'Contact');
//   const fetchContact = async () => {
//     const snapshot = await getDocs(ContactRef);
//     const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//     setContact(docs);
//   };
//   useEffect(() => {
//     fetchContact();
//   }, []);

//   // Function for smooth scrolling
//   const handleSmoothScroll = useCallback((targetId: string) => {
//     setIsOpen(false); // Close the sidebar

//     if (targetId === "/") {
//       window.scrollTo({ top: 100, behavior: "smooth" });
//     } else {
//       const targetElement = document.querySelector(targetId);
//       if (targetElement) {
//         targetElement.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, []);
//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-800">
//       {/* Sticky Navbar */}
//       <div className="bg-blue-400 text-white py-6 text-center sticky top-0 px-5 shadow-md z-10">
//         <nav className="flex justify-end items-center">
//           <ul className="text-[18px] list-none flex gap-6 m-0">
//             <li>
//               {/* <a className="no-underline font-medium hover:underline" href="#About_Me">About Me</a> */}
//               <button
//                 onClick={() => handleSmoothScroll("#about")}
//                 className="hover:text-blue-600 hover:underline transition-colors duration-200 cursor-pointer"
//               >About Me</button>
//             </li>
//             <li>
//                <button
//                 onClick={() => handleSmoothScroll("#Experience")}
//                 className="hover:text-blue-600 hover:underline transition-colors duration-200 cursor-pointer"
//               >Experience</button>
//               {/* <a className="no-underline font-medium hover:underline" href="#Experience">Experience</a> */}
//               </li>
//             <li>
//               <button
//                 onClick={() => handleSmoothScroll("#Education")}
//                 className="hover:text-blue-600 hover:underline transition-colors duration-200 cursor-pointer"
//               >Education</button>
//               {/* <a className="no-underline font-medium hover:underline" href="#Education">Education</a> */}
//             </li>
//             <li>
//               {/* <a className="no-underline font-medium hover:underline" href="#Skills">Skills</a> */}
//               <button
//                 onClick={() => handleSmoothScroll("#Skills")}
//                 className="hover:text-blue-600 hover:underline transition-colors duration-200 cursor-pointer"
//               >Skills</button>
//             </li>
//             <li>
//               {/* <a className="no-underline font-medium hover:underline" href="#Projects">Projects</a> */}
//               <button
//                 onClick={() => handleSmoothScroll("#Projects")}
//                 className="hover:text-blue-600 hover:underline transition-colors duration-200 cursor-pointer"
//               >Projects</button>
//             </li>
//             <li>
//               {/* <a className="no-underline font-medium hover:underline" href="#Contact">Contact</a> */}
//               <button
//                 onClick={() => handleSmoothScroll("#Contact")}
//                 className="hover:text-blue-600 hover:underline transition-colors duration-200 cursor-pointer"
//               >Contact</button>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       {/* Hero Section */}
//       <div className="bg-blue-400 text-white py-10 text-center">
//         <h1 className="text-4xl font-bold">Manthavy SENVISET</h1>
//         <p className="text-lg mt-2">I am a Web Developer</p> 
//       </div>

     
//       {/* Profile Image Centered and Prominent */}
//         <div className="flex justify-between items-center pr-30 pl-30 ">
//           <img
//             src="/imgs/primo.jpg"
//             alt="Manthavy SENVISET"
//             className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover shadow-xl border-4 border-white -mt-10"
//           />
//           <img
//             src="/imgs/primo.jpg"
//             alt="Manthavy SENVISET"
//             className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover shadow-xl border-4 border-white -mt-10"
//           />
//         </div>
//       {/* Main Content */}
//       <div className="max-w-5xl mx-auto my-6 px-5 flex flex-col md:flex-row gap-8">

//         {/* Main Content */}
//         <main className="flex-1 bg-white shadow-md rounded-md">
//           {/* About Me */}
//           <section
//             className="md:gap-20 md:scroll-mt-25 scroll-mt-23 py-6 border-b border-gray-300 hover:bg-cyan-100 hover:scale-[1.03] transition-all duration-300 px-3 rounded-sm"
//             id="about"
//           >
//             <h2 className="text-2xl text-blue-700 font-semibold mb-2">About Me</h2>
//             {/* <p>Hi! I’m Manthavy, a creative and detail-oriented web developer with a strong passion for designing interactive, user-centric web experiences. With over 6 years of hands-on experience, I’ve worked on a variety of web applications ranging from small business sites to enterprise-level platforms. I enjoy solving complex problems, learning new tools, and staying up to date with the latest web development trends. When I’m not coding, I enjoy photography, tech blogging, and mentoring junior developers.</p> */}
//               {AboutMe.map((detial) => (
//                 <p className="flex text-justify">
//                       {detial.AboutMe}
//                 </p>
//                 ))}
//           </section>

//           {/* Experience */}
//           <section
//             className="md:gap-20 md:scroll-mt-25 scroll-mt-23 py-6 border-b border-gray-300 hover:bg-cyan-100 hover:scale-[1.03] transition-all duration-300 px-3 rounded-sm"
//             id="Experience"
//           >
//             <h2 className="text-2xl text-blue-700 font-semibold mb-2">Experience</h2>
//             <p><strong>CodeWave Solutions</strong> – Front-End Developer (2017 – Present)</p>
//             {/* <ul className="list-disc list-inside space-y-1">
//               <li>Led the redesign of major client websites, resulting in a 40% increase in user engagement.</li>
//               <li>Collaborated with UX designers and backend engineers to develop fully responsive SPAs using React and Next.js.</li>
//               <li>Integrated third-party APIs (like Google Maps, Stripe, and Firebase) to enhance app functionality.</li>
//               <li>Managed Git-based workflows, performed code reviews, and ensured best coding practices.</li>
//               <li>Actively contributed to improving performance metrics, accessibility, and SEO of the products.</li>
//             </ul> */}
//             <ul className="list-disc list-inside space-y-1">
//               {Experience.map((Experiences) => (
//                 <li key={Experiences.id}>
//                   {Experiences.Experience}
//                 </li>
//               ))}
//             </ul>

//           </section>

//           {/* Education */}
//           <section
//             className="md:gap-20 md:scroll-mt-25 scroll-mt-23 py-6 border-b border-gray-300 hover:bg-cyan-100 hover:scale-[1.03] transition-all duration-300 px-3 rounded-sm"
//             id="Education"
//           >
//             <h2 className="text-2xl text-blue-700 font-semibold mb-2">Education</h2>
//             <p><strong>National University of Laos</strong> – FEN in Telecommunication Engineering (2012 – 2016)</p>
//             <ul className="list-disc list-inside space-y-1">
//               <li>Focused on networking, programming, and digital systems.</li>
//               <li>Graduated with distinction, top 10% of class.</li>
//               <li>Built multiple projects, including a campus-wide attendance system and a basic IoT alert prototype.</li>
//             </ul>

//           </section>

//           {/* Skills */}
//           <section
//             className="md:gap-20 md:scroll-mt-25 scroll-mt-23 py-6 border-b border-gray-300 hover:bg-cyan-100 hover:scale-[1.03] transition-all duration-300 px-3 rounded-sm"
//             id="Skills"
//           >
//             <h2 className="text-2xl text-blue-700 font-semibold mb-2">Skills</h2>
//             <ul className="list-disc list-inside space-y-1">
//               <li><strong>Languages:</strong> HTML, CSS, JavaScript, TypeScript, PHP, SQL</li>
//               <li><strong>Frameworks & Libraries:</strong> React, Next.js, Node.js, Express, jQuery, CodeIgniter</li>
//               <li><strong>Styling:</strong> Tailwind CSS, Bootstrap, SCSS</li>
//               <li><strong>Tools & Platforms:</strong> Git & GitHub, Firebase, Vercel, Netlify, Docker (basic)</li>
//               <li><strong>Concepts:</strong> RESTful APIs, Responsive Design, MVC, SEO, CI/CD</li>
//             </ul>

//           </section>

//           {/* Projects */}
//           <section
//             className="md:gap-20 md:scroll-mt-25 scroll-mt-23 py-6 border-b border-gray-300 hover:bg-cyan-100 hover:scale-[1.03] transition-all duration-300 px-3 rounded-sm"
//             id="Projects"
//           >
//             <h2 className="text-2xl text-blue-700 font-semibold mb-2">Projects</h2>
//             <ul className="list-disc list-inside space-y-2">
//               <li>
//                 <strong>My Portfolio Website</strong> – Built with React and Tailwind CSS, showcasing my projects, skills, and contact info. Deployed using Vercel.
//               </li>
//               <li>
//                 <strong>Task Manager App</strong> – A full-stack MERN app with authentication, CRUD tasks, and user dashboard. Integrated JWT for secure login.
//               </li>
//               <li>
//                 <strong>E-commerce Platform</strong> – Developed a fully functional online store using React + Firebase. Includes shopping cart, order history, and user authentication.
//               </li>
//               <li>
//                 <strong>Weather Forecast App</strong> – Built with OpenWeatherMap API, shows real-time weather for searched cities. Implemented dark mode toggle.
//               </li>
//               <li>
//                 <strong>Blog CMS</strong> – A PHP & CodeIgniter based content management system for blogging, with admin login, WYSIWYG editor, and image upload.
//               </li>
//             </ul>

//           </section>

//           {/* Contact */}
//           <section
//             className="md:gap-20 md:scroll-mt-25 scroll-mt-23 py-6 transition-all duration-300 hover:bg-cyan-100 hover:scale-[1.03] px-3 rounded-sm"
//             id="Contact"
//           >
//             <h2 className="text-2xl text-blue-700 font-semibold mb-2">Contact</h2>
//             {/* <p>Email: <a href="mailto:lambopremo@gmail.com" className="text-blue-700 hover:underline">lambopremo@gmail.com</a></p>
//             <p>Phone: <a href="tel:+8562054194422" className="text-blue-700 hover:underline">+856 20 5419 4422</a></p>
//             <p>Facebook: <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Lambo.senviset" className="text-blue-700 hover:underline">facebook.com/Lambo.senviset</a></p>
//             <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">github.com/yourusername</a></p>
//             <p>LinkedIn: <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">linkedin.com/in/yourlinkedin</a></p>
//             <p>Portfolio: <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">yourportfolio.com</a></p> */}
         
//               {Contact.map((Contacts) => (
//                 <div>
//                   <p>Email: <a href="mailto:lambopremo@gmail.com" className="text-blue-700 hover:underline">{Contacts.Email}</a></p>
//                   <p>Phone: <a href="tel:+8562054194422" className="text-blue-700 hover:underline">{Contacts.Phone}</a></p>
//                   <p>Facebook: <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Lambo.senviset" className="text-blue-700 hover:underline">{Contacts.Facebook}</a></p>
//                   <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">{Contacts.GitHub}</a></p>
//                   <p>LinkedIn: <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">{Contacts.LinkedIn}</a></p>
//                   <p>Portfolio: <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">{Contacts.Portfolio}</a></p>
//                 </div>
                 
//               ))}
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// }

"use client";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/MainSections/AboutMe";
import Experience from "./components/MainSections/Experience";
import Education from "./components/MainSections/Education";
import Skills from "./components/MainSections/Skills";
import Projects from "./components/MainSections/Projects";
import Contact from "./components/MainSections/Contact";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
     {/* Hero Section */}
      <HeroSection></HeroSection>
      {/* Images */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mt-6 px-4">
        <img
          src="/imgs/rambo.jpg"
          alt="rambo"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-xl border-4 border-white"
        />
        <img
          src="/imgs/primo.jpg"
          alt="primo"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-xl border-4 border-white"
        />
      </div>
      {/* Main Content */}
      <div className="max-w-5xl mx-auto my-6 px-5 flex flex-col gap-8">
        <main className="bg-white shadow-md rounded-md">  
          {/* About Me */}
          <AboutMe></AboutMe>
          {/* Experience */}
          <Experience></Experience>
          {/* Education */}
          <Education></Education>
          {/* Skills */}
          <Skills></Skills>
          {/* Projects */}
          <Projects></Projects>
          {/* Contact */}
          <Contact></Contact>
        </main>
      </div>
    </div>
  );
}

