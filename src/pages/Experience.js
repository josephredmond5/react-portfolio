import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2008 - 2013"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Fred Longworth High School
          </h3>
          <p> 9 A* - C Grades</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2019"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            End Systems limited
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            HVAC engineer apprenticeship
          </h4>

          <p> HVAC engineer</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Royal Marines Recruit
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            CTCRM Lympstone Commando 
          </h4>
          <p>Royal Marines recruit</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
              CommandShift
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
              Junior Developer
          </h4>
          <p>
            completed a coding bootcamp with CommandShift 
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      
    </div>
  );
}

export default Experience;
