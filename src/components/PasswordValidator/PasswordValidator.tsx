import { HtmlHTMLAttributes, useEffect } from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { clsx } from "clsx";
import { FormLabel } from "../FormLabel";

interface ValidationRuleItemProps {
  isValid: boolean;
  message: string;
}

const ValidationRuleItem = (props: ValidationRuleItemProps) => {
  const { isValid, message } = props;
  return (
    <li
      className={clsx(
        "flex flex-row my-2",
        isValid ? "text-green-600" : "text-red-600"
      )}
    >
      {isValid ? (
        <CheckIcon className="h-6 w-6 mr-2" />
      ) : (
        <XMarkIcon className="h-6 w-6 mr-2" />
      )}{" "}
      {message}
    </li>
  );
};

export type PasswordValidatorProps = Omit<
  HtmlHTMLAttributes<HTMLDivElement>,
  "children"
> & {
  password: string;
  onValidationStatusChange?: (valid: boolean) => void;
};

export const PasswordValidator = (props: PasswordValidatorProps) => {
  const { className, password, onValidationStatusChange, ...other } = props;
  const lengthValidation = 8 <= password.length;
  const bigChar = [...password].some((x) => x.match(/^[A-Z]*$/));
  const oneNumber = [...password].some((x) => x.match(/^[0-9]*$/));
  const specialChar = [...password].some((x) =>
    x.match(/[`~!@#$%^&*()-_+{}[\]\\|,.//?;':"]/g)
  );
  useEffect(() => {
    onValidationStatusChange &&
      onValidationStatusChange(
        lengthValidation && bigChar && oneNumber && specialChar
      );
  }, [
    onValidationStatusChange,
    lengthValidation,
    bigChar,
    oneNumber,
    specialChar,
  ]);
  return (
    <div className={clsx(className, "block")} {...other}>
      <FormLabel label="Hasło musi spełniać następujące wymagania:" />
      <ul>
        <ValidationRuleItem
          isValid={lengthValidation}
          message="Przynajmniej 8 znaków"
        />
        <ValidationRuleItem
          isValid={bigChar}
          message="Przynajmniej jedna duża litera"
        />
        <ValidationRuleItem
          isValid={oneNumber}
          message="Przynajmniej jedna cyfra"
        />
        <ValidationRuleItem
          isValid={specialChar}
          message="Przynajmniej jeden znak specjalny"
        />
      </ul>
    </div>
  );
};
