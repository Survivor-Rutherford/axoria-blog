import {connectToDB} from "@/lib/utils/db/connectToDB"

export default async function Home() {
  await connectToDB()
  return <div className="">Axoria Blog</div>
}
