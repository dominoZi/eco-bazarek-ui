import { HTMLAttributes } from "react";
import { Helmet } from "react-helmet-async";
import { Loader } from ".";

export interface ContentProps extends HTMLAttributes<HTMLElement> {
  title: string;
  loading?: boolean;
}

export const Content = (props: ContentProps) => {
  const { children, title, loading = false, ...other } = props;
  return (
    <main className="relative p-10" {...other}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {loading && (
        <div className="absolute top-1/4 left-0 w-full h-full z-10 backdrop-opacity-40 bg-[#f6f5f1]/75">
          <Loader className="absolute top-[10%] left-[50%]" />
        </div>
      )}
      {children}
    </main>
  );
};
