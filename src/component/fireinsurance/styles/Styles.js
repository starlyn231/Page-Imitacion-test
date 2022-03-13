import styled from "@emotion/styled";

export const Container = styled("div")({
  margin: 0,
  width: '100%',

  //minWidth: '900px',
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gridTemplateRows: 'repeat(6), 1fr)',
  // backgroundColor: ' lightblue',
  border: 'medium solid #222'
});
