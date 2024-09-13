import Image from "next/image"
export default function Header() {
    return (
        <header className="flex justify-around  pt-4">
            <Image
                src="/imgs/olympic-symbols.png"
                width={100}
                height={100}
                alt="olympic symbols"
            />
            <Image
                src="/imgs/ginastica.png"
                width={50}
                height={50}
                alt="olympic symbols"
            />

        </header>
    )
}