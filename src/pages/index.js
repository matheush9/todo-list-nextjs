import Head from "next/head";
import React, { useState } from "react";
import Todo from "../components/Todo";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <div>
      <Head>Lista de tarefas</Head>
      <Todo />
    </div>
  );
}
