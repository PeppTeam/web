import styled from "styled-components";
import { Box } from "@rebass/grid";

export const Tag = styled(Box)`
  color: ${props => props.theme.pop};
  font-size: 12px;
  font-weight: 700;
  border-radius: 8px;
  background-color: ${props => props.theme.pop}40;
`;
