import React from "react";

//props.num = "work#"
export default function Project(props) {
    return (
        <div id={"work"+props.num} className="fortyFiveContainer workContainer">
            <div className="cover"></div>
            <div className="workInsideContainer">
                <div className="workTitle workWords">
                    {props.title}
                </div>
                <div className="workSubtitle workWords">
                    {props.subtitle}
                </div>
            </div>
            <a className="invisLink" href={props.link} target="_blank"></a>
        </div>
    )
}