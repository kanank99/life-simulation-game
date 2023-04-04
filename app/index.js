import { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { styles } from "../components/newlife/newlife.style";
import { Newlife } from "../components/newlife/Newlife";
import { Main } from "../components/main/Main";

export default function Page() {


  // All Hooks -

  // For Rendering
  const [startLife, setStartLife] = useState(false);

  // For <NewLife />
  const [firstName, onChangeFirst] = useState('');
  const [lastName, onChangeLast] = useState('');
  const [isMale, setMale] = useState(false);
  const [isFemale, setFemale] = useState(false);
  const [isHetero, setHetero] = useState(false);
  const [isHomo, setHomo] = useState(false);
  const [isBi, setBi] = useState(false);
  const [genderHeader, setGenderHeader] = useState('');
  const [sexHeader, setSexHeader] = useState('');

  const [debitBalance, setDebitBalance] = useState(2000);
  const [savingsBalance, setSavingsBalance] = useState(1000);


  return (
    startLife ? <Main 
    firstName={firstName}
    onChangeFirst={onChangeFirst}
    lastName={lastName}
    onChangeLast={onChangeLast}
    isMale={isMale}
    setMale={setMale}
    isFemale={isFemale}
    setFemale={setFemale}
    isHetero={isHetero}
    setHetero={setHetero}
    isHomo={isHomo}
    setHomo={setHomo}
    isBi={isBi}
    setBi={setBi}
    genderHeader={genderHeader}
    setGenderHeader={setGenderHeader}
    sexHeader={sexHeader}
    setSexHeader={setSexHeader}
    debitBalance={debitBalance}
    setDebitBalance={setDebitBalance}
    savingsBalance={savingsBalance}
    setSavingsBalance={setSavingsBalance}

     /> : <Newlife start={setStartLife}
    firstName={firstName}
    onChangeFirst={onChangeFirst}
    lastName={lastName}
    onChangeLast={onChangeLast}
    isMale={isMale}
    setMale={setMale}
    isFemale={isFemale}
    setFemale={setFemale}
    isHetero={isHetero}
    setHetero={setHetero}
    isHomo={isHomo}
    setHomo={setHomo}
    isBi={isBi}
    setBi={setBi}
    genderHeader={genderHeader}
    setGenderHeader={setGenderHeader}
    sexHeader={sexHeader}
    setSexHeader={setSexHeader}
    />
  );




}
