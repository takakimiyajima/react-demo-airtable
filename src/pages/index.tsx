import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Error } from '@/reducer'
import { Class, StudentInfo } from "@/repositories";
import { TopHandler } from "@/containers/TopContainer";
import { ClassContainer } from "@/components/ClassContainer";
import { TextInput } from "@/components/TextInput";
import { SubmitButton } from "@/components/SubmitButton";

type ClassInfo = {
  classRoom: string;
  names: string;
};

type ContainerProps = {
  classes: Array<Class>;
  studentID: string;
  students: Array<StudentInfo>;
  isFetching: boolean;
  error: Error | null
};

type Props = {
  className?: string;
} & ContainerProps &
  TopHandler;

const Component = ({
  className,
  classes,
  studentID,
  students,
  onIsFetching,
  onGetAllClasses,
  onGetStudent,
  onGetAllStudents,
  onClearAll,
  isFetching,
  error,
}: Props): JSX.Element => {
  const [name, setName] = useState("");
  const [classInfo, setClassInfo] = useState<Array<ClassInfo>>([]);
  const navigate = useNavigate();
  
  const login = () => {
    onIsFetching(true);
    onGetStudent(name);
  };

  const logout = () => {
    onClearAll();
    setName("");
  };

  useEffect(() => {
    if (studentID) {
      onGetAllStudents();
      onGetAllClasses();
    }
  }, [studentID]);

  useEffect(() => {
    const filteredClass = classes.filter(({ students }) =>
      students.includes(studentID)
    );
    const classAndStudent: Array<ClassInfo> = filteredClass.flatMap((c) => {
      const names = c.students.map(
        (studentId) =>
          students.find(({ id }) => id === studentId)?.name ?? "Unknown"
      );

      return {
        classRoom: c.name,
        names: names.join(", "),
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
          {isFetching ? (
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

export const Top = (props: Props): JSX.Element => {
  return <StyledComponent {...props} />;
};
