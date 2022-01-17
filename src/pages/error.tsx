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
      {error && <p>{error.message}</p>}
      <Link to='/' onClick={() => onClickToLogin()}>To login</Link>
    </div>
  )
}

const StyledComponent = styled(Component)`
  > .logout-button {
    display: flex;
    justify-content: right;
    align-items: center;
  }

  > .class-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  > .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    > .login-button {
      margin-top: 10px;
    }
  }
`;

export const ErrorPage = (props: Props): JSX.Element => {
  return <StyledComponent {...props} />;
};
