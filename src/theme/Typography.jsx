import styled from "styled-components";
import { Colors } from "./Colors";

const H1 = styled.h1`
  all: unset;
  font-size: 64px;
  letter-spacing: 0px;
  line-height: normal;
  color: ${Colors.DarkGrey};
`;
const H2 = styled.h2`
  all: unset;
  font-size: 24px;
  letter-spacing: 0px;
  line-height: normal;
  color: ${Colors.Dark};
`;
const H3 = styled.h3`
  all: unset;
  font-size: 20px;
  letter-spacing: 0px;
  line-height: normal;
  color: ${Colors.Dark};
`;
const H4 = styled.h4`
  all: unset;
  font-size: 18px;
  letter-spacing: 0px;
  line-height: 24px;
  color: ${Colors.DarkGrey};
`;
const p = styled.p`
  all: unset;
  font-size: 14px;
  letter-spacing: 0px;
  line-height: normal;
  color: ${Colors.DarkGrey};
`;

export default {
  H1,
  H2,
  H3,
  H4,
  p,
};
