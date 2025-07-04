import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

function Projects() {
    // Project db
  const [Project, setProject] = useState<any[]>([]);
  const ProjectRef = collection(db, 'Projects');
  const fetchProject = async () => {
    const snapshot = await getDocs(ProjectRef);
    const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setProject(docs);
  };
  useEffect(() => {
    fetchProject();
  }, []);

    return (
       <section
             className="md:gap-20 md:scroll-mt-25 scroll-mt-23 py-6 border-b border-gray-300 hover:bg-cyan-100 hover:scale-[1.03] transition-all duration-300 px-3 rounded-sm"
            id="Projects"
          >
            <h2 className="text-2xl text-blue-700 font-semibold mb-2">Projects</h2>
            {/* <ul className="list-disc list-inside space-y-2">
              <li>Portfolio Website</li>
              <li>Task Manager App</li>
              <li>E-commerce Platform</li>
            </ul> */}
            <ul className="list-disc list-inside space-y-1">
              {Project.map((Projects) => (
                <li key={Projects.id}>
                  {Projects.Projects}
                </li>
              ))}
            </ul>
          </section>
    );
}
export default Projects;