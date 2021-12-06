import React from "react";
import TitleSecondary from "../Typography/TitleSecondary";
import styles from "./AsideNotification.module.css";

const AsideNotification = () => {
  return (
    <div className={styles.AsideNotification}>
        <TitleSecondary text="Endomarketing"/>
      <p>
        Endomarketing está relacionado às ações de treinamento ou qualificação
        dos colaboradores da empresa visando um melhor serviço para o cliente.
        Marketing interno, devido ao nome, é usualmente confundido com
        Endomarketing mesmo sendo conceitos diferentes.
      </p>
      <button>Dispensar</button>
    </div>
  );
};

export default AsideNotification;
