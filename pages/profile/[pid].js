import { useRouter } from 'next/router'

export default function Profile() {

    const router = useRouter()
    const { pid } = router.query

    return (

        <div>Hello {pid}</div>
    )
}