import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";
import {useRouter} from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const router = useRouter();
    const handleLogin = () => {
        console.log("Call Login Button")
        router.push('/login')
        console.log("Login")
    }

  return (
    <>
      <main >
          {/*<Link href="/login"><a>Login</a></Link>*/}
          <button className={'bgOrange'} onClick={()=>handleLogin()}>
              Login 하러 가기 버튼
          </button>
          <div>
           여기서 작업하시면 됩니다.
          </div>

          <div>
            예시
          </div>
          <div>
              예시 나열
          </div>
      </main>
    </>
  )
}
