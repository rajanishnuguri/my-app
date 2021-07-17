import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TIBCO from '../CITI.jpg';
import DBS from '../DBS.jpg';
import '../Experience.css';

const useStyles = makeStyles({
    header: {
        fontSize: '30pt',
        fontWeight: '550',
        color: '#444649',
        fontFamily: '"Raleway"',
    },
    headerBar: {
        background: '#444649',
        height: '4px',
        margin: '0px 0 25px 45%',
        width: '100px',
    },

    media: {
        height: 240,
    }
});
export default function Experience(){
    const classes = useStyles();
    return(
	<div style={{paddingTop: "100px",background: "#f5f5f5"}} id="workView">
        <div className={`${classes.header} flex animate__animated animate__slideInLeft  animate__duration-0.75`} style={{paddingTop: "0",paddingBottom: "100px"}} >
            WORK
        </div>
        <div className="experience-cards-div">
            <div className="experience-card" >
                <div className="experience-banner" style={{background: 'rgb(4, 194, 201)'}}>
                    <div className="experience-blurred_div"></div>
                    <div className="experience-div-company"><h5 className="experience-text-company">DAH2 India Pvt Ltd</h5></div>
                    <img crossOrigin="anonymous" className="experience-roundedimg"
                         src={DBS}
                         alt="DBS"/></div>
                <div className="experience-text-details"><h5 className="experience-text-role">Analyst</h5><h5 className="experience-text-date">October 2019 – Present</h5><p
                    className="subTitle experience-text-desc">Worked as Spring Boot Developer, Hibernate, AWS S3, MySQL, API's, TIBCO BW, Migrated TIBCO code to Spring Boot</p>
                    <ul style={{display:"block"}}>
                        <li className="subTitle">Worked on migration of all TIBCO SOAP services and converting them to RESTFUL API's suing Spring Boot Controller
                        </li>
                        <li className="subTitle">Working Knowledge in JSON and XML technologies such as XSL, XSLT, XPath
                        </li>
                        <li className="subTitle">Responsible for creating and maintaining architecture for Restful API using Spring Boot.
                        </li>
                        <li className="subTitle">Excellent in defect fixing, solving complex problems and Performance Tuning.</li>
                        <li className="subTitle">Proficient in using AWS (Amazon Web Services) services like EC2, VPC, Cloud Watch, Cloud Front, Cloud Formation, IAM, S3, Amazon RDS, Elastic Cache, SNS, SQS.
                        </li>
                        <li className="subTitle">Good working knowledge on RTC, SVN and Git for version control.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="experience-card">
                <div className="experience-banner" style={{background: 'rgb(4, 194, 201)'}}>
                    <div className="experience-blurred_div"></div>
                    <div className="experience-div-company"><h5 className="experience-text-company">TIBCO Software India Pvt Ltd</h5></div>
                    <img crossOrigin="anonymous" className="experience-roundedimg"
                         src={TIBCO}
                         alt="TIBCO"/></div>
                <div className="experience-text-details"><h5 className="experience-text-role">Senior Associate Consultant</h5>
                    <h5 className="experience-text-date">July 2015 – October 2019</h5><p
                    className="subTitle experience-text-desc">Worked as Offshore Developer for CITI Bank APAC, SOAP & REST services in TIBCO BW, Written complex Rules & Rule functions in TIBCO BE, DB intensive oprations like upload and download batches of master data</p>
                    <ul style={{display:"block"}}>
                        <li className="subTitle">Development of SOAP, REST Web services, Timer batches, Downloads and Uploads
                            for Existing Data.
                        </li>
                        <li className="subTitle">Developed many BW process for existing frameworks
                        </li>
                        <li className="subTitle">Development of BE rules, Rule functions as per the requirements.
                        </li>
                        <li className="subTitle"> Development of Stored Procedures for Retention, Clean-up, Download and Uploads
                            of Data to View and for other functionalities as per the requirement.</li>
                        <li className="subTitle">Unit testing of Rules and Rule functions, BW Processes and Web services.
                        </li>
                        <li className="subTitle">Regular check-in to RTC and work with open source automation source Jenkins to
                            continuous Development and integration.
                        </li>
                        <li className="subTitle">Deployment & operation support for various environment to bring the first projects
                            into production</li>
                    </ul>
                </div>
            </div>
        </div>
   </div>
			
    );
}