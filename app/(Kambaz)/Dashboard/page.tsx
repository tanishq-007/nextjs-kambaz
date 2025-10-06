import Link from "next/link";
import Image from "next/image";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from "react-bootstrap";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">

        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
           < Link href="/Courses/1234" 
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
      <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Full Stack software developer</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
          </Link>
          </Card>
          </Col>
          


      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
           < Link href="/Courses/2001" 
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/nodejs.jpg" width="100%" height={160}/>
      <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS2001 Node JS</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Backend Development</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
          </Link>
          </Card>
          </Col>



      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
           < Link href="/Courses/2002" 
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/python.jpg" width="100%" height={160}/>
      <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS2002 Python Programming</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Intro to python</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
          </Link>
          </Card>
          </Col>



          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
           < Link href="/Courses/2003" 
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/java.jpg" width="100%" height={160}/>
      <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS2003 Java-OOP</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Intro to oops</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
          </Link>
          </Card>
          </Col>



          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
           < Link href="/Courses/2004" 
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/ml.jpg" width="100%" height={160}/>
      <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS2004 Machine Learning</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Ai and data science</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
          </Link>
          </Card>
          </Col>





          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
           < Link href="/Courses/2005" 
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/dbms.jpg" width="100%" height={160}/>
      <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS2005 Databases </CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        SQL and NOSql</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
          </Link>
          </Card>
          </Col>




          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
           < Link href="/Courses/2006" 
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/cloud.jpg" width="100%" height={160}/>
      <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS2006 Cloud Computing</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Azure, GCP and AWS</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
          </Link>
          </Card>
          </Col>





          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
           < Link href="/Courses/2007" 
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/cybersecurity.jpg" width="100%" height={160}/>
      <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS2007 CyberSecurity</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Ethical Hacking</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
          </Link>
          </Card>
          </Col>




          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
           < Link href="/Courses/2008" 
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/mobile.jpg" width="100%" height={160}/>
      <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS2008 Mobile App Development</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Android Studio</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
          </Link>
          </Card>
          </Col>



          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
           < Link href="/Courses/2009" 
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/dsa.jpg" width="100%" height={160}/>
      <CardBody>
          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS2009 Data Structures and Algorithms</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        problem Solving</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
          </Link>
          </Card>
          </Col>
</Row>


        
      </div>
    </div>
);}
