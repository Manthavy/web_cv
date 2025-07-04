import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

function Skills() {
    // Skill db
  const [Skill, setSkill] = useState<any[]>([]);
  const SkillRef = collection(db, 'Skills');
  const fetchSkill = async () => {
    const snapshot = await getDocs(SkillRef);
    const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setSkill(docs);
  };
  useEffect(() => {
    fetchSkill();
  }, []);

    return (
       <section
            className="md:gap-20 md:scroll-mt-25 scroll-mt-23 py-6 border-b border-gray-300 hover:bg-cyan-100 hover:scale-[1.03] transition-all duration-300 px-3 rounded-sm"
            id="Skills"
          >
            <h2 className="text-2xl text-blue-700 font-semibold mb-2">Skills</h2>
            
            <ul className="list-disc list-inside space-y-1">
              {Skill.map((Skills) => (
                <li key={Skills.id}>
                  <strong>{Skills.Skills}</strong>:{Skills.DetailSkills}
                </li>
              ))}
            </ul>

          </section>
    );
}
export default Skills;