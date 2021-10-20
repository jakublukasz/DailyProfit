import styled from 'styled-components';
import { devices } from '../assets/styles/devices';
import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Stack } from '@mui/material';
import { useInputData } from '../hooks/useInputData';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 30px;
  padding: 0px 5px;

  &:last-child {
    margin: 20px 0 10px;
  }

  @media ${devices.mobileM} {
    padding: 0px 10px;
  }

  @media ${devices.laptop} {
    padding: 0px 10px;
    margin: 15px 0;
  }
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.lightSecondary};
  padding: 10px;
`;

const Price = styled.span`
  color: ${({ isSpent }) => (isSpent ? 'red' : 'green')};
  font-size: 0.9rem;
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

const Transaction = ({
  title,
  amount,
  date,
  currency,
  categoryGroup,
  isSpent,
}) => {
  const { getCategoryIcon } = useInputData();
  const Icon = getCategoryIcon(categoryGroup);

  return (
    <Container>
      <Stack direction="row">
        <IconBox>
          <Icon color="primary" />
        </IconBox>
        <div>
          <Typography variant="h6" component="p">
            {title}
          </Typography>
          <Typography variant="body2">{date}</Typography>
        </div>
      </Stack>
      <Stack>
        <Price isSpent={isSpent}>
          <span>
            {isSpent ? '-' : '+'}
            {amount}
          </span>{' '}
          {currency}
        </Price>
      </Stack>
    </Container>
  );
};

Transaction.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
  date: PropTypes.string,
  currency: PropTypes.string,
  categoryGroup: PropTypes.string,
  isSpent: PropTypes.bool,
};

export default Transaction;
