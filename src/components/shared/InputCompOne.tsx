import React, { forwardRef } from "react";

export interface InputCompOneProps {
  label: string;
  labelClass: string;
  labelSpan?: string;
  labelSpanClass?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
  name: string;
  tabIndex?: number;
  ref?: React.RefObject<HTMLInputElement>;
  selectValue?: string;
  input?: boolean;
  select?: boolean;
  selectOptions?: { value: string; label: string }[];
  inputType?: string;
  inputClass?: string;
  parentInputClass?: string;
  selectClass?: string;
  parentSelectClass?: string;
  parentClass?: string;
  maxLength?: number;
}

const InputCompOne = forwardRef<HTMLInputElement, InputCompOneProps>(
  (
    {
      label,
      labelClass,
      labelSpan,
      labelSpanClass,
      placeholder,
      value,
      onChange,
      onInput,
      name,
      tabIndex,
      selectValue,
      input = false,
      select = false,
      selectOptions = [],
      inputType = "text",
      inputClass,
      parentInputClass,
      selectClass,
      parentSelectClass,
      parentClass,
      maxLength,
    },
    forwardedRef
  ) => {
    return (
      <div className={parentClass}>
        {label && (
          <label htmlFor="" className={labelClass}>
            {label}
            {labelSpan && <span className={labelSpanClass}>{labelSpan}</span>}
          </label>
        )}
        {input && (
          <div className={parentInputClass}>
            <input
              type={inputType}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onInput={onInput}
              name={name}
              tabIndex={tabIndex}
              ref={forwardedRef}
              className={inputClass}
              maxLength={maxLength}
            />
          </div>
        )}
        {select && (
          <div className={parentSelectClass}>
            <select
              name={name}
              id=""
              value={selectValue}
              className={selectClass}
            >
              {selectOptions.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    );
  }
);

export default InputCompOne;
