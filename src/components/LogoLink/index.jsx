/* eslint-disable no-unused-vars */
import P from 'prop-types';
import * as Styled from './styles';

import { Heading } from '../Heading';

export const LogoLink = ({ text, srcImage = '', link }) => {
  return (
    <Heading size="small" textTransform>
      <Styled.Container href={link}>
        {!!srcImage && <img src={srcImage} alt={text} />}
        {!srcImage && text}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImage: P.string,
  link: P.string.isRequired
};
