import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

function AboutMe() {
    // AboutMe db
      const [AboutMe, setAboutMe] = useState<any[]>([]);
      const AboutMeRef = collection(db, 'AboutMe');
      const fetchAboutMe = async () => {
        const snapshot = await getDocs(AboutMeRef);
        const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setAboutMe(docs);
      };
      useEffect(() => {
        fetchAboutMe();
      }, []);
    return (
      <section
           className="md:gap-20 md:scroll-mt-25 scroll-mt-23 py-6 border-b border-gray-300 hover:bg-cyan-100 hover:scale-[1.03] transition-all duration-300 px-3 rounded-sm"
            id="about"
          >
            <h2 className="text-2xl text-blue-700 font-semibold mb-2">About Me</h2>
            {AboutMe.map((detail) => (
              <p key={detail.id} className="text-justify">{detail.AboutMe}</p>
            ))}
          </section>
    );
}
export default AboutMe;