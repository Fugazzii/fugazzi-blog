import React from "react";
import Markdown from "react-markdown";

type Props = {
    content: string
}

const Md = ({ content }: Props) => {
    return (
        <Markdown 
            children={content} 
            className="text-white w-full"
            components={{
                h1: ({ children }) => <h1 className="text-white text-2xl">{children}</h1>,
                h2: ({ children }) => <h2 className="text-white text-xl">{children}</h2>,
                h3: ({ children }) => <h3 className="text-white text-lg">{children}</h3>,
                h4: ({ children }) => <h4 className="text-white text-md">{children}</h4>,
                h5: ({ children }) => <h5 className="text-white text-sm">{children}</h5>,
                h6: ({ children }) => <h6 className="text-white text-xs">{children}</h6>,
                p: ({ children }) => <p className="text-white">{children}</p>,
                em: ({ children }) => <em className="text-white">{children}</em>,
                strong: ({ children }) => <strong className="text-white">{children}</strong>,
                a: ({ children, href }) => <a href={href} className="text-white">{children}</a>,
                blockquote: ({ children }) => <blockquote className="text-white">{children}</blockquote>,
                code: ({ children }) => <code className="text-white">{children}</code>,
                pre: ({ children }) => <pre className="text-white">{children}</pre>,
                img: ({ src, alt }) => <img src={src} alt={alt} className="text-white" />,
                ul: ({ children }) => <ul className="text-white">{children}</ul>,
                ol: ({ children }) => <ol className="text-white">{children}</ol>,
                li: ({ children }) => <li className="text-white">{children}</li>,
                hr: () => <hr className="text-white" />,
                table: ({ children }) => <table className="text-white">{children}</table>,
                tr: ({ children }) => <tr className="text-white">{children}</tr>,
                th: ({ children }) => <th className="text-white">{children}</th>,
                td: ({ children }) => <td className="text-white">{children}</td>,
                del: ({ children }) => <del className="text-white">{children}</del>,
                br: () => <br />
            }}
        />
    );
}

export default Md;
