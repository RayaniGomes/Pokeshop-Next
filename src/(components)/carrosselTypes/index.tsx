import { types } from "@/data/helps";
import Image from "next/image";

export default function CarrosselTypes() {
    return (
        <div>
            {types.map((type) => (
                <div key={type.id}>
                    <Image
                        src={type.image}
                        alt={type.name}
                        width={50}
                        height={50}
                    />
                    <p>{type.description}</p>
                </div>
            ))}
        </div>
    )
}