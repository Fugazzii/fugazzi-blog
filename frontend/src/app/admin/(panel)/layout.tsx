import Tabs from "@/components/Tabs";

type Props = {
    readonly children: React.ReactNode;
}

const PanelLayout = ({ children }: Props) => {
    return (
        <div className="w-full h-full bg-gray-950 p-4 flex flex-col justify-around items-center">
            <Tabs />
            <div className="w-full h-[70vh] flex flex-col justify-center items-center">
                {children}
            </div>
        </div>
    );
}

export default PanelLayout;