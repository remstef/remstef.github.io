import CardElement from "@/components/card-element";
import { CollapseElement } from "@/components/collapse-element";
import { MarkdownConfiguredExplicit } from "@/components/markdown-configured";
import ResponsiveCardsContainer from "@/components/responsive-cards-container";
import type { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "CV",
};

function Titlespan({ children }: Readonly<{ children: ReactNode }>) {
  return (
    // <span className="font-montserrat font-light text-xl" children={children} />
    <span className="font-pixel text-xl" children={children} />
  );
}
const T = Titlespan;

function Contentdivjustified({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div
      className="font-cmubright text-justify wrap-break-word whitespace-normal [hyphens:auto]"
      children={children}
    />
  );
}
const CJ = Contentdivjustified;

export default function CV() {
  return (
    <ResponsiveCardsContainer>
      <>
        {/* BEGIN */}

        {/* B: CONTACT INFORMATION */}
        <CardElement>
          <CollapseElement
            openByDefault={false}
            show_open_close_icon={true}
            titleBoxClassName=""
            title={<T>Contact Information</T>}
            children={
              <CJ>
                <MarkdownConfiguredExplicit>
                  {`<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">

##### Steffen Remus, Dr.rer.nat.
**Professional Title:** Postdoctoral Researcher & Lecturer  
**Location:** Hamburg, Germany  

**How to reach me** (preferably in that order):  
&nbsp;&nbsp;&nbsp;<i className="fa fa-github"></i>&nbsp;  [Github](https://github.com/remstef)  
&nbsp;&nbsp;&nbsp;<i className="fa fa-linkedin-square"></i>&nbsp;  [LinkedIn](https://www.linkedin.com/in/steffen-remus-54a62498)  
&nbsp;&nbsp;&nbsp;<i className="fa fa-university"></i>&nbsp;  [Institutional](https://lt.informatik.uni-hamburg.de/people/steffen-remus)  
&nbsp;&nbsp;&nbsp;<i className="ai ai-orcid"></i>&nbsp;  [OrcId](https://orcid.org/0000-0003-4303-8781)  
&nbsp;&nbsp;&nbsp;<i className="ai ai-google-scholar-square"></i>&nbsp;  [Google Scholar](https://scholar.google.com/citations?user=nDGCpDYAAAAJ)

`}
                </MarkdownConfiguredExplicit>
              </CJ>
            }
          />
        </CardElement>
        {/* E: CONTACT INFORMATION */}

        {/* B: PROFESSIONAL SUMMARY */}
        <CardElement>
          <CollapseElement
            openByDefault={false}
            titleBoxClassName=""
            title={<T>Professional Summary</T>}
            children={
              <CJ>
                <MarkdownConfiguredExplicit>
                  {`
A highly dedicated research engineer with over 10 years of professional hands-on experience in:

- Developing machine learning algorithms and managing large-scale data engineering projects, with a primary focus on natural language processing.
- Software engineering, utilizing industry-standard tools and processes.
- Leading and managing individuals and teams, fostering individual growth and collaboration.
- Administering and maintaining server infrastructure.

I actively share my expertise through my current role as a (co-) lecturer and advisor, and as a freelance consultant for industry partners. As a researcher, I thrive in fast-paced environments and I am committed to staying at the forefront of advancements in machine learning and AI. I approach challenges with patience and a strong attention to detail, and I excel in bridging technical expertise with effective communication, ensuring strong teamwork and maintaining high levels of motivation. My leadership style is collaborative and adaptive, focusing on fostering a positive team environment, encouraging open communication, and empowering individuals to reach their full potential.

`}
                </MarkdownConfiguredExplicit>
              </CJ>
            }
          />
        </CardElement>
        {/* E: PROFESSIONAL SUMMARY */}

        {/* B: Skills */}
        <CardElement>
          <CollapseElement
            openByDefault={false}
            titleBoxClassName=""
            title={<T>Skills & Expertise</T>}
            children={
              <CJ>
                <MarkdownConfiguredExplicit>
                  {`
###### Core Skills & Expertise

**Machine Learning & AI**  
- NLP, Deep Learning, GenAI, Information Extraction, Information Retrieval, LLMs, RAG

**Software Engineering**
- CI/CD, TDD, DevOps, Containerization, Microservices, Webservices

**Data Engineering**
- SQL, NoSQL, Vector Databases, MapReduce, Cluster Management, DFS, ETL

**Management & Leadership**
- Research Collaborations, Teaching, Supervision, Project Management, SCRUM, Workshop Organization

**Problem-Solving & Analysis**
- Critical Thinking, Algorithmic Design

---

###### Technical Skills

**Programming Languages**
- Python, Java, JavaScript, R, LaTeX, Scala, C#

**Data & ML Frameworks**
- PyTorch, Spark, Hadoop, Scikit-Learn

**Databases**
- PostgreSQL, PgVector, Milvus, ChromaDB, Elasticsearch, Redis, ...

**Cloud & DevOps**
- AWS, GCP, Azure, Docker, Kubernetes, Linux, SSH

---

###### Languages & Interests

**Languages**
- German (native), English (fluent), Spanish & French (basic)  

**Interests**
- Running, Kitesurfing, Road Biking, Technology, Problem-Solving  

`}
                </MarkdownConfiguredExplicit>
              </CJ>
            }
          />
        </CardElement>
        {/* E: Skills */}

        {/* B: Professional Experience */}
        <CardElement>
          <CollapseElement
            openByDefault={false}
            titleBoxClassName=""
            title={<T>Professional Experience</T>}
            children={
              <CJ>
                <MarkdownConfiguredExplicit>
                  {`
###### Language Technology Group & HITeC e.V., University of Hamburg, Germany
- **Postdoctoral Research Scientist** — since 07/2023  
- **Pre-doctoral Research Scientist** — 10/2016 to 06/2023

_Outline:_ Conducted original research under the guidance of Prof. Dr. Chris Biemann, participated in project-related events, offered consultancy services for industry partners, developed and delivered courses in machine learning, NLP, and software engineering, supervised theses, student helpers and interns, maintained technical infrastructure and ensured its uptime.

_Key Responsibilities:_
Teaching, Supervision, Research Projects  &amp; Server infrastructure maintenance: managing a Hadoop cluster that supports a distributed Elasticsearch cluster, two GPU servers, and several web servers; hosting demo applications as Docker containers.

_Key Achievements:_
- Successfully defended Ph.D. in June, 2023  
- Organized four research workshops and served 50+ times as a reviewer  
- Gained leadership qualifications during 19 teaching activities; supervised over 30 theses, interns, and student helpers  
- Contributed to over 30 small to medium sized software projects  
- (Co-)authored over 30 peer-reviewed publications

---

###### Freelance Consulting Services (Occasional & Part-Time)
- **Research Consultant (Ad hoc engagements)** — occasional since 2016  

_Outline:_ Provided project-based freelance consultancy services, specializing in NLP research
and offering expert guidance on various related topics.

_Clients include:_ Glanos GmbH (Munich), T-Systems (Darmstadt), Merck KGaA (Darmstadt)

---

###### International Business Machines (IBM)  

- **Research Intern, Zurich Research Lab, Rüschlikon, Switzerland** — 05/2015 to 11/2015  

_Supervisor:_ Dr. Abdel Labbi & Dr. Alfio Gliozzo  

_Outline:_ Collaborated closely with Angela Fahrni on supervised relation extraction and event detection, utilizing distributional features.

_Key Responsibilities:_  
Implemented a system for named entity recognition, cross-sentence relation extraction, and event detection using distributional features &amp; Conducted (small) internal crowdsourcing task for relation annotation.

&nbsp;

- **Research Intern, Thomas J. Watson Research Center, Yorktown Heights, NY, USA** — 07/2014 to 10/2014  

_Supervisor:_ Dr. Alfio Gliozzo

_Outline:_ Implemented, tested, and evaluated distributional semantic methods to enhance knowledge graphs for open and closed domains.

---

###### Technical University of Darmstadt & Deutsches Institut für Pädagogische Forschung (DIPF)
- **Researcher, KDSL Graduate School Program** — 04/2013 to 06/2016  

_Key Responsibilities:_ Project crawling & semantic structuring.  
_Key Achievements:_
Co-authored 6 peer-reviewed papers; organized a one-day IBM Watson workshop.

---

###### ConWeaver GmbH, Darmstadt, Germany
- **Software Engineer (full time)** — 10/2012 to 05/2013  
- **Software Engineer (part-time student assistant)** — 2009 to 09/2012

---

###### Other roles:
- Tutoring & teaching positions at Technical University of Darmstadt (2009–2012)  
- Systems Administrator at JDS-Sommer GmbH (2007–2008)  
- Part-time job at Greater Union Filmpalast (2002–2006)  
- (EWSD) Systems Specialist at Siemens AG (2000–2003)  
- Apprenticeship for Information and Telecommunications Systems Electronics Technician / Ausbildung als Informations- und Telekommunikationssystem Elektroniker (1997–2000)

`}
                </MarkdownConfiguredExplicit>
              </CJ>
            }
          />
        </CardElement>
        {/* E: Professional Experience */}

        {/* B: Education */}
        <CardElement>
          <CollapseElement
            openByDefault={false}
            titleBoxClassName=""
            title={<T>Education</T>}
            children={
              <CJ>
                <MarkdownConfiguredExplicit>
                  {`
**Dr.rer.nat. (Ph.D.) in Computer Science** — University of Hamburg, Germany, 2023  
  Thesis: “Domain Defining Context: On Domain-Dependent Corpus Expansion and Contextualized Semantic Structuring” — Advisor: Prof. Dr. Chris Biemann

**M.Sc. in Computer Science (Linguistics minor)** — Technical University of Darmstadt, Germany, 2012  
  Thesis: “Automatically Identifying Lexical Chains by Means of Statistical Methods – A Knowledge-Free Approach” — Nominated for best thesis award (GSCL) — Advisor: Prof. Dr. Chris Biemann

**B.Sc. in Computer Science** — Technical University of Darmstadt, Germany, 2009  
  Thesis: “Next-Gen IDE – Evaluation Of Statistical Approaches For Intelligent Code Completion” — Advisor: Dr. Marcel Bruch

**State Certified Engineer (Techniker)** in Computer Systems & Networking — Werner von Siemens Professional School, Frankfurt, 2005

**State Certified Apprenticeship** in Information and Telecommunications Systems Electronics Technician — Siemens AG, Frankfurt, 2000

**High School** — Brüder Grimm Realschule, Frankfurt, 1997

`}
                </MarkdownConfiguredExplicit>
              </CJ>
            }
          />
        </CardElement>
        {/* E: Education */}

        {/* B: Scientific Experience */}
        <CardElement>
          <CollapseElement
            openByDefault={false}
            titleBoxClassName=""
            title={<T>Scientific Experience</T>}
            children={
              <CJ>
                <MarkdownConfiguredExplicit>
                  {`
###### Volunteering
- Member of the appointments committee (Berufungskommission) for the Machine Learning professorship, University of Hamburg (2020/21)

###### Certifications
- Attended 28th European Summer School in Logic, Language and Information (ESSLI), Bolzano-Bozen, Aug 2016

###### Research Projects
- JOIN-T2: Joining Ontologies with Text (03/2019–02/2022)  
- WebAnno meets EXMARaLDA (06/2017–01/2019)  
- BIMDanube: Network of Excellence on Biomedical Information Management in the Danube Region (01/2017–03/2019)  
- JOIN-T: Joining Ontologies and Semantics Induced from Text (2016–2017)  
- Knowledge Discovery in Scientific Literature (KDSL) (04/2013–06/2016)

###### Visiting Researcher
- Bar Ilan University, Ramat Gan, Tel Aviv, Israel — 04/2014–06/2014 (with Omer Levy & Prof. Ido Dagan)  
- Indian Institute of Technology (IIT) Kharagpur — 02/2019–04/2019 (with Animesh Mukherjee & Pawan Goyal)

###### Organizing Committee & Program Committee
- Organizer/Co-organizer for GermEval shared tasks (2019, 2020) and multiple workshops (Biomedical Information Management 2018 & 2019; IBM Watson workshop 2014)  
- Reviewer for conferences: EMNLP, ACL, AAAI, CONLL, *SEM, NAACL, EACL, AACL-IJCNLP, Coling, LREC, GSCL/KONVENS, COLM  
- Reviewer for journals: TPAMI, TACL, NLE  
- Workshop reviewing: TextGraphs, SemEval, WAC
`}
                </MarkdownConfiguredExplicit>
              </CJ>
            }
          />
        </CardElement>
        {/* E: Scientific Experience */}

        {/* B: Teaching Experience */}
        <CardElement>
          <CollapseElement
            openByDefault={false}
            titleBoxClassName=""
            title={<T>Teaching Experience</T>}
            children={
              <CJ>
                <MarkdownConfiguredExplicit>
                  {`
###### Curricula
- **University of Hamburg:** multiple lecturer and teaching assistant roles in Research Software Engineering, Python for Computational Science, Deep Learning for NLP, Web Interfaces for Language Processing Systems, Applications with Aspects on Language Technology, Software Engineering I, Deep Learning for Unstructured Data, Statistical Methods of Language Technology, Machine Learning I, Practical Applications in NLP.  
- **Technical University of Darmstadt:** Lecturer and teaching assistant roles including Q&A Technologies behind IBM Watson, Algorithms of Language Technology, General Computer Science.

###### Thesis Supervision
I provide dedicated supervision for student helpers, inters and academic theses, including ten Bachelor’s theses, eleven Master’s theses and three independent studies up to date. I regularly lead one-on-one progress meetings on a weekly or bi-weekly basis, ensuring consistent academic development, timely completion, and overall project success
`}
                </MarkdownConfiguredExplicit>
              </CJ>
            }
          />
        </CardElement>
        {/* E: Teaching Experience */}

        {/* B: Awards & Grants */}
        <CardElement>
          <CollapseElement
            openByDefault={false}
            titleBoxClassName=""
            title={<T>Awards & Grants</T>}
            children={
              <CJ>
                <MarkdownConfiguredExplicit>
                  {`
- 2022: Mentor for a student research project awarded €10,000.  
- 2019: Awarded over €3,000 by the German DAAD office for international research in India.  
- 2015: Best mentoring award for “Algorithms of Language Technology” exercise lab.  
- 2013, 2014, 2016: ACL Travel Grants.  
- 2013–2016: KDSL Graduate School Fellowship.  
- 2013: Travel grant of €1,000 from Freunde der TU-Darmstadt e.V.
`}
                </MarkdownConfiguredExplicit>
              </CJ>
            }
          />
        </CardElement>
        {/* E: Awards & Grants */}

        {/* B: Awards & Grants */}
        <CardElement>
          <CollapseElement
            openByDefault={false}
            titleBoxClassName=""
            title={<T>Publications & Code</T>}
            children={
              <CJ>
                <MarkdownConfiguredExplicit>
                  {`
- [(Co-)authored over 30+ peer-reviewed papers.](./?tab=Publications)
- Contributed to 50+ open source project repositories on various version control platforms (github, bitbucket, sourceforge, ...) of which I am maintainer/creator of 20+ projects.
`}
                </MarkdownConfiguredExplicit>
              </CJ>
            }
          />
        </CardElement>
        {/* E: Awards & Grants */}

        {/* B: CV as PDF */}
        <CardElement>
          <CollapseElement
            openByDefault={false}
            titleBoxClassName=""
            show_open_close_icon={false}
            title={
              <span className="font-pixel text-xl text-center w-full mr-3">
                Download CV as PDF
              </span>
            }
            children={
              <div className="flex justify-center">
                <div className="flex-1 justify-center content-center items-center text-center">
                  <Link
                    role="button"
                    href="./pdf/cv-1page-nopic.pdf"
                    className="w-64 px-2 py-2 mx-8 my-2 btn btn-primary text-primary-content shadow"
                    children={
                      <span className="font-pixel text-primary-content">
                        Short (1-page) PDF
                      </span>
                    }
                  />
                  <Link
                    role="button"
                    href="./pdf/cv-full.pdf"
                    className="w-64 px-2 py-2 mx-8 my-2 btn btn-secondary"
                    children={
                      <span className="font-pixel text-secondary-content">
                        Full PDF
                      </span>
                    }
                  />
                </div>
              </div>
            }
          />
        </CardElement>
        {/* E: CV as PDF */}

        {/* B: All as MD */}
        {/* <CardElement><CollapseElement 
openByDefault={false}
title = { <T>&nbsp;</T> }
children = {
<CJ>
  <MarkdownLoader filename="./cv/cv.md" />
</CJ>
}/></CardElement>
*/}
        {/* E: All as MD */}

        {/* END */}
      </>
    </ResponsiveCardsContainer>
  );
}
