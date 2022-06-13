import React, { useEffect, useState } from "react";
import s from "./Converter.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../Redux/redux-store";
import { getConvertedAmount } from "../../Redux/convertedreducer";
import DisplayConverter from "./DisplayConverter";

type converterType = {};

const Converter: React.FC<converterType> = (props) => {
  const amount = useSelector(
    (state: AppStateType) => state.converted.convertedAmounts
  );

  const currencyData = useSelector(
    (state: AppStateType) => state.converted.currencyData
  );

  const updateDate = useSelector(
    (state: AppStateType) => state.converted.updateDate
  );

  const timeStamp = useSelector(
    (state: AppStateType) => state.converted.timeStamp
  );

  const dispatch = useDispatch();

  const [fromAmount, setFromAmount] = useState(() => amount[0].name);
  const [toAmount, setToAmount] = useState(() => amount[1].name);
  const [money, setMoney] = useState("");
  const [calculatedMoney, setCalculatedMoney] = useState<number | string>("");
  const [required, setRequired] = useState(false);

  const updateFromAmount = (value: string) => {
    setFromAmount(value);
  };

  const updateToAmount = (value: string) => {
    setToAmount(value);
  };

  const handleClick = () => {
    setFromAmount(() => toAmount);
    setToAmount(() => fromAmount);
  };

  const updateMoney = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!Number.isInteger(+e.target.value)) {
      setRequired(true);
    } else {
      setRequired(false);
      setMoney(e.target.value);
    }
  };

  useEffect(() => {
    if (
      (+new Date() - +new Date(updateDate)) / 1000 / 60 > 1440 &&
      (+new Date() - +new Date(timeStamp)) / 1000 / 60 > 60
    ) {
      dispatch(getConvertedAmount());
    }
    if (money.length > 0) {
      setCalculatedMoney(
        Math.round(
          (((Boolean(currencyData[fromAmount])
            ? currencyData[fromAmount]["Value"] /
              currencyData[fromAmount]["Nominal"]
            : 1) *
            Number(money)) /
            (Boolean(currencyData[toAmount])
              ? currencyData[toAmount]["Value"] /
                currencyData[toAmount]["Nominal"]
              : 1)) *
            100
        ) / 100
      );
    } else {
      setCalculatedMoney("");
    }
  }, [updateDate, timeStamp, toAmount, fromAmount, money]);

  return (
    <div className={s.converter}>
      <DisplayConverter
        amount={amount}
        required={required}
        updateMoney={updateMoney}
        value={money}
        updateSelect={updateFromAmount}
        byDefault={fromAmount}
        exception={toAmount}
        disabled={false}
      />
      <img
        className={s.change}
        onClick={handleClick}
        alt="Поменять"
        src={
          "https://www.pngmart.com/files/7/Exchange-Transparent-Background.png"
        }
      />
      <DisplayConverter
        amount={amount}
        required={false}
        value={calculatedMoney}
        updateMoney={(e: React.ChangeEvent<HTMLInputElement>) => {}}
        updateSelect={updateToAmount}
        byDefault={toAmount}
        exception={fromAmount}
        disabled={true}
      />
    </div>
  );
};

export default Converter;
