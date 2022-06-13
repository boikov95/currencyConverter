import React from "react";
import s from "./Converter.module.scss";
import SelectElement from "./SelectElement";
import { convertedAmount } from "../../Redux/convertedreducer";

type converterFromType = {
  amount: Array<convertedAmount>;
  required: boolean;
  value: string | number;
  updateMoney: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateSelect: (value: string) => void;
  byDefault: string;
  exception: string;
  disabled: boolean;
};

const DisplayConverter: React.FC<converterFromType> = ({
  amount,
  required,
  value,
  updateMoney,
  updateSelect,
  byDefault,
  exception,
  disabled,
}) => {
  return (
    <div className={s.converter_choice}>
      <div
        className={`${s.converter_choice_input} ${required ? s.required : ""}`}
      >
        <input
          type="text"
          className={`${s.currentMoney} ${required ? s.required : ""}`}
          value={value?.toString()}
          disabled={disabled}
          onChange={updateMoney}
        />
        {required && (
          <span className={s.error}>Разрешен ввод только целых чисел!</span>
        )}
      </div>
      <SelectElement
        defaultValue={byDefault}
        value={byDefault}
        updateData={updateSelect}
        selectData={amount}
        exception={exception}
        filter={true}
      />
    </div>
  );
};

export default DisplayConverter;
