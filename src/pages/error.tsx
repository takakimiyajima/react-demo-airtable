import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { ErrorPageHandler } from "@/containers/ErrorContainer";
import { Error } from '@/reducer';

type ContainerProps = {
  error: Error | null
};

type Props = {
  className?: string;
} & ContainerProps & ErrorPageHandler;

const Component = ({ className, error, onClearAll }: Props) => {
  const onClickToLogin = () => {
    onClearAll()
  }

  return (
    <div className={className}>
      <p className='message'>Sorry! {error?.message ?? 'Unexpected error has occurred.'}</p>
      <div className='link'>
        <Link to='/' onClick={() => onClickToLogin()}>To login</Link>
      </div>
    </div>
  )
}

const StyledComponent = styled(Component)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 20px;

  > .message {
    font-weight: bold;
    font-size: 30px;
  }

  > .link {
    text-decoration: underline;
  }
`;

export const ErrorPage = (props: Props): JSX.Element => {
  return <StyledComponent {...props} />;
};
