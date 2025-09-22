import Link from "next/link";
export default function Labs() {
 return (
   <div id="wd-labs">
     <h1>Labs</h1>

     <h1>Tanishq Neela-Section 04 CRN: 18616</h1>
     <ul>
       <li>
         <Link href="/Labs/Lab1" id="wd-lab1-link">
           Lab 1: HTML Examples </Link>
       </li>
       <li>
         <Link href="/Labs/Lab2" id="wd-lab2-link">
           Lab 2: CSS Basics </Link>
       </li>
       <li>
         <Link href="/Labs/Lab3" id="wd-lab3-link">
           Lab 3: JavaScript Fundamentals </Link>
       </li>
       <li>
       <Link href="/" id="wd-lab3-link">
         Kambaz </Link> </li>
       
       <h2>Source code repositories</h2>
            
          <li><a href="https://github.com/tanishq-007/nextjs-kambaz" id="wd-github">Github Repository for the source code</a></li>


          <h2>Kambaz</h2>
        <li><Link href="/">Back to Kambaz</Link>     </li>    
      
            
     </ul>
   </div>
);}
