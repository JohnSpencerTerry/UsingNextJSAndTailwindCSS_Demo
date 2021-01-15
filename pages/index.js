import Link from 'next/link'


export default function Home() {
  return (
    <div>

        <Link href="/profile/browse/">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">public pet profiles</button>
        </Link>

        <Link href="/profile/pet/">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">your pet's profile</button>
        </Link>

    </div>
  )
}
