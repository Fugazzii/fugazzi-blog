import { FC } from "react";

type Props = {
    id?: number
};

export const Page: FC<Props> = ({ id }: Props) => {
    // let x = location.pathname.split("/");
    // console.log(x[x.length - 1]);
    return (
        <>{id}</>
    );
};