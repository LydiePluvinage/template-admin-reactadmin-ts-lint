import * as React from "react";
import FalseIcon from "@material-ui/icons/Clear";
import TrueIcon from "@material-ui/icons/Done";
import { useState } from "react";
import { useForm } from "react-final-form";

type Dict = {
  [key: string]: string;
};
interface ButtonNumFieldProps {
  record?: Dict;
  source: string;
  label: string;
}

const ButtonNumField: React.FC<ButtonNumFieldProps> = ({
  record = {},
  source,
  label,
}) => {
  const [boolean, setBoolean] = useState(record[source] == "1");
  const form = useForm();

  const modifyBoolean = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    record[source] = record[source] == "1" ? "0" : "1";
    setBoolean(record[source] == "1");
    form.change("admin", record[source]);
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "4px",
        alignItems: "center",
        borderRadius: "1px",
      }}
    >
      <span>{label} : </span>
      <button
        style={{ width: 28, height: 28, padding: 0 }}
        onClick={(e) => modifyBoolean(e)}
      >
        {boolean ? <TrueIcon /> : <FalseIcon />}
      </button>
    </div>
  );
};

export default ButtonNumField;
