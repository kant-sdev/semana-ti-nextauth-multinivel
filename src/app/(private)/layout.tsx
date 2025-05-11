import Header from "@/components/layout/header/header";

export default function PrivateLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <Header/>
            {children}
        </>
    );
}
