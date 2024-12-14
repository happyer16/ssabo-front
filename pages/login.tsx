import React from 'react';
import {GetServerSideProps} from "next";
import LoginPage from "@/src/containers/Login";


interface LoginProps {
  redirect?: string;
}

export default function Login({redirect}: LoginProps) {
  return (
    <>
      <LoginPage redirect={redirect}/>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      redirect: context.query.redirect ?? null,
    },
  };
};
