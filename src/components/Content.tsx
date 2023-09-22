import { HTMLAttributes } from "react";
import { Helmet } from "react-helmet-async";
import { Loader } from ".";
import { clsx } from "clsx";

export interface ContentProps extends HTMLAttributes<HTMLElement> {
  title: string;
  loading?: boolean;
  mainClassName?: string;
}

export const Content = (props: ContentProps) => {
  const { children, mainClassName, title, loading = false, ...other } = props;
  return (
    <div className="relative" {...other}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {loading && (
        <div className="absolute w-full h-full z-10 backdrop-opacity-40 bg-[#f6f5f1]/75">
          <Loader className="absolute top-[10%] left-[50%]" />
        </div>
      )}
      <main
        className={clsx(
          "max-w-[1040px] min-h-[50vh] w-full m-auto my-8",
          mainClassName
        )}
      >
        {children}
      </main>
    </div>
  );
};
