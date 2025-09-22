import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt="Reactjs course"/>
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
             </div>

        <div className="wd-dashboard-course">
    <Link href="/Courses/2001" className="wd-dashboard-course-link">
      <Image src="/images/nodejs.jpg" width={200} height={150} alt="Nodejs course"/>
      <div>
        <h5> CS2001 Node JS </h5>
        <p className="wd-dashboard-course-title">Backend Development</p>
        <button> Go </button>
      </div>
    </Link>
  </div>

  <div className="wd-dashboard-course">
    <Link href="/Courses/2002" className="wd-dashboard-course-link">
      <Image src="/images/python.jpg" width={200} height={150} alt="Python course"/>
      <div>
        <h5> CS2002 Python Programming </h5>
        <p className="wd-dashboard-course-title">Intro to Python</p>
        <button> Go </button>
      </div>
    </Link>
  </div>

  <div className="wd-dashboard-course">
    <Link href="/Courses/2003" className="wd-dashboard-course-link">
      <Image src="/images/java.jpg" width={200} height={150} alt="Java course"/>
      <div>
        <h5> CS2003 Java OOP </h5>
        <p className="wd-dashboard-course-title">Object-Oriented Programming</p>
        <button> Go </button>
      </div>
    </Link>
  </div>

  <div className="wd-dashboard-course">
    <Link href="/Courses/2004" className="wd-dashboard-course-link">
      <Image src="/images/ml.jpg" width={200} height={150} alt="Machine Learning course"/>
      <div>
        <h5> CS2004 Machine Learning </h5>
        <p className="wd-dashboard-course-title">AI & Data Science</p>
        <button> Go </button>
      </div>
    </Link>
  </div>

  <div className="wd-dashboard-course">
    <Link href="/Courses/2005" className="wd-dashboard-course-link">
      <Image src="/images/dbms.jpg" width={200} height={150} alt="Database course"/>
      <div>
        <h5> CS2005 Databases </h5>
        <p className="wd-dashboard-course-title">SQL & NoSQL</p>
        <button> Go </button>
      </div>
    </Link>
  </div>

   <div className="wd-dashboard-course">
    <Link href="/Courses/2006" className="wd-dashboard-course-link">
      <Image src="/images/cloud.jpg" width={200} height={150} alt="Cloud course"/>
      <div>
        <h5> CS2006 Cloud Computing </h5>
        <p className="wd-dashboard-course-title">AWS, Azure, GCP</p>
        <button> Go </button>
      </div>
    </Link>
  </div>

  
  <div className="wd-dashboard-course">
    <Link href="/Courses/2007" className="wd-dashboard-course-link">
      <Image src="/images/cybersecurity.jpg" width={200} height={150} alt="Cybersecurity course"/>
      <div>
        <h5> CS2007 Cybersecurity </h5>
        <p className="wd-dashboard-course-title">Ethical Hacking & Security</p>
        <button> Go </button>
      </div>
    </Link>
  </div>

 
  <div className="wd-dashboard-course">
    <Link href="/Courses/2008" className="wd-dashboard-course-link">
      <Image src="/images/dsa.jpg" width={200} height={150} alt="DSA course"/>
      <div>
        <h5> CS2008 Data Structures & Algorithms </h5>
        <p className="wd-dashboard-course-title">Problem Solving</p>
        <button> Go </button>
      </div>
    </Link>
  </div>

  
  <div className="wd-dashboard-course">
    <Link href="/Courses/2009" className="wd-dashboard-course-link">
      <Image src="/images/mobile.jpg" width={200} height={150} alt="Mobile course"/>
      <div>
        <h5> CS2009 Mobile App Development </h5>
        <p className="wd-dashboard-course-title">Android & iOS</p>
        <button> Go </button>
      </div>
    </Link>
  </div>


        
      </div>
    </div>
);}
