import { HtmlHTMLAttributes } from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { FormLabel } from "./FormLabel";

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
};

export const PasswordValidator = (props: PasswordValidatorProps) => {
  const { className, password, ...other } = props;
  const lengthValidation = 8 <= password.length;
  return (
    <div className={clsx(className, "block")} {...other}>
      <FormLabel label="Hasło musi spełniać następujące wymagania:" />
      <ul>
        <ValidationRuleItem
          isValid={lengthValidation}
          message="Przynajmniej 8 znaków"
        />
        <ValidationRuleItem isValid={true} message="Jedna duża litera" />
        <ValidationRuleItem isValid={true} message="Jeden znak specjalny" />
      </ul>
    </div>
  );
};
