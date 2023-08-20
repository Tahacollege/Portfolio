import React from "react";
import "./index.css";
import Contact from "./ContactME";

export default function Projects(){
    
    return(
        <div className="projects" id="projects">
        <br />
            <h1 className="heading">Major Projects</h1>
            <br />
            <div className="majorp">
                <div className="forums">
                    <div className="content">
                        <h1>Name:Coding Forums</h1>
                        <h2>LanguagesUsed:HTML,CSS,JAVASCRIPT,PHP</h2>
                        <h3>Type:Dynamic Website</h3>
                        <h4>Database:Mysql</h4>
                    </div>
                    <a href="https://iforumspr.000webhostapp.com/"><img src="./projects/forums_1.png" className="forumsimg"></img></a>
                </div>
                <div className="elibrary">
                <div className="content">
                        <h1>Name:Elibrary</h1>
                        <h2>LanguagesUsed:HTML,CSS,JAVASCRIPT,PHP</h2>
                        <h3>Type:Dynamic Website</h3>
                        <h4>Database:Mysql</h4>
                    </div>
                <a href="https://unparallel-umbrella.000webhostapp.com/"><img src="./projects/elibrary.png" className="elibraryimg"></img></a>
                </div>
            </div>
            <br />
            <hr />
            <br />
            <h1 className="heading">Minor Projects</h1>
            <br />
            <div className="minorp">
            
                <div className="automobiles">
                <div className="content">
                        <h1>Name:Automobiles</h1>
                        <h2>LanguagesUsed:HTML,CSS,Reactjs</h2>
                        <h3>Type:Static Website</h3>
                        <h4>Database:Mysql</h4>
                    </div>
                <a href="https://automobles-info.netlify.app/"><img src="./projects/automobiles.png" className="automobilesimg"></img></a>
                </div>
                <div className="overview">
                <div className="content">
                        <h1>Name:Overview</h1>
                        <h2 className="h2">LanguagesUsed:HTML,CSS,Reactjs</h2>
                        <h3>Type:Static Website</h3>
                        <h4>Database:Mysql</h4>
                    </div>
                <a href="https://theoverview.netlify.app/"><img src="./projects/overview.png" className="overviewimg"></img></a>
                </div>
                <div className="tenzies">
                <div className="content">
                        <h1>Name:Tenzies</h1>
                        <h2 className="h2">LanguagesUsed:HTML,CSS,Reactjs</h2>
                        <h3>Type:Static Website</h3>
                        <h4>Database:Mysql</h4>
                    </div>
                <a href="https://tenzies-g.netlify.app/"><img src="./projects/tenzies.png" className="tenziesimg"></img></a>
                </div>
            </div>
            <hr />
            <Contact />
        </div>
    )
}