import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

function Contact() {
   // Contact db
  const [Contact, setContact] = useState<any[]>([]);
  const ContactRef = collection(db, 'Contact');
  const fetchContact = async () => {
    const snapshot = await getDocs(ContactRef);
    const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setContact(docs);
  };
  useEffect(() => {
    fetchContact();
  }, []);

    return (
       <section
            className="md:gap-20 md:scroll-mt-25 scroll-mt-23 py-6 border-b border-gray-300 hover:bg-cyan-100 hover:scale-[1.03] transition-all duration-300 px-3 rounded-sm"
            id="Contact"
          >
            <h2 className="text-2xl text-blue-700 font-semibold mb-2">Contact</h2>
            {Contact.map((Contacts) => (
              <div key={Contacts.id}>
                <p>Email: <a href="mailto:lambopremo@gmail.com" className="text-blue-700 hover:underline">{Contacts.Email}</a></p>
                <p>Phone: <a href="tel:+8562054194422" className="text-blue-700 hover:underline">{Contacts.Phone}</a></p>
                <p>Facebook: <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Lambo.senviset" className="text-blue-700 hover:underline">{Contacts.Facebook}</a></p>
                <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">{Contacts.GitHub}</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">{Contacts.LinkedIn}</a></p>
                <p>Portfolio: <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">{Contacts.Portfolio}</a></p>
              </div>
            ))}
          </section>
    );
}
export default Contact;