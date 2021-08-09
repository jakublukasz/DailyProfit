import SVG from "react-inlinesvg";
import styled from "styled-components";

const IconSVG = styled(SVG)`
  width: 100%;
  height: 100%;
`;

const Icon = ({ src, ...props }) => {
  return (
    <div {...props}>
      <IconSVG src={src}></IconSVG>
    </div>
  );
};

export default Icon;