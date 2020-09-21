import React, { Component } from 'react';
import Navbar from '../../Navbar/index';
import "./advisory.css";
class Advisory extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="w-screen organizingHome">
                    <div className="w-screen absolute organizingHome">
                        <div className="w-screen organizingHome bg-cover absolute advisoryaddfilter"></div>
                    </div>
                    <div className="w-screen organizingHome absolute">

                        <div className="homeBlock mx-auto text-center text-white">
                            <h1 className="mx-auto adveventHeading font-bold">
                                ADVISORY COMMITTEE
                        </h1>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="advisoryBox">
                        <h1 className="advisoryHeading">INTERNATIONAL ADVISORY COMMITTEE</h1>
                        <ul className="advList">
                            <li className="advitem">Prof. Chintha Tellambura, University of Alberta, Canada</li>
                            <li className="advitem"> Prof. Yeon Ho Chung, Pukyong National University, Busan, Korea (South)</li>
                            <li className="advitem"> Prof. Mihaela Albu, Politehnica University of Bucharest, Romania</li>
                            <li className="advitem"> Prof. Aimé Lay-Ekuakille, University of Salento, Lecce, Italy</li>
                            <li className="advitem"> Dr. Arokiaswami Alphones, NTU, Singapore</li>
                            <li className="advitem"> Prof. Eva Rajo-Iglesias, University Carlos III of Madrid, Spain</li>
                            <li className="advitem"> Dr. Imdad Rizvi, Higher Colleges of Technology, UAE.</li>
                        </ul>
                    </div>
                    <div className="advisoryBox">
                        <h1 className="advisoryHeading">NATIONAL ADVISORY COMMITTEE</h1>
                        <ul className="advList">
                            <li className="advitem">   Prof. Rajeev Tripathi, MNNIT Allahabad</li>
                            <li className="advitem">   Prof. S S Pattnaik, NITTTR, Chandigarh</li>
                            <li className="advitem">   Dr. P K Khosla, C-DAC, Mohali, Chandigarh</li>
                            <li className="advitem">   Prof. K P Ray, DIAT, DRDO, Pune</li>
                            <li className="advitem">   Prof. Upena Dalal, SVNIT Surat</li>
                            <li className="advitem">   Prof. Nagendra Pathak, IIT Roorkee</li>
                            <li className="advitem">   Prof. P K Singhal, MITS, Gwalior</li>
                            <li className="advitem">   Prof. D. P. Sharma, Manipal University Jaipur</li>
                            <li className="advitem">   Prof. Shree Prakash Singh, NSTU Delhi</li>
                        </ul>
                    </div>
                    <div className="advisoryBox">
                        <h1 className="advisoryHeading">TEHNICAL PROGRAM COMMITTEE</h1>
                        <ul className="advList">
                            <li className="advitem">Prof. Guy A. E. Vandenbosch, KU Leuven, Belgium</li>
                            <li className="advitem">  Dr. Ritu Sharma, MNIT, Jaipur</li>
                            <li className="advitem">  Dr. Ashok Kumar, NIT Hamirpur</li>
                            <li className="advitem">  Dr. Phayung Meesad, King Mongkut’s University of Technology North Bangkok, Thailand</li>
                            <li className="advitem">  Dr. Surinder Kumar Soni, NIT Hamirpur</li>
                            <li className="advitem">  Prof. Suman Lata Tripathi, LPU Jalandhar</li>
                            <li className="advitem">  Dr. Arvind Kumar, UIET Panjab University</li>
                            <li className="advitem">  Dr. Madhu Chetty, Federation University, Australia</li>
                            <li className="advitem">  Dr. Naresh Kumar, UIET Panjab University</li>
                            <li className="advitem">  Dr. Shilpi Gupta, SVNIT Surat</li>
                            <li className="advitem">  Dr. Rakesh Sharma, NIT Hamirpur</li>
                            <li className="advitem">  Dr Siddhaling Urolagin, BITS, Dubai</li>
                            <li className="advitem">  Dr. Sandeep Kumar, NIT Hamirpur</li>
                            <li className="advitem">  Dr. Gagnesh Kumar, NIT Hamirpur</li>
                            <li className="advitem">  Dr. Marcin Paprzycki, Polish Academy of Sciences, Poland</li>
                            <li className="advitem">  Dr. Parvin Kaushik, KIET Ghaziabad</li>
                            <li className="advitem">  Dr. Akhilesh Sharma, Manipal University Jaipur</li>
                            <li className="advitem">  Dr. Sarada Prasad, Old Dominion University, Virginia, USA</li>
                            <li className="advitem">  Dr. Jaume Anguera, Universitat Ramon Llull, Barcelona, Spain</li>
                            <li className="advitem">  Dr. Ravishankar Dudhe, MAHE, Dubai</li>
                            <li className="advitem">  Dr. Ramaprasad Poojari, MAHE, Dubai</li>
                            <li className="advitem">  Dr. Jagdish Nayak, BITS, Dubai</li>
                            <li className="advitem">  Dr. Pradeep Kumar, University of KwaZulu-Natal, South Africa</li>
                            <li className="advitem">  Dr. Khaled Mohamad Almustafa, Prince Sultan University, Saudi Arabia</li>
                            <li className="advitem">  Dr. Waralak V. Siricharoen, Silpakorn University, Thailand</li>
                        </ul>
                    </div>
                </div>

                <div className=" advfooter">
                </div>
            </>
        );
    }
}

export default Advisory;