import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AppState } from "@/store";
import { clearAll } from "@/action";
import { ErrorEntity } from "@/repositories";

type Props = {
  className?: string;
}

const Component = ({ className }: Props) => {
  const dispatch = useDispatch();
  const error = useSelector<AppState, ErrorEntity | null>(({ state }) => state.error);

  const onClickToLogin = () => {
    dispatch(clearAll());
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
