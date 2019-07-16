import * as React from 'react';
import { css } from 'glamor';
import colorPalette from '../appearance/ColorPalette';
import fonts from '../appearance/Fonts';

const styles = {
  background: css({
    backgroundColor: colorPalette.snpBackgroundGrey,
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingLeft: '20%'
  }),
  header: css({
    fontSize: '135px',
    fontWeight: 'bold',
    fontFamily: fonts.nunito,
    color: colorPalette.snpHeader,
    margin: '0px'
  }),
  subHeader: css({
    fontSize: '47px',
    fontFamily: fonts.nunito,
    color: colorPalette.snpHeader,
    marginTop: '0px'
  }),
  slogan: css({
    fontSize: '18px',
    fontFamily: fonts.roboto,
    color: colorPalette.snpSubHeader
  })
}

const StartPage = () => {
  return (
    <div {...styles.background}>
      <p {...styles.header}>code&#183;in</p>
      <p {...styles.subHeader}>more than IT</p>
      <p {...styles.slogan}>Your digital lab for impactful products</p>
    </div>
  );
};

export default StartPage;