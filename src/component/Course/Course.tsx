import React, { useEffect, useState } from "react";
import s from "./Course.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../Redux/redux-store";
import CurrencyRatio from "./CurrencyRatio";
import SelectElement from "../Converter/SelectElement";
import { getConvertedAmount } from "../../Redux/convertedreducer";

type CourseType = {};

const Course: React.FC<CourseType> = () => {
  const amount = useSelector(
    (state: AppStateType) => state.converted.convertedAmounts
  );

  const updateDate = useSelector(
    (state: AppStateType) => state.converted.updateDate
  );

  const timeStamp = useSelector(
    (state: AppStateType) => state.converted.timeStamp
  );

  const dispatch = useDispatch();

  const handlerSelect = (value: string) => {
    setCurrentCurrency(value);
  };

  const [currentCurrency, setCurrentCurrency] = useState(() => amount[0].name);

  useEffect(() => {
    if (
      (+new Date() - +new Date(updateDate)) / 1000 / 60 < 1440 &&
      (+new Date() - +new Date(timeStamp)) / 1000 / 60 < 60
    ) {
      dispatch(getConvertedAmount());
    }
  }, [currentCurrency]);

  return (
    <div className={s.course}>
      <div>
        <SelectElement
          defaultValue={currentCurrency}
          value={currentCurrency}
          updateData={handlerSelect}
          selectData={amount}
          filter={false}
        />
      </div>
      <CurrencyRatio amount={amount} currentCurrency={currentCurrency} />
    </div>
  );
};

export default Course;
