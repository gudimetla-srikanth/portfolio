import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="black">
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2017 - 2019"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        MIMS Junior College, Mancherial, Telangana state
                    </h3>
                    <p> Class 12</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2019 - 2023"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        JNTUH , Hyderabad, Telangana
                    </h3>

                    <h4 className="vertical-timeline-element-subtitle">
                        Bachelor's Degree
                    </h4>

                    <p> Computer Science and Engineering</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2023 - 2024"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkHistoryIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Backend Developer - HashedBit Innovations
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Remote, India
                    </h4>
                    <p>Developed the backend for Their own website.</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Experience;