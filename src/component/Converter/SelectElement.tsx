import React from "react";
import { Select } from "antd";
import s from "./Converter.module.css";
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
      defaultValue={defaultValue}
      value={value}
      style={{ width: 260 }}
      onChange={updateData}
    >
      {selectData
        .filter((elem) => (filter ? elem.name !== exception : !filter))
        .map((elem) => {
          return (
            <Option key={elem.id} value={elem.name} label={elem.name}>
              <div>
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
