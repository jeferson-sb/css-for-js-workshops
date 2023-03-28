import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import { formatPrice, pluralize, isNewShoe } from '../../utils';
import Spacer from '../Spacer';

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  const promoText = {
    'new-release': 'Just released!',
    'on-sale': 'Sale',
  };

  const flagColor = {
    'new-release': COLORS.secondary,
    'on-sale': COLORS.primary,
  };

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        {variant !== 'default' && (
          <Flag color={flagColor[variant]}>{promoText[variant]}</Flag>
        )}
        <ImageWrapper>
          <Image alt='' src={imageSrc} />
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price onSale={variant === 'on-sale'}>{formatPrice(price)}</Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
          {variant === 'on-sale' && <SalePrice>{formatPrice(price)}</SalePrice>}
        </Row>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  flex: 1;
  flex-basis: 300px;
`;

const Wrapper = styled.article`
  max-width: 340px;
  position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: 1rem 1rem 0 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span`
  text-decoration: ${(props) => (props.onSale ? 'line-through' : 'unset')};
  color: ${(props) => (props.onSale ? COLORS.gray[700] : COLORS.gray[900])};
`;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

const Flag = styled.span`
  position: absolute;
  top: 4%;
  right: -4px;
  padding: 8px 12px;
  border-radius: 2px;
  font-weight: 700;
  color: white;
  background-color: ${(props) => props.color};
  z-index: 1;
`;

export default ShoeCard;
