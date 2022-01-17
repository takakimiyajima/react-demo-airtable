import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AppState } from "@/store";
import {
  isFetching,
  getAllClasses,
  getStudent,
  getAllStudents,
  clearAll,
} from "@/action";
import {
  ClassEntity,
  ClassInfo,
  StudentEntity,
  ErrorEntity,
} from "@/repositories";
import {
  ClassContainer,
  TextInput,
  SubmitButton
} from "@/components";

type Props = {
  className?: string;
};

const Component = ({
  className
}: Props): JSX.Element => {
  const dispatch = useDispatch();
  const classes = useSelector<AppState, Array<ClassEntity>>(({ state }) => state.classes)
  const studentID = useSelector<AppState, string>(({ state }) => state.studentID)
  const students = useSelector<AppState, Array<StudentEntity>>(({ state }) => state.students)
  const isLoading = useSelector<AppState, boolean>(({ state }) => state.isFetching)
  const error = useSelector<AppState, ErrorEntity | null>(({ state }) => state.error)

  const [name, setName] = useState("");
  const [classInfo, setClassInfo] = useState<Array<ClassInfo>>([]);
  const navigate = useNavigate();
  
  const login = () => {
    dispatch(isFetching(true));
    dispatch(getStudent(name));
  };

  const logout = () => {
    dispatch(clearAll());
    setName("");
  };

  useEffect(() => {
    if (studentID) {
      dispatch(getAllStudents());
      dispatch(getAllClasses());
    }
  }, [studentID]);

  useEffect(() => {
    const filteredClasses = classes.filter(({ studentIDs }) =>
      studentIDs.includes(studentID)
    );
    const classAndStudent: Array<ClassInfo> = filteredClasses.flatMap((c) => {
      const names = c.studentIDs.map(
        (studentId) =>
          students.find(({ id }) => id === studentId)?.name ?? "Unknown"
      );

      return {
        classRoom: c.classRoom,
        studentNames: names.join(", "),
      };
    });

    setClassInfo(classAndStudent);
  }, [classes, students]);

  useEffect(() => {
    if (error) {
      navigate('/error')
    }
  }, [error]);

  return (
    <div className={className}>
      {classInfo.length ? (
        <>
          <div className="logout-button">
            <SubmitButton title="Logout" onClick={logout} />
          </div>
          <div className="class-container">
            <ClassContainer classInfo={classInfo} />
          </div>
        </>
      ) : (
        <div className="login">
          {isLoading ? (
            <p>Loading.....</p>
          ) : (
            <>
              <TextInput
                title="Student Name: "
                inputValue={name}
                onChangeValue={setName}
              />
              <div className="login-button">
                <SubmitButton title="Login" onClick={login} />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

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

export const TopPage = (props: Props): JSX.Element => {
  return <StyledComponent {...props} />;
};
