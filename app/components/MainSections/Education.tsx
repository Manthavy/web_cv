import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

function Education() {
   // Education db
  const [Education, setEducation] = useState<any[]>([]);
  const EducationRef = collection(db, 'Education');
  const fetchEducation = async () => {
    const snapshot = await getDocs(EducationRef);
    const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setEducation(docs);
  };
  useEffect(() => {
    fetchEducation();
  }, []);

  // EducationDetail db
  const [EducationDetail, setEducationDetail] = useState<any[]>([]);
  const EducationDetailRef = collection(db, 'EducationDetail');
  const fetchEducationDetail = async () => {
    const snapshot = await getDocs(EducationDetailRef);
    const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setEducationDetail(docs);
  };
  useEffect(() => {
    fetchEducationDetail();
  }, []);
    return (
      <section
            className="md:gap-20 md:scroll-mt-25 scroll-mt-23 py-6 border-b border-gray-300 hover:bg-cyan-100 hover:scale-[1.03] transition-all duration-300 px-3 rounded-sm"
            id="Education"
          >
            <h2 className="text-2xl text-blue-700 font-semibold mb-2">Education</h2>
            {Education.map((Educations) => (
              <p key={Educations.id} className="text-justify"><strong>{Educations.University}</strong> – {Educations.Faculty} </p>
            ))}
            <ul className="list-disc list-inside space-y-1">
              {EducationDetail.map((EducationDetails) => (
                <li key={EducationDetails.id}>
                  {EducationDetails.fiel}
                </li>
              ))}
            </ul>
            {/* <p><strong>National University of Laos</strong> – FEN in Telecommunication Engineering (2012 – 2016)</p> */}
            {/* <ul className="list-disc list-inside space-y-1">
              <li>Focused on networking, programming, and digital systems.</li>
              <li>Graduated with distinction, top 10% of class.</li>
            </ul> */}
          </section>
    );
}
export default Education;