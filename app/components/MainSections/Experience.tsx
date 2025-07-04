import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

function Experience() {
    // Experience db
  const [Experience, setExperience] = useState<any[]>([]);
  const ExperienceRef = collection(db, 'Experience');
  const fetchExperience = async () => {
    const snapshot = await getDocs(ExperienceRef);
    const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setExperience(docs);
  };
  useEffect(() => {
    fetchExperience();
  }, []);

    return (
       <section
           className="md:gap-20 md:scroll-mt-25 scroll-mt-23 py-6 border-b border-gray-300 hover:bg-cyan-100 hover:scale-[1.03] transition-all duration-300 px-3 rounded-sm"
            id="Experience"
          >
            <h2 className="text-2xl text-blue-700 font-semibold mb-2">Experience</h2>
            <ul className="list-disc list-inside space-y-1">
              {Experience.map((Experiences) => (
                <li key={Experiences.id}>
                  {Experiences.Experience}
                </li>
              ))}
            </ul>
          </section>
    );
}
export default Experience;