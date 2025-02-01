import { useEffect, useState } from "react";
import { AccordianData } from "../util/data";
const AccordianComponent = () => {
  const [selected, setSelected] = useState(0);
  const [isActiveSection, setIsActiveSection] = useState(false);

  const AccordianStyle = {
    maxWidth: "600px",
    AccordianTitle: {
      display: "flex",
      justifyContent: "space-between",
    },
  };

  return (
    <AccodianItem AccordianStyle={AccordianStyle} isActiveSection={true} />
  );
};

const AccodianItem = ({ AccordianStyle, isActiveSection }) => {
  return (
    <div style={AccordianStyle}>
      <div style={AccordianStyle.AccordianTitle}>
        <div>Title</div>
        <div>{isActiveSection ? "-" : "+"}</div>
      </div>
      {isActiveSection && <div style={AccordianStyle.AccordianContent}>{}</div>}
    </div>
  );
};
export default AccordianComponent;
