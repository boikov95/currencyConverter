import React from "react";
import { useSelector } from "react-redux";
import { convertedAmount } from "../../Redux/convertedreducer";
import { AppStateType } from "../../Redux/redux-store";
import s from "./Course.module.scss";

type CurrencyRatioType = {
  amount: Array<convertedAmount>;
  currentCurrency: string;
};

const CurrencyRatio: React.FC<CurrencyRatioType> = ({
  amount,
  currentCurrency,
}) => {
  const currencyData = useSelector(
    (state: AppStateType) => state.converted.currencyData
  );

  return (
    <div className={s.currentcourses}>
      {amount
        .filter((elem) => elem.name !== currentCurrency)
        .map((elem) => {
          return (
            <div key={elem.id} className={s.currentcourses__cours}>
              <img alt="Флаг" className={s.money} src={elem.img} />
              {`${elem.name} (${elem.description})`}
              <span className={s.currentcourses__cours__rezult}>
                {Math.round(
                  ((Boolean(currencyData[currentCurrency])
                    ? currencyData[currentCurrency]["Value"] /
                      currencyData[currentCurrency]["Nominal"]
                    : 1) /
                    (Boolean(currencyData[elem.name])
                      ? currencyData[elem.name]["Value"] /
                        currencyData[elem.name]["Nominal"]
                      : 1)) *
                    10000
                ) / 10000}
              </span>
            </div>
          );
        })}
    </div>
  );
};

export default CurrencyRatio;
