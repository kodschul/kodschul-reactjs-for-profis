import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";

export default function User() {
  const params = useParams();

  return (
    <main>
      <div>
        Welcome user: <b>{params?.id}</b>
      </div>
    </main>
  );
}
