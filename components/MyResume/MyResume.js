"use client"


import { useState } from "react"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"

export default function Resume () {
    const [showSection , setShowSection] = useState(false)


    const handleShowSectionsSkill = () => {
        setShowSection(true)
    }
    const handleShowSectionsExperience = () => {
        setShowSection(false)
    }
     return(
        <div className="container mx-auto px-5 mb-50 lg:p-28"> 
     <div data-aos="fade-up">
     <p className="text-redBody lg:text-lg  font-bold text-center mt-16 lg:mt-0" id='myresume-section' >4+ Years of Experience</p>
        <h1 className="mt-5 mb-20 text-4xl lg:text-7xl font-black text-center">My Resume</h1>
     </div>

     <Tabs selectedTabClassName={'text-redBody shadow-3xl rounded-lg'}> 

        <TabList className="flex flex-col lg:flex-row bg-bgray rounded-lg items-center shadow-3xl mx-auto  lg:w-fit w-full mt-12 mb-20">
            <Tab onClick={handleShowSectionsSkill} className="transition cursor-pointer	 duration-500 font-bold lg:font-normal text-center rounded-l-lg text-xl hover:shadow-3xl hover:rounded-lg  hover:text-redBody  w-full lg:w-auto py-8 px-20 ">ProFessional Skills</Tab>
            <Tab onClick={handleShowSectionsExperience} className="transition cursor-pointer duration-500 font-bold lg:font-normal text-center rounded-r-lg text-xl hover:shadow-3xl hover:rounded-lg hover:text-redBody w-full lg:w-auto py-8 px-28 ">Experience</Tab>
        </TabList>
         
            
         {/* ُskills */}
          <TabPanel className="transition" >
            <div className="main w-full">
        <section className="skill content-card" >
          
            <div className="flex flex-col lg:flex-row justify-between w-full gap-10 lg:gap-28">
                <ul className="skills-list w-full">
                <div>
                <p className="text-redBody text-lg font-normal my-3">Features</p>
                  <h1 className="text-4xl font-bold mb-10">DESIGN SKILLS</h1>
            </div>
                <li className="skills-item">
                    <div className="title-wrapper">
                        <h3>Photoshop</h3>
                        <data value="100">100%</data>
                    </div>
                    <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{width: "100%"}}></div>
                    </div>
                </li>
                <li className="skills-item">
                    <div className="title-wrapper">
                        <h3>Figma</h3>
                        <data value="95">95%</data>
                    </div>
                    <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{width: "95%"}}></div>
                    </div>
                </li>
                <li className="skills-item">
                    <div className="title-wrapper">
                        <h3>Adob XD</h3>
                        <data value="90">90%</data>
                    </div>
                    <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{width: "90%"}}></div>
                    </div>
                </li>
                <li className="skills-item">
                    <div className="title-wrapper">
                        <h3>ADOBE ILLUSTRATOR</h3>
                        <data value="70">70%</data>
                    </div>
                    <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{width: "70%"}}></div>
                    </div>
                </li>
                <li className="skills-item">
                    <div className="title-wrapper">
                        <h3>DESIGN</h3>
                        <data value="90">90%</data>
                    </div>
                    <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{width: "90%"}}></div>
                    </div>
                </li>
                </ul>


                <ul className="skills-list w-full">
                <div>
                        <p className="text-redBody text-lg font-normal my-3">Features</p>
                    <h1 className="text-4xl font-bold mb-10">Development Skill</h1>
                </div>
                <li className="skills-item">
                    <div className="title-wrapper">
                        <h3>HTML</h3>
                        <data value="100">100%</data>
                    </div>
                    <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{width: "100%"}}></div>
                    </div>
                </li>
                <li className="skills-item">
                    <div className="title-wrapper">
                        <h3>CSS</h3>
                        <data value="95">95%</data>
                    </div>
                    <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{width: "95%"}}></div>
                    </div>
                </li>
                <li className="skills-item">
                    <div className="title-wrapper">
                        <h3>JAVASCRIPT</h3>
                        <data value="90">90%</data>
                    </div>
                    <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{width: "90%"}}></div>
                    </div>
                </li>
                <li className="skills-item">
                    <div className="title-wrapper">
                        <h3>PHP</h3>
                        <data value="70">70%</data>
                    </div>
                    <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{width: "70%"}}></div>
                    </div>
                </li>
                <li className="skills-item">
                    <div className="title-wrapper">
                        <h3>PYTHON</h3>
                        <data value="90">90%</data>
                    </div>
                    <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{width: "90%"}}></div>
                    </div>
                </li>
                </ul>

            </div>
        </section>
             </div>
        </TabPanel> 

         {/* Experience */}
        <TabPanel className="transition">
              
              <div className="flex flex-col lg:flex-row gap-28" >
              {/*  Experience 1 */}
             <div>
              {/* Title Experience 1 */}
             <div >
                 <p className="text-redBody text-lg">2010 - 2022</p>
                   <h1 className="text-5xl font-black my-5">Job Experience</h1>
                 </div>
                 {/*Crads Experience 1 */}
               <div className="experience-section relative">
  
  <div className="cards-resume w-5/12 btn-h bg-bgray btn-color  p-12  after:hover:bg-redBody">
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
   <div className="title-resume">
   <h1 className="text-bold text-3xl my-4 transition">Sr. Software Engineer</h1>
   <p className="text-bold my-4 text-TGray transition ">Google Out Tech - (2017 - Present)</p>
   </div>
   <div className="btn-h p-4 bg-bgray text-redBody">USA</div>
    </div>
      <hr className="border-[#1C1E22] my-4" style={{height:"1px"}}/>
      <p className="discription-card text-xl md:text-2xl leading-relaxed  text-TGray transition">Google’s hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up.</p>
     </div>
  
     <div className="cards-resume w-5/12 btn-h bg-bgray btn-color  p-12 after:hover:bg-redBody">
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
   <div className="title-resume">
   <h1 className="text-bold text-3xl my-4 transition">Web Developer & Trainer</h1>
   <p className="text-bold my-4 text-TGray transition ">Apple Developer Team - (2012 - 2016)</p>
   </div>
   <div className="btn-h p-4 bg-bgray text-redBody">MALAYSIA</div>
    </div>
      <hr className="border-[#1C1E22] my-4" style={{height:"1px"}}/>
      <p className="discription-card text-xl md:text-2xl leading-relaxed  text-TGray transition">A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy.</p>
     </div> 
  
     <div className="cards-resume w-5/12 btn-h bg-bgray btn-color  p-12 after:hover:bg-redBody">
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
   <div className="title-resume">
   <h1 className="text-bold text-3xl my-4 transition">Front-end Developer</h1>
   <p className="text-bold my-4 text-TGray transition ">Nike - (2020 - 2011)</p>
   </div>
   <div className="btn-h p-4 bg-bgray text-redBody">INDIA</div>
    </div>
      <hr className="border-[#1C1E22] my-4" style={{height:"1px"}}/>
      <p className="discription-card text-xl md:text-2xl leading-relaxed  text-TGray transition">The India economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy.</p>
     </div>        
                  </div>
             </div>
  
  
  
                {/*  Experience 2 */}
             <div>
                {/* Title Experience 2 */}
             <div >
                 <p className="text-redBody text-lg">2001 - 2020</p>
                   <h1 className="text-5xl font-black my-5">Trainer Experience</h1>
                 </div>
                   {/*Crads Experience 2 */}
               <div className="experience-section relative">
  
  <div className="cards-resume w-5/12 btn-h bg-bgray btn-color  p-12  after:hover:bg-redBody">
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
   <div className="title-resume">
   <h1 className="text-bold text-3xl my-4 transition">Gym Instructor</h1>
   <p className="text-bold my-4 text-TGray transition ">Rainbow Gym Center (2015 - 2020)</p>
   </div>
   <div className="btn-h p-4 bg-bgray text-redBody">DHAKA</div>
    </div>
      <hr className="border-[#1C1E22] my-4" style={{height:"1px"}}/>
      <p className="discription-card text-xl md:text-2xl leading-relaxed  text-TGray transition">The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.</p>
     </div>
  
     <div className="cards-resume w-5/12 btn-h bg-bgray btn-color  p-12 after:hover:bg-redBody">
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
   <div className="title-resume">
   <h1 className="text-bold text-3xl my-4 transition">Web Developer and Instructor</h1>
   <p className="text-bold my-4 text-TGray transition ">SuperKing College (2010 - 2014)</p>
   </div>
   <div className="btn-h p-4 bg-bgray text-redBody">CANADA</div>
    </div>
      <hr className="border-[#1C1E22] my-4" style={{height:"1px"}}/>
      <p className="discription-card text-xl md:text-2xl leading-relaxed  text-TGray transition">Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education.</p>
     </div> 
  
     <div className="cards-resume w-5/12 btn-h bg-bgray btn-color  p-12 after:hover:bg-redBody">
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
   <div className="title-resume">
   <h1 className="text-bold text-3xl my-4 transition">School Teacher</h1>
   <p className="text-bold my-4 text-TGray transition ">Kingstar Secondary School (2001 - 2010)</p>
   </div>
   <div className="btn-h p-4 bg-bgray text-redBody">NEVADA</div>
    </div>
      <hr className="border-[#1C1E22] my-4" style={{height:"1px"}}/>
      <p className="discription-card text-xl md:text-2xl leading-relaxed  text-TGray transition">Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale.</p>
     </div>        
                  </div>
             </div> 
             
  
              </div>
          </TabPanel> 
     </Tabs>
        </div>
    )
}