import Image from "next/image"
export default function Header() {
    return (
        <header className="flex justify-around bg-olympic-gradient pt-4">
            <Image
                src="/imgs/olympic-symbols.png"
                width={200}
                height={200}
                alt="olympic symbols"
            />
            <Image
                src="/imgs/ginastica.png"
                width={100}
                height={100}
                alt="olympic symbols"
            />

        </header>
    )
}