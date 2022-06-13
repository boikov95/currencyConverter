import React from "react";
import { Select } from "antd";
import s from "./Converter.module.scss";
import { convertedAmount } from "../../Redux/convertedreducer";

const { Option } = Select;

type converterFromType = {
  defaultValue: string;
  value: string;
  updateData: (value: string) => void;
  selectData: Array<convertedAmount>;
  exception?: string;
  filter: boolean;
};

const SelectElement: React.FC<converterFromType> = ({
  defaultValue,
  value,
  updateData,
  selectData,
  exception,
  filter,
}) => {
  return (
    <Select
      className={s.ant_select}
      defaultValue={defaultValue}
      value={value}
      onChange={updateData}
    >
      {selectData
        .filter((elem) => (filter ? elem.name !== exception : !filter))
        .map((elem) => {
          return (
            <Option
              className={s.ant_select_selection}
              key={elem.id}
              value={elem.name}
              label={elem.name}
            >
              <div className={s.ant_select_selection_text}>
                <img alt="Флаг" className={s.money} src={elem.img} />
                {`${elem.name} (${elem.description})`}
              </div>
            </Option>
          );
        })}
    </Select>
  );
};

export default SelectElement;
