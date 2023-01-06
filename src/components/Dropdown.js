import React from 'react';
import '../App.css';
import {useState} from 'react';
import arrow from '../images/Arrow-down.png';
import ONGC from '../images/ONGC.png';
import book1 from '../images/Book.png';
import book2 from '../images/Mask Group 2.png';
import addicon from '../images/add-icon.png';
import deletebutton from '../images/delete-button.png';
import save from '../images/save.png';
import edit from '../images/Edit.png';
import { Rotate } from 'react-reveal';
import { isStyledComponent } from 'styled-components';


function Dropdown({selected,setSelected,addNew,setAddNew,edit,setEdit,Color,OpenAlert,showAlert,confirm,setConfirm}) {

    const arr = [
        {imgSrc:ONGC,
         name:"ONGC Corporate Info",
         id:"0",
         text : "The Oil and Natural Gas Corporation (ONGC) is an Indian government-owned crude oil and natural gas corporation. Its registered office is in New Delhi. The operations are overseen by the Ministry of Petroleum and Natural Gas. It is the largest government-owned-oil and gas exploration and production corporation in the country, and produces around 70% of India’s crude oil (equivalent to around 57% of the country’s total demand) and around 84% of its natural gas. In November 2010, the Government of India conferred the Maharatna status to ONGC. Director (HR) of Oil and Natural Gas Corporation Limited (ONGC) Dr Alka Mittal took additional charge as the Chairman and Managing Director (CMD) of the Energy Maharatna on 4 January 2022. She has become the first woman to head one of India’s most valuable public sector companies. It is the largest government-owned-oil and gas exploration and production corporation in the country, and produces around 70% of India’s crude oil (equivalent to around 57% of the country’s total demand) and around 84% of its natural gas. In November 2010, the Government of India conferred the Maharatna status to ONGC. Director (HR) of Oil and Natural Gas Corporation Limited (ONGC) Dr Alka Mittal took additional charge as the Chairman and Managing Director (CMD) of the Energy Maharatna on 4 January 2022. She has become the first woman to head one of India’s most valuable public sector companies."
        },
        {imgSrc:book1,
         name:"Comprehension Exercise",
         id:"1",
         text : "Across the landscape of Indian private universities, there are faculty originating from several corners: from Syria to Singapore, Taiwan to Tanzania, from Hong Kong to Hungary. Professor Armin Rosencranz, a lawyer and political scientist from Princeton earlier taught at Berkeley and Stanford; professor Stephen Marks, a dean at Jindal School of Public Health and Human Development lives on the Sonipat campus, and was formerly with Harvard T. H. Chan School of Public Health. Magdalena Golebiowska, who teaches western vocals, has taught in several universities but her treasured achievement was teaching at the African Music School in Central African Republic. “We have been conducting recruitment drives in major cities in the USA, UK, Canada and Australia and many other countries to attract candidates from international academia. Also, we conduct campus recruitment drives in top international universities such as Stanford University, Harvard University, Tufts University, University of Oxford, University of Cambridge, King’s College, and QMUL, among many other top universities to hire faculty members,” said Jitu Mishra, chief operating officer and senior director HR, OP Jindal Global University. Currently, 114 international faculty members from 46 different regions are working at JGU. At Plaksha University, 90% full-time faculty have international experience; 12 visiting faculty are international citizens. The university recently concluded a recruitment drive in the US across 7 US cities in 15+ universities where they made presentations to postdoctoral fellows and PhDs, who may be interested in an Indian innings. Out of a total strength of 250 teachers, Shoolini University has 32 international faculty members, apart from 31 faculty members of Indian origin who have either taughtor undertaken research in foreign universities. “International faculty members are happy to live in India, and we are happy to have them as they give our students access to a vibrant academic and research environment. We have also provided accommodation to our foreign faculty members from the US, Taiwan, Syria and many other countries, either on the campus itself or some nearby loca-tion,” said P K Khosla, chancellor, Shoolini University. At Amrita Vishwa Vidyapeetham, of 2,065 faculty, 105 are international, defined by the university as those with a PhD from a foreign university or has at least two years of experience in teaching or research in a foreign university. Atish Chatopadhyay, vice chancellor, Vijaybhoomi University, said it has 6 international faculty members recruited via specific contacts in leading foreign higher education institutes that offer specialist music programmes. “Most of our international faculty members come on a 1to 2-year fulltime contract. In our recent experience since 2018, most faculty members renewed their contracts for at least one more term of 1-2 years,” said Chatopadhyay. At most other universities, too, international faculty members generally come in visiting and part-time roles, and some even spend their entire sabbatical. Then, there is the diaspora academics that immigra-ted from one country to another, often obtained citizenship in that country, and are lured “home”. Perks often include a higher compensation package, research grants, funding for conferences, publication rewards, apart from accommodation, health insurance and other campus facilities. “Recruiting overseas faculty, especially in the STEM fields, can be an expensive proposition as faculty want research capacity, infrastructure, and remuneration that is at least on par with global standards. For India, universities are recruiting from overseas because the faculty members come with global teaching and research experience that are not as easily found in India. Initially, many of these faculty may come for short-term visiting roles but as the research infrastructure in Indian universities grow, it will be easier to attract faculty on a more full-time basis,” said George Joseph, who works with Indian universities on their global strategies."
        },
        {imgSrc:book2,
         name:"Legal Information",
         id:"2",
         text : "Though the Panchayati Raj Institutions have been in existence for along time, it has been observed that these institutions have not been able to acquire the status and dignity of viable and responsive people’s bodies due to a number of reasons including absence of regular elections, prolonged supersessions, insufficient representation of weaker sections like Scheduled Castes, Scheduled Tribes and women, inadequate devolution of powers and lack of financial resources. 2. Article 40 of the Constitution which enshrines one of the Directive Principles of State Policy lays down that the State shall take steps to organise village panchayats and endow them with such powers and authority as may be necessary to enable them to function as units of self-government. In the light of the experience in the last forty years and in view of the short-comings which have been observed, it is considered that there is an imperative need to enshrine in the Constitution certain basic and essential features of Panchayati Raj Institutions to impart certainty, continuity and strength to them. 3. Accordingly, it is proposed to add a new Part relating to Panchayats in the Constitution to provide for among other things, Gram Sabha in a village or group of villages; constitution of Panchayats at village and other level or levels; direct elections to all seats in Panchayats at the village and intermediate level, if any, and to the offices of Chairpersons of Panchayats at such levels; reservation of seats for the Scheduled Castes and Scheduled Tribes in proportion to their population for membership of Panchayats and office of Chairpersons in Panchayats at each level; reservation of not less than one-third of the seats for women; fixing tenure of 5 years for Panchayats and holding elections within a period of 6 months in the event of supersession of any Panchayat; disqualifications for membership of Panchayats; devolution by the State Legislature of powers and responsibilities upon the Panchayats with respect to the preparation of plans for economic developments and social justice and for the implementation of development schemes; sound finance of thePanchayats by securing authorisation from State Legislatures for grants-in-aid to the Panchayats from the Consolidated Fund of theState, as also assignment to, or appropriation by, the Panchayats of the revenues of designated taxes, duties, tolls and fees; setting up of a Finance Commission within one year of the proposed amendment and thereafter every 5 years to review the financial position of Panchayats; auditing of accounts of the Panchayats; powers of StateLegislatures to make provisions with respect to elections to Panchayats under the superintendence, direction and control of the chief electoral officer of the State; application of the provisions of the said Part to Union territories; excluding certain States and areas from the application of the provisions of the said Part; continuance of existing laws and Panchayats until one year from the commencement of the proposed amendment and barring interference by courts in electoral matters relating to Panchayats."
        },
    ];
    
    var [content,setContent] = useState(arr);

    const [isActive, setIsActive] = useState(false);

    //For Add New Dropdown
    const[newObject,setNewObject] = useState({imgSrc:addicon,name:"",id:"3",text:""});
    
    function handleChange(e){
        const {name, value} = e.target;
        setNewObject({imgSrc:addicon,name:value,id:"3",text:""})   
    }

    // Save new Category
    function handleClick(){
        setContent(prevcontent =>{
            return[
                ...prevcontent,
                newObject
            ]
        })
        setIsActive(true);
    }

    // Delete Category 
    function handleDelete(e){
        OpenAlert(e.target.textContent);
        if(confirm === true){
        setContent(content.filter(item =>{
            return item.name != selected.name;
        })
        )
        setSelected(content[0]);
        Color("0");
    }
    }
    


  return (
    <div className='dropdown-save-del'>
            <div className='dropdown'>
                {(addNew === false) &&
                <div className='dropdown-btn'>
                    <img  src={selected.imgSrc} id = "ONGC" alt="" />
                    {selected.name}
                </div>}
                
                {(addNew === true) &&
                <div className='dropdown-btn'>
                    <div className='add-new-dropdown'>
                        <img src={addicon} id = "ONGC" alt=""/>
                        <input name = "name" type="text" placeholder="Type Category" autoComplete='off' onChange={handleChange}  value = {newObject.name} />
                    </div>
                </div>
                }
                
                {isActive && 
                    <div className='dropdown-content'>

                    {content.map(contentItem => (
                        <div className='dropdown-item' 
                        onClick = {e => {setSelected(contentItem); setIsActive(false); Color(contentItem.id);setAddNew(false)}}
                        style = {{border:(selected.name === contentItem.name && addNew === false)?"solid 1px #707070":'',backgroundColor:(selected.name === contentItem.name && addNew === false)?"white":''}}> 
                        <img src={contentItem.imgSrc} alt="" />
                        {contentItem.name}
                        </div>
                    ))}
                    
                    <div className='Add-New-Col' onClick={()=>{Color("3");setAddNew(true);setNewObject({imgSrc:addicon,name:"",id:"3"});setIsActive(false);}}
                        style = {{backgroundColor:(addNew === true)?"white":'', border:(addNew === true)?"solid 1px #707070":''}}>
                        <h4>+ Add New</h4>
                    </div>
                    
                    </div>
                }
            </div>
            
            <img src={arrow} id = "arrow" alt="" onClick={()=>{setIsActive(!isActive)}} style = {{rotate :(isActive === true)?"180deg":''}}/>
            
            

            {((addNew === true)|| (selected.name !== "ONGC Corporate Info" && selected.name !== "Comprehension Exercise" && selected.name !== "Legal Information")) && 
                <div className='save-delete' >
                {(addNew === true) && 
                <div className='save' onClick = {handleClick}>
                  <img src={save} alt=""/>
                  <p>Save</p>
                </div>}

                {(addNew === false) && 
                <div className='edit' onClick={(e)=>{setEdit(!edit);}}>
                  <img src={edit} alt=""/>
                  {(edit === true)?<p style = {{right:'14px',marginRight:'20px'}}>Update</p>:<p>Edit</p>}
                </div>}

                <div className='delete' onClick={handleDelete}>
                  <img src={deletebutton} alt=""/>
                  <p>Delete</p>
                </div>
              </div>}
    </div>
  )
}

export default Dropdown